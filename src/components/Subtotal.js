import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useNavigate();

  return (
    <div className="subtotal">
      {/* Price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={() => history("/payment")} className="subtotal__button">
        Proceed to Buy
      </button>
      <button className="subtotal__shop">
        <Link to="/">Add more items</Link>
      </button>
    </div>
  );
}

export default Subtotal;
