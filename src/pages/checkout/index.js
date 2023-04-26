import React from "react";
import "./style.css";
import Subtotal from "../../components/subtotal";
function Checkout() {
  return (
    <div className="checkout">
      {/* image */}
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt=""
        />

        {/* title */}

        <h2 className="checkout_title">Your Shopping Basket</h2>
        {/* basketitem */}
        {/* basketitem */}
        {/* basketitem */}
        {/* basketitem */}
      </div>
      {/* // checkout_left */}
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
