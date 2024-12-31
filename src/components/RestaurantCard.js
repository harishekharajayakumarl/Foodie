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
        <div className="m-4 p-4 w-[250px]" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="rest-logo" 
            src={CDN_URL + cloudinaryImageId}
            alt="food" 
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{restData.info.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;