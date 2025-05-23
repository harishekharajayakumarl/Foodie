import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;
    
    const { name, cuisines, costForTwoMessage, totalRatingsString, avgRatingString, avgRating  } = resInfo?.cards[2]?.card?.card?.info || {};
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((element) => element?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    
    return (
        <div className="text-center" >
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            {/* <h2  className="font-bold text-lg flex wrap" style={{ display: 'inline-block'}}>{avgRatingString} ({totalRatingsString})</h2> */}
            <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p> 
            {categories?.map((category, index) => (
                <RestaurantCategory key={category?.card?.card?.title} 
                data={category?.card?.card} 
                showItems={(index === showIndex ? true : false)} 
                setShowIndex={() => setShowIndex(index === showIndex ? null : index)}/>
      ))}
        </div>
    );
};
export default RestaurantMenu;