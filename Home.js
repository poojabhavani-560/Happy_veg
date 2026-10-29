import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-hero">
      <div className="home-image">
        <img src="/veg.jpeg" alt="Fresh vegetables" />
      </div>

      <div className="home-copy">
        <p className="eyebrow">FRESH • NATURAL • HEALTHY</p>
        <h1>Fresh and organic</h1>
        <h2>Your Daily Need Products</h2>
        <p>
          Fresh vegetables for your everyday cooking.
          Choose your favourites and add them to your cart.
        </p>
        <Link to="/vegetables" className="green-button">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Home;