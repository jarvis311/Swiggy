import React from "react";
import './paynow.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct, removeCartProduct } from "../../Redux/Slices/Cart";

const PayNow = () => {
  const cartProduct = useSelector((state) => state.cart.products);
  const dispatch = useDispatch()
  let total = 0;
   cartProduct?.map((item) => {
    total = total + item.totalPrice;
    return total
  });
  const cartSingleProduct = useSelector(state => state.cart.cartSingleProduct)
  
  // const handleAddtoCart = () => {
  //     dispatch(fetchSingleProduct(cartSingleProduct))    
  // }

  // const handleRemovetoCart = () => {
  //   dispatch(removeCartProduct(cartSingleProduct?.id))
  // }
  return (
    <div className="paynow container">
      {cartProduct?.map((item) => (
        <div key={item.id} className="show-product">
          <div className="productnamne">
            <h4 className="">{item.product_name}  <span> × </span> {item.quantity}</h4>
          </div>
          {/* <div className="quantity">
            <button onClick={handleRemovetoCart} >-</button>
            <button onClick={handleAddtoCart} >+</button>
          </div> */}
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
