import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { state, dispatch } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [payment, setPayment] = useState("card");

  const items = state.cart;
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const shipping = subtotal === 0 || subtotal >= 500 ? 0 : 20;
  const total = Math.max(0, subtotal + tax + shipping - discount);

  function applyCoupon() {
    if (coupon.trim().toUpperCase() === "HAPPY10") {
      setDiscount(subtotal * 0.1);
      alert("10% discount applied!");
    } else {
      setDiscount(0);
      alert("Invalid coupon. Try HAPPY10.");
    }
  }

  function pay(event) {
    event.preventDefault();
    if (items.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    alert("Demo only: no payment was processed and no card details were sent.");
  }

  return (
    <section className="shopping-cart-page">
      <h1 className="cart-heading">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <span>🛒</span>
          <h2>Your cart is empty</h2>
          <p>Add fresh vegetables to get started.</p>
          <Link className="continue-shopping" to="/vegetables">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <form className="payment-section" onSubmit={pay}>
            <h2>Payment Details</h2>

            <div className="payment-methods">
              <label className={`method ${payment === "card" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                />
                Card
              </label>
              <label className={`method ${payment === "paypal" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "paypal"}
                  onChange={() => setPayment("paypal")}
                />
                PayPal
              </label>
            </div>

            {payment === "card" ? (
              <>
                <label className="cart-label">Cardholder Name</label>
                <input className="cart-input" placeholder="Name on card" required />

                <label className="cart-label">Card Number</label>
                <input
                  className="cart-input"
                  placeholder="Enter card details"
                  required
                />

                <div className="cart-small-fields">
                  <div>
                    <label className="cart-label">Expiry</label>
                    <input placeholder="MM/YY" required />
                  </div>
                  <div>
                    <label className="cart-label">CVV</label>
                    <input placeholder="CVV" required />
                  </div>
                </div>
                <p className="payment-note">
                   Payment is processed in demo mode. No real payment will be made.
                </p>
              </>
            ) : (
              <p className="paypal-notice">
                You will be redirected to PayPal to complete your purchase.
              </p>
            )}

            <button className="pay-button" type="submit">
              Pay ₹{total.toFixed(2)}
            </button>
          </form>

          <div className="order-summary">
            <h2>Order Summary</h2>

            {items.map((item) => (
              <div className="cart-product" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-product-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price} / {item.unit || "1 kg"}</p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      aria-label={`Decrease ${item.name}`}
                      onClick={() =>
                        dispatch({ type: "DECREASE_QUANTITY", payload: item.id })
                      }
                    >−</button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label={`Increase ${item.name}`}
                      onClick={() =>
                        dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
                      }
                    >+</button>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                      }
                    >Remove</button>
                  </div>
                </div>
                <strong className="cart-item-price">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </strong>
              </div>
            ))}

            <div className="coupon-box">
              <input
                value={coupon}
                onChange={(event) => setCoupon(event.target.value)}
                placeholder="Coupon code"
                aria-label="Coupon code"
              />
              <button type="button" onClick={applyCoupon}>Apply</button>
            </div>
            <p className="coupon-hint">Demo coupon: HAPPY10</p>

            <div className="cart-totals">
              <p><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></p>
              <p><span>Tax (5%)</span><span>₹{tax.toFixed(2)}</span></p>
              <p><span>Shipping</span><span>₹{shipping.toFixed(2)}</span></p>
              <p className="discount-row">
                <span>Discount</span><span>−₹{discount.toFixed(2)}</span>
              </p>
              <p className="final-total">
                <span>Total</span><span>₹{total.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;