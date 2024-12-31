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
        <div className="flex justify-between bg-blue-50 shadow-lg">
            <div className="logo-container">
            <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul class="flex p-4 m-4">
                    <li className="px-4 font-bold text-lg">Online Status: {onlineStatus ? "✅": "🔴"}</li>
                    <li className="px-4 font-bold text-lg"><Link to="/">Home</Link></li>
                    <li className="px-4 font-bold text-lg"><Link to="/about">About</Link></li>
                    <li className="px-4 font-bold text-lg"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 font-bold text-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-lg"><Link to="/cart">Cart</Link></li>
                    <button className="font-bold text-lg" 
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