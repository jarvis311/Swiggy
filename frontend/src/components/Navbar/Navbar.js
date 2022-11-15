import React, { useState } from "react";
import "./navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import img1 from "../../images/swiggy.png";
// import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Redux/Slices/Cart";
const Navbar = () => {
  const cartProduct = useSelector((state) => state.cart.products);
const dispatch = useDispatch()
  let total = 0;
  cartProduct?.map((item) => {
    total = total + item.quantity;
    return total;
  });

  const handleShowCart = () => {
    dispatch(cartAction.showCart())
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img className="navbar_iimg" src={img1} alt="" />
          <Link className="navbar-brand" to="/">
            SWIGGY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar_cart_quantity">
            <div className="navbar_cart_quantity_number">{total}</div>
            <ShoppingCartIcon
              style={{
                color: "black",
                marginLeft: "20px",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={handleShowCart}
            />
          </div>
        </div>
      </nav>
      {/* {showCart === true ? <Cart /> : ""} */}
    </>
  );
};

export default Navbar;
