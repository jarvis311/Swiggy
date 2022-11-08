import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllData } from "../../Redux/Slices/Restaurant";
import "./restaurantlist.css";
const RestaurantList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllData())
  }, [dispatch])
  
  const restaurantData = useSelector((state) => state.restaurant.restaurants);
  const renderProductData =
  restaurantData[0]?.map(item =>(

    <div key={item.id} className="card col-md-4 my-2 mx-2" style={{ width: "18rem" }}>
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/02/b6/d8/ad/grilled-sandwich.jpg"
        className="card-img-top"
        alt="foodimage"
      />
      <div className="card-body">
        <h5 className="card-title">{item.restaurant_name}</h5>
        <p className="card-text">
          {item.restaurant_decription}
        </p>
        <Link to={`/food/${item.id}`} className="btn btn-primary">
          Order now
        </Link>
      </div>
    </div>
  ))
  return <div className="row restaurantlist col-md-4">{renderProductData}</div>;
};

export default RestaurantList;
