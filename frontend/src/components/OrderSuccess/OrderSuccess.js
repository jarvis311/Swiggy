import React from "react";
import Map from "../Map/Map";
import "./oredrSucecss.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useSelector } from "react-redux";
import PayNow from "./PayNow";
import { Link} from "react-router-dom";
const OrderSuccess = () => {
  const cartProduct = useSelector((state) => state.cart.products);
  const restaurant = useSelector(state => state.restaurant.restaurant)
  


  const CartIsEmapty = (
    <div className='empty_cart'>
      <img style={{width:'28rem'}} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
      <h2>Your cart is empty</h2>
      <Link to='/'>Add Food</Link>
    </div>
  )
  return (
    <>
      {cartProduct.length === 0 ? (
        <>
          {CartIsEmapty}
        </>
      ) : (
      <>
        <div className="oredrSucecss">
            <Map lat={restaurant?.restaurant_latitude} lng={restaurant?.restaurant_longitude}/>
            <div className="address_details">
              <div className="address_content">
                <div className="title_adresss">
                  <HomeOutlinedIcon style={{ marginTop: "5px" }} />
                  <h3>Home</h3>
                </div>
                <div className="current_address">
                  <p className="address_text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem, enim atque. Rem ab fugiat nobis officiis! Incidunt
                    iste ab totam.
                  </p>
                </div>
                <div className="duration">
                  <span>20 Min</span>
                </div>
                <div className="delever_here">
                  <button className="btn btn-success">DELIVER HERE</button>
                </div>
              </div>
            </div>
          </div>
        <PayNow />
        </>
      )}
    </>
  );
};

export default OrderSuccess;
