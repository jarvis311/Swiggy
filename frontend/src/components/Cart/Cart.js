import React, { useEffect } from "react";
import "./cart.css";
import image1 from "../../images/pure_veg.png";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../Redux/Slices/Cart";
import axios from "axios";
const Cart = () => {
  const dispatch = useDispatch();
  const { productId } = useParams([])
  const cartProduct = useSelector(state => state.cart.product)
  useEffect(() => {
    dispatch(fetchSingleProduct(productId))
  },[]);

  const handleAddtoCart = () => {
    dispatch(fetchSingleProduct(productId))
  }

  const renderBilling = cartProduct?.map(item => (
    <div className="cart_bill_details">
    <h4>Bill details</h4>
    <div className="cart-total">
      <p>Item total</p>
      <span>₹ {item.totalPriice}</span>
    </div>
    <div className="cart_deliver_charge">
      <p>Delivery Fee | 0.8 kms</p>
      <span>₹ 20</span>
    </div>
    <div className="cart_total_pay">
      <p>Total pay</p>
      <span>₹ {item.totalPriice + 20}</span>
    </div>
    <hr />
    <div className="cart_pay">
      <Link to='/oredr-success' className="btn btn-success">Pay now</Link>
    </div>
  </div>
  ))
    const renderCart = cartProduct?.map(item => (
      <div key={item.id} className="cart_food_items">
      <div className="cart_food_title">
        <img
          src={image1}
          alt=""
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />
        <h6>{item.name}</h6>
      </div>
      <div className="foodlist_cart_button">
        <button onClick={handleAddtoCart} className="plus">+</button>
        <span className="quantity">{item.quantity}</span>
        <button onClick={handleAddtoCart} className="minus">-</button>
      </div>
      <div className="cart_food_price">
        <h6>₹{item.price}</h6>
      </div>
    </div>
    ))
  return (


    <div className="cart">
      <div className="cart_restaurant_title">
        <h2>Cart</h2>
        <span>Adress of Restaurants</span>
        <hr />
      </div>
     {renderCart}
      <hr />
    {renderBilling}
    </div>
  );
};

export default Cart;
