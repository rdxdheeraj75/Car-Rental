import React from "react";
import "../styles.css";

export default function CarCard({ car, handleClick }) {
  return (
    <div className="car-card" key={car.id} onClick={() => handleClick(car.id)}>
      <img
        src={`/${car.id}.webp`}
        alt={`${car.modelName}`}
        className="car-image"
      />
      <div className="car-details">
        <h2 className="car-name">{car.modelName}</h2>
        <div className="car-info">
          <div className="info-item">
            <i className="fas fa-gas-pump"></i> {car.fuelType}
          </div>
          <div className="info-item">
            <i className="fas fa-user-friends"></i> {car.capacity}
          </div>
          <div className="info-item">
            <i className="fas fa-globe"></i> {car.companyName}
          </div>
        </div>
      </div>
      <div className="car-price">
        <span>&#8377; {car.rent}</span>
      </div>
    </div>
  );
}
