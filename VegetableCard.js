import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function VegetableCard({ vegetable }) {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false);

  function addToCart() {
    dispatch({
      type: "ADD_TO_CART",
      payload: vegetable,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  }

  return (
    <article className="vegetable-card">
      <img src={vegetable.image} alt={vegetable.name} />
      <h3>{vegetable.name}</h3>

      <div className="price">
        Price: ₹{vegetable.price}
      </div>

      <p>Quantity: 1 kg</p>

      <button
        type="button"
        className={`add-cart-button ${added ? "added" : ""}`}
        onClick={addToCart}
      >
        {added ? "✓ Added to Cart" : "Add To Cart"}
      </button>
    </article>
  );
}

export default VegetableCard;