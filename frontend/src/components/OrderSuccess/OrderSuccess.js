import React from "react";
import Map from "../Map/Map";
import "./oredrSucecss.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useSelector } from "react-redux";
import PayNow from "./PayNow";

const OrderSuccess = () => {
  const cartProduct = useSelector((state) => state.cart.products);
  console.log("first", cartProduct);
  return (
    <>
      {cartProduct.length === 0 ? (
        <>
          <h1 style={{marginTop:'80px'}}>No cart item hear</h1>
        </>
      ) : (
      <>
        <div className="oredrSucecss">
            <Map />
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
