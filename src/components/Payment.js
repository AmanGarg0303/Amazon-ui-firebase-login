import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Payment() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section address">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>
              <strong>{user?.email}</strong>
            </p>
            <p>Home Address</p>

            <h4>
              Contact No.
              <CurrencyFormat
                className="card"
                placeholder="Contact Number"
                format="##########"
              />
            </h4>
          </div>
        </div>

        {/* Payment section - review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
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
        </div>

        {/* Payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <div className="payment__method">
              <input
                className="payment__method"
                type="radio"
                id="debit"
                name="payment"
                value="debit"
              />
              <label for="debit">Debit Card</label>
            </div>
            <div className="payment__method">
              <input
                className="payment__method"
                type="radio"
                id="credit"
                name="payment"
                value="credit"
              />
              <label for="credit">Credit Card</label>
            </div>
            <div className="payment__method">
              <input
                className="payment__method"
                type="radio"
                id="visa"
                name="payment"
                value="visa"
              />
              <label for="visa">Visa</label>
            </div>
            <div className="payment__method">
              <input
                className="payment__method"
                type="radio"
                id="cash"
                name="payment"
                value="cash"
              />
              <label for="cash">Cash</label>
            </div>

            <div className="card__details">
              <h4>Enter Card Deails</h4>
              <CurrencyFormat
                className="card"
                placeholder=" Card Number"
                format="#### #### #### ####"
              />
              <CurrencyFormat
                className="card"
                placeholder=" Expiry Date"
                format="##/##"
                mask={["M", "M", "Y", "Y"]}
              />
              <CurrencyFormat
                className="card"
                placeholder=" CVV"
                format="###"
              />
            </div>

            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p className="payment__total">
                    <h3>Subtotal</h3> ({basket.length} items): &nbsp;
                    <strong>{value}</strong>
                  </p>
                  <button className="payment__paybtn">Pay</button>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
