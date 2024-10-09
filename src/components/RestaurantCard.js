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
        <div className="rest-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="rest-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                cloudinaryImageId}
            alt="food" 
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{restData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;