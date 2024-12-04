// This is a class based component
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {};

        // console.log(this.props.name + "Child Constructor");
    }
    async componentDidMount(){
        // console.log(this.props.name + "Child DidMount");
        const data = await fetch("");
    }
    render(){
        const { name, location } = this.props;

        console.log(this.props.name + "Child Render");
        return(
            <div className="user-card">
            {/* <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}</h3> */}
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
        </div>
        );
    };
};

export default UserClass;