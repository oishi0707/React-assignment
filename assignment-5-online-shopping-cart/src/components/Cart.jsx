import { useState } from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { state, dispatch } = useCart();
  const [couponCode, setCouponCode] = useState("");

  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal * (state.coupon / 100);

  const afterDiscount = subtotal - discount;

  const gst = afterDiscount * 0.18;

  const grandTotal = afterDiscount + gst;

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "SAVE10") {
      dispatch({
        type: "APPLY_COUPON",
        payload: 10
      });
      alert("10% coupon applied!");
    } else {
      dispatch({
        type: "APPLY_COUPON",
        payload: 0
      });
      alert("Invalid coupon code");
    }
  };

  return (
    <div className="cart">

      <h2>Shopping Cart</h2>

      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        state.cart.map(item => (
          <div className="cart-item" key={item.id}>

            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            <div className="quantity">

              <button
                onClick={() =>
                  dispatch({
                    type: "DECREASE",
                    payload: item.id
                  })
                }
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch({
                    type: "INCREASE",
                    payload: item.id
                  })
                }
              >
                +
              </button>

            </div>

            <button
              className="remove"
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id
                })
              }
            >
              Remove
            </button>

          </div>
        ))
      )}

      <div className="coupon">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={e => setCouponCode(e.target.value)}
        />

        <button onClick={applyCoupon}>
          Apply Coupon
        </button>

        <p>Try coupon: <b>SAVE10</b></p>
      </div>

      <div className="summary">

        <h3>Order Summary</h3>

        <p>
          Subtotal:
          <span>₹{subtotal.toFixed(2)}</span>
        </p>

        <p>
          Discount:
          <span>-₹{discount.toFixed(2)}</span>
        </p>

        <p>
          GST (18%):
          <span>₹{gst.toFixed(2)}</span>
        </p>

        <hr />

        <h2>
          Grand Total:
          <span>₹{grandTotal.toFixed(2)}</span>
        </h2>

      </div>

    </div>
  );
}

export default Cart;