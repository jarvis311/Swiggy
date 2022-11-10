import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import RestaurantList from "./Restaurants/RestaurantList";
import { Routes, Route } from "react-router-dom";
import RestaurantFood from "./RestaurantFood/RestaurantFood";
import Cart from "./Cart/Cart";
// import Map from "./Map/Map";
import Dashboard from "./Dashboard/Dashboard";
import AddMoreProduct from "./Dashboard/AddMoreProduct";
import OrderSuccess from "./OrderSuccess/OrderSuccess";
import Searchbar from "./Searchbar/Searchbar";
const Home = () => {
  const [sTerm, setSTerm] = useState('')
  return (
    <div>
      <Navbar />
      {/* <Map/> */}
      <div className="container">
        <Routes>
          <Route path="/" element={ <> <Searchbar setSTerm={setSTerm}/><RestaurantList sTerm={sTerm}/> </>} />
          <Route path="/food/:id" element={ <><Searchbar setSTerm={setSTerm}/><RestaurantFood sTerm={sTerm} /> </>} />
          <Route path="/add-cart/:productId" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-product" element={<AddMoreProduct />} />
          <Route path="/oredr-success" element={<OrderSuccess />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
