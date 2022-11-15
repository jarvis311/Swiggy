import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllData, fetchLanLng } from "../../Redux/Slices/Restaurant";
import "./restaurantlist.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const RestaurantList = ({ sTerm }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);
  const handleDispatch = (id) => {
    dispatch(fetchLanLng(id));
  };
  const restaurantData = useSelector((state) => state.restaurant.restaurants);
  const renderProductData = restaurantData[0]
    ?.filter((item) =>
      item.restaurant_name.toLowerCase().includes(sTerm.toLowerCase())
    )
    .map((item) => (
      <div key={item.id} className="card col-md-4">
        <img
          src={item.restaurant_image}
          className="card-img-top"
          alt="foodimage"
          style={{ height: "20vh", marginTop: "10px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.restaurant_name}</h5>
          <p className="card-text">
            {item.restaurant_decription.substring(0, 80)}..
          </p>
          <div className="rating">
            <Stack spacing={1}>
              <Rating name="rating" defaultValue={4} />
            </Stack>
          </div>
          <Link
            to={`/food/${item.id}`}
            onClick={() => handleDispatch(item.id)}
            className="btn btn-primary order_now"
          >
            Order now
          </Link>
        </div>
      </div>
    ));

  return (
    <div className="row restaurantlist col-md-4">{renderProductData} </div>
  );
};

export default RestaurantList;
