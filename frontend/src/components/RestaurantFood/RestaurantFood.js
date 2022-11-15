import React, { useEffect } from "react";
import "./restaurantfood.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FoodList from "./FoodList";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../../Redux/Slices/ProductSlice";
import { fetchLanLng, fetchRestaurant } from "../../Redux/Slices/Restaurant";
const RestaurantFood = ({ sTerm }) => {
  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchAllData(id));
    dispatch(fetchRestaurant(id))
  }, [dispatch, id]);
  
  const restaurant = useSelector(state => state.restaurant.restaurant)
  // console.log('restaurant>>>>', restaurant)
  const productData = useSelector((state) => state.product.products);
  return (
    <>
      <div className="restaurantfood">
        <div className="restaurantfood_content">
          <img
            src={restaurant?.restaurant_image}
            alt=""
            style={{width:'18rem'}}
          />
          <div className="restaurantfood_details">
            <h2>{restaurant?.restaurant_name}</h2>
            <span>{restaurant?.restaurant_type}</span>
            <p>{restaurant?.restaurant_decription}</p>
          </div>
          <div className="restaurantfood_offer">
            <div className="restaurantfood_offer_">
              <LocalOfferIcon />
              <span>60% off up to ₹120 | Use code TRYNEW</span>
              <br />
              <br />
              <LocalOfferIcon />
              <span>60% off up to ₹120 | Use code TRYNEW</span>
            </div>
          </div>
        </div>
        <FoodList id={id} productData={productData} sTerm={sTerm} />
      </div>
    </>
  );
};

export default RestaurantFood;
