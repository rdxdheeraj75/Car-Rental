import React from "react";
import "../styles.css";

export default function Header() {
  // Function to log out user and redirect
  const logout = () => {
    localStorage.removeItem("token"); // Clear expired token
    localStorage.removeItem("username");
    localStorage.removeItem("authority");
    window.location.href = "/"; // Redirect to home with message
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="logo">
          CarRental
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/admin">Admin</a>
        </li>
        <li>
          <a href="/mybookings">MyBookings</a>
        </li>
        <li>
          <button
            onClick={logout}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "white",
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
