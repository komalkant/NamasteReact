import {useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";

const Main = () => {
  const [restaurantListVar, setRestaurantListVar] = useState([]);
  useEffect(() => {
    // API Call
    console.log("useEffect called");
    fetchData();
    
  }, []);

  const fetchData = async() => {
    const result = await fetch("http://localhost:5151/api/restaurants");
    const json = await result.json();
    console.log(json);
    setRestaurantListVar(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(restaurantListVar.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <div className="filter">
        <button className="filter-btn" 
        onClick={()=> {
          const filterdList = restaurantListVar.filter((res) => res.avgRating > 4.3);
          console.log("clicked", filterdList);
          setRestaurantListVar(filterdList);
        }}
        >Top Rated Restaurants</button>
      </div>
    <div className="body-component">
      <div className="restaurant-list">
        {restaurantListVar.map((restObj, index) => (
          <RestaurantCard key={index} restObj={restObj} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Main;