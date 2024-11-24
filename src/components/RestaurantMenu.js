import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    useEffect(()=>{
        fetchMenu();
    },[]);
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    
    const fetchMenu = async ()     => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.558095699999999&lng=76.8807437&restaurantId=113324&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    };

    if (resInfo === null) return <Shimmer />;


    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage} </p> 
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li>{item.card.info.name} - { "Rs." }{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;