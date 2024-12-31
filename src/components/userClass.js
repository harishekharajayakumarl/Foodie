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
    // for api call
    async componentDidMount(){ 
        // console.log(this.props.name + "Child DidMount");
        const data = await fetch("https://api.github.com/users/harishekharajayakumarl");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
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
            <img src={avatar_url} className="rounded-3xl w-[200px] m-4 p-4 shadow-xl" />
            <h2 className="m-4 p-4 ">Name: {name}</h2>
            <h3 className="m-4 p-4">Location: {location}</h3>
        </div>
        );
    };
};

export default UserClass;