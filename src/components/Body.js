import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

const listOfRestaurants = [{
    info: {
        id: "595197",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        cuisines: ["Pizzas"],
        costForTwo: "₹350 for two",
        deliveryTime: 59,
        avgRating: "4",
    },
    info: {
        id: "595196",   
        name: "Dominos",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        cuisines: ["Pizzas","Samosa","Burger"],
        costForTwo: "₹350 for two",
        deliveryTime: 50,
        avgRating: "3.8",
    }
    
}];
const Body = () => {
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    listOfRestaurants = listOfRestaurants.filter(
                        (res)=> res.info.avgRatingString > 4
                    );
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="rest-container">
                {listOfRestaurants.map(restaurant => ( 
                    <RestaurantCard key={restaurant.info.id} restData={restaurant}/>)) 
                }
            </div>
        </div>
    );
};

export default Body;