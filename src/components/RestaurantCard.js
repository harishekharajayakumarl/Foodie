import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { restData } = props;
    const { 
        cloudinaryImageId,
        name, 
        cuisines, 
        avgRating, 
        costForTwo,
    } = restData?.info;
    return(
        <div className="m-4 p-4 w-[250px] h-[500px] rounded-lg shadow-lg" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="rounded-lg w-[250px] h-[250px]" 
            src={CDN_URL + cloudinaryImageId}
            alt="food" 
            />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{restData.info.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;