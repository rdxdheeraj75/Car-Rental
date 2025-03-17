import React from "react";
import CarCard from "./CarCard";
import "../styles.css";

export default function CarsGrid({ cars, handleClick }) {
  return (
    <div>
      <section className="hero">
        <h1>BOOK A CAR NOW</h1>
        <h2>The Amazing Ride</h2>
        <p>Ride New Models Car, Starting at just ₹1499/-</p>
        <a href="/" className="cta-button">
          Take a Ride Now...
        </a>
      </section>
      <div className="cars-grid">
        {cars.map((car) => (
          <CarCard car={car} handleClick={handleClick} key={car.id}>
            {cars.length}
          </CarCard>
        ))}
      </div>
    </div>
  );
}
