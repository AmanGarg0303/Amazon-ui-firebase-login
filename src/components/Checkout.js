import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

import ad from "../images/ad.jpg";
import ad1 from "../images/ad1.png";
import ad2 from "../images/ad2.jpg";
import ad3 from "../images/ad3.jpg";
import ad4 from "../images/ad4.png";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  const images = [
    { url: ad1 },
    { url: ad },
    { url: ad2 },
    { url: ad3 },
    { url: ad4 },
  ];

  const style = {
    marginBottom: "15px",
    maxHeight: "300px",
    width: "100%",
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img src={checkout} alt="" className="checkout__ad" /> */}
        <div className="slides">
          <SimpleImageSlider
            style={style}
            width={998}
            height={250}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={3.5}
            startIndex={0}
            navMargin={15}
            navStyle={1}
          />
        </div>

        <div className="checkout__userName"> Hey {user?.email}</div>

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping basket is empty</h2>
            <hr />
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
            <button className="subtotal__shop">
              <Link to="/">Go to Shop</Link>
            </button>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            <hr />

            {/* list out all the checkout profucts */}
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
