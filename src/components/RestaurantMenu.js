import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu = () => {
    useEffect(()=>{
        fetchMenu();
    },[]);
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    
    const fetchMenu = async ()     => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    };

    if (resInfo === null) return <Shimmer />;


    const { name, cuisines, costForTwoMessage, totalRatingsString, avgRatingString, avgRating  } = resInfo?.cards[2]?.card?.card?.info || {};
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2 style={{ display: 'inline-block'}}>{avgRatingString} ({totalRatingsString})</h2>
            <h2 className='cost'>{costForTwoMessage}</h2>
            <p>{cuisines.join(", ")}</p> 
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;