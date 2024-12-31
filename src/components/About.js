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
        // console.log(this.props.name + "Parent Constructor");
    }
    componentDidMount(){
        // console.log(this.props.name + "Parent DidMount");
    }
    render(){
        // console.log(this.props.name + "Parent Render");
        return(
                    <div>
                        <h1 className="m-4 p-4 font-bold text-xl">About</h1>
                        {/* <User name="Harishekhar" location="Alappuzha"/> */}
                        <UserClass name={"First"} location="Thiruvananthapuram"/>
                    </div>
                );
    }
}
export default About;