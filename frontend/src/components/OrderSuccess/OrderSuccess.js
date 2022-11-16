import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Map from "../Map/Map";
import "./oredrSucecss.css";
import RouteIcon from "@mui/icons-material/Route";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Redux/Slices/Cart";

const OrderSuccess = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.products);
  const userAddress = useSelector((state) => state.user.userAddress);

  const CartIsEmapty = (
    <div className="empty_cart">
      <img
        style={{ width: "28rem" }}
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt=""
      />
      <h2>Your cart is empty</h2>
      <Link to="/">Go to Home</Link>
    </div>
  );

  var minutes = Math.floor(userAddress?.totalTime / 60);
  const distance = userAddress?.totalDistance / 1000;
  const d = parseFloat(distance).toFixed(2);

  let total = 0;
  cartProduct?.map((item) => {
    total = total + item.totalPrice;
    return total;
  });

  const doCartEmptyAfterOdering = () => {
    dispatch(cartAction.cartEmptyAfterOdering());
  };

  const product = cartProduct?.map((item) => (
    <tr
      key={item.id}
      className="product_details"
      style={{ textAlign: "center" }}
    >
      <th
        style={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}
        className="food_name"
      >
        {item?.product_name}
      </th>
      <th
        style={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}
        className="quantity"
      >
        {item?.quantity}
      </th>
      <th
        style={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}
        className="price"
      >
        ₹ {item?.product_price}
      </th>
      <th
        style={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}
        className="price"
      >
        ₹ {item?.totalPrice}
      </th>
    </tr>
  ));
  return (
    <>
      {cartProduct.length === 0 ? (
        <>{CartIsEmapty}</>
      ) : (
        <div className="order_success">
          <div className="map__">
            <Map />
          </div>

          <div className="adress_details">
            <div className="adress_notes">
              <div className="your_adresss">
                <div>Address Details</div>
              </div>
              <div className="adress_title">
                <RoomOutlinedIcon style={{ fontSize: "32px" }} />
                {userAddress.name ? (
                  userAddress.name
                ) : (
                  <p>Select your location</p>
                )}
              </div>
              <div className="adress_distance">
                <RouteIcon /> Distance: <span>{d} Km</span>
              </div>
              <div className="adrress_time">
                <AccessTimeIcon /> Time : <span>{minutes}</span> min
              </div>
            </div>
            <div className="paynow">
              <table style={{ textAlign: "center" }} className="product table">
                <tr className="product_details_title">
                  <th style={{ fontWeight: "500" }} className="food_name">
                    Name
                  </th>
                  <th style={{ fontWeight: "500" }} className="quantity">
                    Quantity
                  </th>
                  <th style={{ fontWeight: "500" }} className="price">
                    Item Price
                  </th>
                  <th style={{ fontWeight: "500" }} className="price">
                    Total Price
                  </th>
                </tr>
                {product}
              </table>
              <div className="delivery_charges">
                <span>Delivery charges &nbsp; &nbsp; ₹20</span>
              </div>
              <div className="order_confirm">
                <div style={{ width: "22rem" }}>
                  <Link
                    onClick={doCartEmptyAfterOdering}
                    to="/oredr-confirn"
                    className="btn btn-success"
                  >
                    Total pay now
                  </Link>
                </div>
                <div>
                  <span className="total">₹ {total + 20}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderSuccess;
