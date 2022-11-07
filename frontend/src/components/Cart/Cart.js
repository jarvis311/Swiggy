import React from "react";
import "./cart.css";
import image1 from "../../images/pure_veg.png";
const Cart = () => {
  return (
    <div className="cart">
      <div className="cart_restaurant_title">
        <h2>Restaurant Name</h2>
        <span>Adress of Restaurants</span>
        <hr />
      </div>
      <div className="cart_food_items">
        <div className="cart_food_title">
          <img src={image1} alt="" style={{ width: "20px", height:'20px', marginRight:'10px'}} />
          <h6>Burger</h6>
        </div>
        <div className="foodlist_cart_button">
          <button className="plus">+</button>
          <span className="quantity">5</span>
          <button className="minus">-</button>
        </div>
        <div className="cart_food_price">
          <h6>₹451</h6>
        </div>
      </div>
      <hr />
      <div className="cart_bill_details">
        <h4>Bill details</h4>
        <div className="cart-total">
          <p>Item total</p>
          <span>₹ 520</span>
        </div> 
        <div className="cart_deliver_charge">
          <p>Delivery Fee | 0.8 kms</p>
          <span>₹ 644</span>
        </div>
        <div className="cart_total_pay">
          <p>Total pay</p>
          <span>₹ 45478</span>
        </div>
        <hr />
        <div className="cart_pay">
          <button className="btn btn-success">Pay now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
