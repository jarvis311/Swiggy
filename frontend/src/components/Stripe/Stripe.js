import React, { useState } from "react";
import './stripe.css'


const Stripe_ = () => {
    const [RealAddress, setRealAddress] = useState([])
    console.log('RealAddress>>>>>>>>>>>>.',RealAddress)
    const getAddressFromCoordinates  = async(latitude, longitude) => {
        try {
          const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=key`);
          const json = await response.json();
          setRealAddress(json.results[0]?.formatted_address);
          return json?.results[0]
        } catch (error) {
          console.error(error);
        }
      }
      getAddressFromCoordinates(72.82257627234381,21.18960500224558)
  return (
    // <form action="/charge" method="post" id="payment-form">
    //   <div className="form-row">
    //     <label htmlFor="card-element">Credit or debit card</label>
    //     <div id="card-element"></div>

    //     <div id="card-errors" role="alert"></div>
    <h1></h1>
    //   </div>
    //   <button>Submit Payment</button>
    // </form>
  );
};

export default Stripe_;
