import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const { restData } = props;
    return(
        <div className="rest-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="rest-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kewshvgvu2j4w0u9amjy" alt="food" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.stars}</h4>
            <h4>{props.time}</h4>
        </div>
    );
}

    
const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="rest-container">
                <RestaurantCard 
                resName="Royale Park" 
                cuisine="India, Chinese, Continental"
                stars = "stars: 4.1"
                time="40 minutes"
                />
                <RestaurantCard 
                resName="KFC" 
                cuisine="Fried items"
                stars = "stars: 4.5"
                time="30 minutes"
                />

            </div>
        </div>
    );
}
const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);