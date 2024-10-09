import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

const listOfRestaurants = [];
const Body = () => {
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{console.log("Button Clicked")}}>Top Rated Restaurants</button>
            </div>
            <div className="rest-container">
                {
                    listOfRestaurants.map(restaurant => ( //written index for reference to the below point
                    <RestaurantCard key={restaurant.info.id} restData={restaurant}/>)) //good convention: whenever doing a .map always put a key in the functional component below //good practise wrt React render cycle //important for optimization and efficiency
                    //never use key={index}, not recommended - bad practice as per React documentation ~ for more info https://react.dev/learn/rendering-lists, https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/, https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
//unique id as key (BEST option) index as key (can be used but not recommended) not using key (NOT acceptable)  
                }
            </div>
        </div>
    );
};

export default Body;