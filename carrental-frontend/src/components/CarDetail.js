import React, { useEffect, useState } from "react";
import "../styles.css";
import api from "./axiosInstance";

export default function CarDetail({ carId }) {
  const [car, setCar] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/get/${carId}`)
      .then((response) => response.json())
      .then((data) => setCar(data));
  }, [carId]);

  const handleBooking = () => {
    if (!fromDate || !toDate) {
      alert("Please select both From and To dates");
      return;
    }

    const bookingDetails = {
      username: localStorage.getItem("username"),
      carModel: car.modelName,
      companyName: car.companyName,
      rent: car.rent,
      fromDate: fromDate,
      toDate: toDate,
    };

    console.log("Booking Details:", bookingDetails);

    if (localStorage.getItem("username")) {
      console.log("Great. user is logged in");
      handleBookingRequest(bookingDetails);
    } else {
      console.log("please login first before booking");
    }

    //Here, you can make an API request to save the booking details
    // api
    //   .post("/book", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(bookingDetails),
    //   })
    //   .then((response) => response.json())
    //   .then((data) => console.log("Booking confirmed", data))
    //   .catch((error) => console.error("Error booking car:", error));
  };

  const handleBookingRequest = async (bookingDetails) => {
    try {
      const response = await api.post("/book", bookingDetails);
      console.log("Booking confirmed:", response.data);
    } catch (error) {
      console.error("Error booking car:", error);
    }
  };

  return (
    <div className="car-card">
      <img src={`/${car.id}.webp`} alt={car.modelName} className="car-image" />
      <div className="car-details">
        <h2 className="car-name">{car.companyName}</h2>
        <div className="car-info">
          <div className="info-item">
            <i className="fas fa-gas-pump"></i> {car.fuelType}
          </div>
          <div className="info-item">
            <i className="fas fa-car"></i> {car.modelName}
          </div>
          <div className="info-item">
            <i className="fas fa-user-friends"></i> {car.capacity}
          </div>
          <div className="info-item">
            <i className="fas fa-calendar-alt"></i> {car.manufactureYear}
          </div>
          <div className="info-item">
            <i className="fas fa-globe"></i> {car.companyWebsite}
          </div>
          <div className="info-item">
            <i className="fas fa-snowflake"></i> {car.isAc ? "Yes" : "No"}
          </div>
        </div>
      </div>
      <div className="car-booking">
        <div className="car-price">
          <span>&#8377; {car.rent}</span>
        </div>
        <div className="booking-dates">
          <label>
            From{" "}
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </label>
          <label>
            To{" "}
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </label>
          <button className="book-button" onClick={handleBooking}>
            Book Car
          </button>
        </div>
      </div>
    </div>
  );
}
