import React from "react";
import "./navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import img1 from "../../images/swiggy.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartProduct = useSelector((state) => state.cart.products);

  let total = 0;
    cartProduct?.map((item) => {
    total = total + item.quantity;
    return total;
  });
  return (
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
        <Link to="/oredr-success">
          <div className="navbar_cart_quantity">
            <div className="navbar_cart_quantity_number">{total}</div>
            <ShoppingCartIcon
              style={{
                color: "black",
                marginLeft: "20px",
                fontSize: "30px",
                cursor: "pointer",
              }}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
