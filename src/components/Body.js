import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus  from "../../utils/useOnlineStatus";

const Body = () => {

// useState is for creating state variable, it is a hook (a utility function) for creating this State Variable we make use of React hooks, to be precise here we use useState hook
// like a functional component is simply a javascript function that returns a JSX and a react element is simply a javascript object. Similarly a React hook is also a javascript function which is given to us by React (its a prebuilt), the only difference being this javascript function comes with certain extra superpowers, 
// this javascript function has some logic written BTS inside React, this javascript function is a utility function readily available to us by React
//in simple words React hook is a utility function provided to us by React that make work of our component more easier or that streamlines the work of your React components

// The second parameter here (setListOfrestaurant) is the function for any modification or any other fuctionalities
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredrestaurant] = useState([]);

    console.log("Body Rendered");
// Whenever state variables updates, react trigeers a reconciliation cycle

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.558095699999999&lng=76.8807437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false) 
        return (
        <h1>
            Looks like you are offline 😥!!! Please check your internet connection
        </h1>
        );

    // Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer />;
    // };
    
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search p-4 m-4">
                    <input type="text" className="border border-solid border-black shadow-lg" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                      <button className="px-4 py-2 bg-orange-400 m-4 rounded-full shadow-xl"
                    onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredrestaurant(filteredRestaurant);
    
                    }}>Search</button>
                </div>
                <div className="p-4 m-4 flex items-center">
                    <button className="px-4 py-2 bg-green-500 m-4 shadow-xl rounded-full" 
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res)=> res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                        // console.log(listOfRestaurants);
                    }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map(restaurant => ( 
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard  restData={restaurant}/> </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;