// This is a class based component
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://dummy-pic.com",
            },
        };

        // console.log(this.props.name + "Child Constructor");
    }
    async componentDidMount(){
        // console.log(this.props.name + "Child DidMount");
        const data = await fetch("https://api.github.com/users/harishekharajayakumarl");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
    }
    componentDidMount(){
        console.log("Component Did Mount");
    }
    componentWillUnmount(){
        console.log("Component Will unmount");
    }
    render(){
        const { name, location, avatar_url } = this.state.userInfo;
        // debugger;
        // console.log(this.props.name + "Child Render");
        return(
        <div className="user-card">
            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
        </div>
        );
    };
};

export default UserClass;