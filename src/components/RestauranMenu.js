import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    useEffect(()=>{
        fetchMenu();
    },[]);
    const [resInfo, setResInfo] = useState(null);
    const fetchMenu = async ()     => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.558095699999999&lng=76.8807437&restaurantId=113322&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
    }
    return resInfo === null ? ( 
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>Name of the restaurant</h1>
            <h3>Menu</h3>
            <ul>
                <li>Biriryani</li>
                <li>Dosa</li>
                <li>Porotta + Beef</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;