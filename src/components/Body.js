import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react"; 

const Body = () => {

// useState is for creating state variable, it is a hook (a utility function) for creating this State Variable we make use of React hooks, to be precise here we use useState hook
// like a functional component is simply a javascript function that returns a JSX and a react element is simply a javascript object. Similarly a React hook is also a javascript function which is given to us by React (its a prebuilt), the only difference being this javascript function comes with certain extra superpowers, 
// this javascript function has some logic written BTS inside React, this javascript function is a utility function readily available to us by React
//in simple words React hook is a utility function provided to us by React that make work of our component more easier or that streamlines the work of your React components

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
// The second parameter here (setListOfrestaurant) is the function for any modification or any other fuctionalities

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=> res.info.avgRating >= 4
                    );
                    setListOfRestaurants(filteredList);
                    // console.log(listOfRestaurants);
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