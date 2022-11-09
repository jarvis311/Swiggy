import React from "react";
import "./cart.css";
import image1 from "../../images/pure_veg.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, fetchSingleProduct } from "../../Redux/Slices/Cart";
const Cart = ({data}) => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.products);
  console.log("dataa>>>", data);

  const handleAddtoCart = () => {
    dispatch(fetchSingleProduct(data));
  };

  const removeCartItem = (item) => {
    dispatch(cartAction.removeCartItem(item))
  }
  let total = 0;
  const renderBilling = cartProduct?.map((item) => {
    total = total + item.totalPrice;
    return total
  });

  const renderCart = cartProduct?.map((item) => (
    <div key={item.id} className="cart_food_items">
      <div className="cart_food_title">
        <img
          src={image1}
          alt=""
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />
        <h6>{item.product_name}</h6>
      </div>
      <div className="foodlist_cart_button">
        <button onClick={() => removeCartItem(item)} className="minus">-</button>
        <span className="quantity">{item.quantity}</span>
        <button onClick={handleAddtoCart} className="plus">
          +
        </button>
      </div>
      <div className="cart_food_price">
        <h6>₹{item.product_price}</h6>
      </div>
    </div>
  ));
  return (
    <div className="cart">
      <div className="cart_restaurant_title">
        <h2>Cart</h2>
        <span>Adress of Restaurants</span>
        <hr />
      </div>
      {renderCart}
      <hr />
      <div className="cart_bill_details">
        <h4>Bill details</h4>
        <div className="cart-total">
          <p>Item total</p>
          <span>{total}</span>
        </div>
        <div className="cart_deliver_charge">
          <p>Delivery Fee | 0.8 kms</p>
          <span>₹ 20</span>
        </div>
        <div className="cart_total_pay">
          <p>Total pay</p>
          {/* <span>₹ {item.totalPriice }</span> */}
        </div>
        <hr />
        <div className="cart_pay">
          <Link to="/oredr-success" className="btn btn-success">
            Pay now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
