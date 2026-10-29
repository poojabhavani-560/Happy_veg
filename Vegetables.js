import React from "react";
import VegetableCard from "../components/VegetableCard";

const vegetables = [
  { id: 1, name: "Brinjal", price: 20, image: "/bri.jpeg", unit: "1 kg" },
  { id: 2, name: "Carrot", price: 40, image: "/car.jpeg", unit: "1 kg" },
  { id: 3, name: "Cabbage", price: 30, image: "/cab.jpeg", unit: "1 kg" },
  { id: 4, name: "Capsicum", price: 50, image: "/cap.jpeg", unit: "1 kg" },
  { id: 5, name: "Cucumber", price: 25, image: "/cucc.jpeg", unit: "1 kg" },
  { id: 6, name: "Green Chilli", price: 35, image: "/mir.jpeg", unit: "1 kg" },
  { id: 7, name: "Onion", price: 40, image: "/on.jpg", unit: "1 kg" },
  { id: 8, name: "Spinach", price: 20, image: "/spi.jpeg", unit: "1 kg" },
  { id: 9, name: "Tomato", price: 30, image: "/tom.jpeg", unit: "1 kg" },
  { id: 10, name: "Avocado", price: 100, image: "/av.jpeg", unit: "1 kg" },
];

function Vegetables() {
  return (
    <section className="vegetables-page">
      <h1>Vegetables</h1>
      <div className="vegetable-grid">
        {vegetables.map((vegetable) => (
          <VegetableCard key={vegetable.id} vegetable={vegetable} />
        ))}
      </div>
    </section>
  );
}

export default Vegetables;