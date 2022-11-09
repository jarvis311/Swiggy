import React, { useState } from "react";
import "./foodlist.css";
import image1 from "../../images/pure_veg.png";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../Redux/Slices/Cart";
import Cart from '../Cart/Cart'
const FoodList = ({ productData }) => {
  const [data, setData] = useState({})
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    setData(item)
    dispatch(fetchSingleProduct(item))
  };

  const cartdata = useSelector(state => state.cart.products)
  return (
    <>
      {productData[0]?.map((item) => (
        <div key={item.id} className="foodlist">
          <div className="foodlist_content">
            <div className="foodlist_bestseller">
              <img src={image1} alt="" style={{ width: "15px" }} />
              <StarIcon style={{ color: "#EEA00F" }} />
              <span style={{ color: "#EEA00F" }}> Bestseller </span>
            </div>
            <div className="foodlist_foodtitle">{item.product_name}</div>
            <span className="foodlist_price">₹ {item.product_price}</span>
            <p className="foodlist_description">{item.product_decription}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="btn foodlist_addcart_btn"
            >
              Add to cart
            </button>
          </div>
          <div className="foodlist_image">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmt97jhlxo3daz3wikwv"
              alt=""
            />
          </div>
        </div>
      ))}

      <hr style={{ width: "80%" }} />

        { cartdata.length !== 0 ? <Cart data={data}/> :  ''
           
        }        
    </>
  );
};

export default FoodList;
