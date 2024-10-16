import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react"; 
// useState is for creating state variable, it is a hook (a utility function) for creating this State Variable we make use of React hooks, to be precise here we use useState hook
// in simple words just like a functional component is simply a javascript function that returns a JSX and a react element is simply a javascript object similarly a React hook is also a javascript function which is given to us by React (its a prebuilt), the only difference being this javascript function comes with certain extra superpowers, 
// this javascript function has some logic written BTS inside React, this javascript function is a utility function readily available to us by React
//in simple words React hook is a utility function provided to us by React that make work of our component more easier or that streamlines the work of your React components
const [listOfRestaurants, setListOfRestaurant] = useState([]);
// The second parameter here is the function for any modification or any other fuctionalities

let listOfRestaurantsJs = [{
    "info": {
      "id": "595197",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas","Samosa","Burger"
      ],
      "avgRating": 4.2,
      "avgRatingString": "4.2",
      "sla": {
        "deliveryTime": 59,
      }
    }
    },
    {
    "info": {
      "id": "595196",
      "name": "Dominos",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas","Samosa","Burger"
      ],
      "avgRating": 4.5,
      "avgRatingString": "3.8",
      "sla": {
        "deliveryTime": 59,
      }
    }
    },
    {
    "info": {
      "id": "595198",
      "name": "McD",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas","Samosa","Burger"
      ],
      "avgRating": 3.0,
      "avgRatingString": "4.1",
      "sla": {
        "deliveryTime": 59,
      }
    }
    }
  ];
const Body = () => {
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    listOfRestaurants = listOfRestaurants.filter(
                        (res)=> res.info.avgRating >= 4
                    );
                    console.log(listOfRestaurants);
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