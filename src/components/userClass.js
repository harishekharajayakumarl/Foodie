// This is a class based component
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            count:0,
            count2: 2,
        };
        console.log("Child Constructor");
    }
    componentDidMount(){
        console.log("Child DidMount");
    }
    render(){
        const { name, location } = this.props;
        const { count, count2 } = this.state;
        console.log("Child Render");
        return(
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>
                    Count increase
                </button>
            {/* <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}</h3> */}
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
        </div>
        );
    };
};

export default UserClass;