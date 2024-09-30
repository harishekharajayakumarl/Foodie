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

const RestaurantCard = () => {
    return(
        <div className="rest-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="rest-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kewshvgvu2j4w0u9amjy" alt="food" />
            <h3>Hotel Royale park</h3>
            <h4>Indian, Chinese, Continental</h4>
            <h4>4.1 stars</h4>
            <h4>38 mins</h4>
        </div>
    );
}
const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="rest-container">
                <RestaurantCard />
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