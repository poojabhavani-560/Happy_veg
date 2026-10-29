import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { state } = useCart();
  const count = state.cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand-logo">
          <img src="/OIP.jpg" alt="HappyVeg logo" />
        </Link>

        <Link to="/" className="brand-title">HappyVeg</Link>

        <form
          className="search-box"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = "/vegetables";
          }}
        >
          <input aria-label="Search vegetables" placeholder="Search vegetables..." />
          <button type="submit">⌕</button>
        </form>

        <Link to="/cart" className="header-cart">
          🛒 Cart ({count})
        </Link>
      </header>

      <nav className="main-navigation">
        <Link to="/">Home</Link>
        <Link to="/accountcreation">Account Creation</Link>
        <Link to="/login">Login</Link>
        <Link to="/vegetables">Vegetables</Link>
        <Link to="/offers">Offer</Link>
        <Link to="/contactus">Contact Us</Link>
      </nav>
    </>
  );
}

export default Navbar;