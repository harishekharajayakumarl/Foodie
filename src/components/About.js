import { Component } from "react";
import User from "./User";
import UserClass from "./userClass";

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             {/* <User name="Harishekhar" location="Alappuzha"/> */}
//             <UserClass name="Hari Shekhar" location="Thiruvananthapuram"/>
//         </div>
//     );
// };
class About extends Component {
    constructor(props){
        super(props);
        console.log(this.props.name + "Parent Constructor");
    }
    componentDidMount(){
        console.log(this.props.name + "Parent DidMount");
    }
    render(){
        console.log(this.props.name + "Parent Render");
        return(
                    <div>
                        <h1>About</h1>
                        {/* <User name="Harishekhar" location="Alappuzha"/> */}
                        <UserClass name="Hari Shekhar" location="Thiruvananthapuram"/>
                        <UserClass name="Manav" location="Thrissur"/>
                    </div>
                );
    }
}
export default About;