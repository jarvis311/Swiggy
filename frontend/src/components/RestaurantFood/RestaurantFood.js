import React, { useEffect } from "react";
import "./restaurantfood.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FoodList from "./FoodList";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../../Redux/Slices/ProductSlice";
const RestaurantFood = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('data>>')
    dispatch(fetchAllData(id));
  }, [dispatch, id]);

  const productData = useSelector((state) => state.product.products);
  return (
    <div className="restaurantfood">
      <div className="restaurantfood_content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5_kHt0pQlzyfKOs-7EMSGtpLWE6d8mcsVx9MQmKw3DCQj4CJJsSbB86-lfz5JOOv60s&usqp=CAU"
          alt=""
        />
        <div className="restaurantfood_details">
          <h2>Restaurant Name</h2>
          <span>Type of Restaurant</span>
        </div>
        <div className="restaurantfood_offer">
          <div className="restaurantfood_offer_">
            <LocalOfferIcon />
            <span>60% off up to ₹120 | Use code TRYNEW</span>
          </div>
          <Link to="/add-product" className="restaurantfood_add_more_product">
            <button className="btn btn-primary">Add More Product</button>
          </Link>
        </div>
      </div>
      <FoodList id={id} productData={productData} />
    </div>
  );
};

export default RestaurantFood;
