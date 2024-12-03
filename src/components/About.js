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
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent DidMount");
    }
    render(){
        console.log("Parent Render");
        return(
                    <div>
                        <h1>About</h1>
                        {/* <User name="Harishekhar" location="Alappuzha"/> */}
                        <UserClass name="Hari Shekhar" location="Thiruvananthapuram"/>
                    </div>
                );
    }
}
export default About;