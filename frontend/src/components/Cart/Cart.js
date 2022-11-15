import React from "react";
import "./cart.css";
import image1 from "../../images/pure_veg.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import AddRoundedIcon from "@mui/icons-material/AddRounded";
// import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import {
  cartAction,
  fetchSingleProduct,
  removeCartProduct,
} from "../../Redux/Slices/Cart";
import CloseIcon from "@mui/icons-material/Close";
const Cart = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.products);
  // console.log("Cart>>>>", cartProduct);
  const handleAddtoCart = (item) => {
    // console.log("Cart data hari ======", item);
    dispatch(fetchSingleProduct(item));
  };

  const removeCartItem = (id) => {
    dispatch(removeCartProduct(id));
  };
  let total = 0;
  cartProduct?.map((item) => {
    total = total + item.totalPrice;
    return total;
  });

  const handleCloseCart = () => {
    dispatch(cartAction.showCart());
  };
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
        <button
          onClick={() => removeCartItem(item.id)}
          className="minus"
        >-</button>
        <span className="quantity">{item.quantity}</span>
        <button onClick={() => handleAddtoCart(item)} className="plus">+</button>
      </div>
      <div className="cart_food_price">
        <h6>₹{item.product_price}</h6>
      </div>
    </div>
  ));

  return (
    <div className="cart">
      <CloseIcon
        style={{
          float: "right",
          marginTop: "10px",
          marginRight: "5px",
          fontSize: "30px",
          color: "black",
        }}
        onClick={handleCloseCart}
      />
      <div className="cart_restaurant_title">
        <h2>Cart</h2>
        {/* <span>Adress of Restaurants</span> */}
        <hr />
      </div>
      {renderCart.length === 0 ? (
        <h4 style={{ marginLeft: "20px", fontSize: "18px", color: "gray" }}>
          {" "}
          Not item in Cart
        </h4>
      ) : (
        renderCart
      )}
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
          <span>₹ {total + 20}</span>
        </div>
        <hr />
        <div className="cart_pay">
          <Link to="/oredr-success" className="btn btn-success" onClick={handleCloseCart}>
            Process to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
