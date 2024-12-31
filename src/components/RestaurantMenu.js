import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;


    const { name, cuisines, costForTwoMessage, totalRatingsString, avgRatingString, avgRating  } = resInfo?.cards[2]?.card?.card?.info || {};
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    
    return (
        <div className="m-4 p-4 rounded-lg shadow-lg bg-green-50" >
            <h1 className="font-bold text-xl text-center">{name}</h1>
            <h2  className="font-bold text-lg flex wrap" style={{ display: 'inline-block'}}>{avgRatingString} ({totalRatingsString})</h2>
            <h2 className='font-bold text-lg'>{costForTwoMessage}</h2>
            <p>{cuisines.join(", ")}</p> 
            <h2 className="font-bold text-xl">Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;