import React from "react";
import './paynow.css'
import { useSelector } from "react-redux";

const PayNow = () => {
  const cartProduct = useSelector((state) => state.cart.products);
  let total = 0;
   cartProduct?.map((item) => {
    total = total + item.totalPrice;
    return total
  });
  return (
    <div className="paynow container">
      {cartProduct?.map((item) => (
        <div key={item.id} className="show-product">
          <div className="productnamne">
            <h4 className="">{item.product_name}  <span> × </span> {item.quantity}</h4>
          </div>
          <div className="price">
            <h4>{item.product_price}</h4>
          </div>
        </div>
      ))}
      <hr style={{width:'60%', marginLeft:'180px'}} />
      <div className="show-total">
        <div>Total</div>
        <div>{total}</div>
      </div>
      <div className="confirm">
        <button className="btn btn-success">Confirm Your Order</button>
      </div>
    </div>
  );
};

export default PayNow;
