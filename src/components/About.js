import User from "./User";
import UserClass from "./userClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <User name="Harishekhar" location="Alappuzha"/>
            <UserClass name="Hari Shekhar" location="Thiruvananthapuram"/>
        </div>
    );
};

export default About;