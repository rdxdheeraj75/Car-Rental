import React from "react";
import "../styles.css";
import api from "./axiosInstance";

const BookingsTable = ({ bookings }) => {
  let isAdmin = localStorage.getItem("authority") === "ADMIN" ? true : false;

  function handleAction(id) {
    if (isAdmin) {
      api
        .put(`/admin/verify/${id}`)
        .then((response) => {
          console.log(response);
          // Refresh the page
          window.location.reload();
        })
        .catch((error) => console.log("Error verifying booking: " + error));
    } else {
      api
        .delete(`/delete/booking/${id}`)
        .then((response) => {
          console.log("Booking id: " + id + " is deleted successfully");
          // Refresh the page
          window.location.reload();
        })
        .catch((error) => {
          console.log("Error deleting booking: ", error);
        });
    }
  }

  return (
    <div className="bookings-container">
      <h2>All Bookings</h2>
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Booking Id</th>
            <th>Company Name</th>
            <th>Variant</th>
            <th>Price</th>
            <th>Customer</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.bookingId}</td>
              <td>{booking.companyName}</td>
              <td>{booking.carModel}</td>
              <td>{booking.rent}</td>
              <td>{booking.username}</td>
              <td>{booking.fromDate}</td>
              <td>{booking.toDate}</td>
              <td>{booking.isVerified ? "Verified" : "Not Verified"}</td>
              <td>
                <button
                  className="view-btn"
                  onClick={() => handleAction(booking.bookingId)}
                >
                  {isAdmin ? "Verify" : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTable;
