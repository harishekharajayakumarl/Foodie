import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNamereact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    // If no dependency array, useEffect is called on every render
    // If there is an empty dependency array, useEffect will be rendered only on the initial render and only once
    useEffect(() => {
        console.log("useEffect called");
    },[btnNameReact]); 
    // whenever the btnNamereact is on the dependency array, it is rendered always when btnNamereact is updated

    return(
        <div className="header">
            <div className="logo-container">
            <img 
            className="logo" 
            src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅": "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login" 
                    onClick={() => {
                        btnNameReact === "Login"
                        ? setBtnNamereact("Logout")
                        : setBtnNamereact("Login");
                    }}
                    >{ btnNameReact }</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;