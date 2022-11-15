import React, { useState } from "react";
import "./foodlist.css";
import image1 from "../../images/pure_veg.png";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, fetchSingleProduct } from "../../Redux/Slices/Cart";
import Cart from "../Cart/Cart";
const FoodList = ({ productData, sTerm, id }) => {
  
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    setData(item);
    dispatch(fetchSingleProduct(item));
    // dispatch(fetchCartSingleProduct(item))
  };

  const cartdata = useSelector((state) => state.cart.products);
  const showCart = useSelector(state => state.cart.showCart)
  return (
    <>
      {productData[0]
        ?.filter((item) =>
          item.product_name.toLowerCase().includes(sTerm.toLowerCase()))
        .map((item) => (
          <React.Fragment key={item.id}>
            <div className="foodlist">
              <div className="foodlist_content">
                <div className="foodlist_bestseller">
                  <img src={image1} alt="" style={{ width: "15px" }} />
                  <StarIcon style={{ color: "#EEA00F" }} />
                  <span style={{ color: "#EEA00F" }}> Bestseller </span>
                </div>
                <div className="foodlist_foodtitle">{item.product_name}</div>
                <span className="foodlist_price">₹ {item.product_price}</span>
                <p className="foodlist_description">
                  {item.product_decription}
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="btn foodlist_addcart_btn"
                >
                  Add to cart
                </button>
              </div>
              <div className="foodlist_image">
                <img
                  src={item.product_image}
                  alt=""
                  style={{ height: "150px", width: "250px" }}
                />
              </div>
            </div>
            <hr style={{ width: "100%" }} />
          </React.Fragment>
        ))}
      {cartdata.length !== 0 && showCart ? <Cart data={data} id={id} /> : ""}
    </>
  );
};

export default FoodList;
