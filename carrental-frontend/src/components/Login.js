import React, { useState, useEffect } from "react";
import "../styles.css";
import { useLocation } from "react-router-dom";

export default function Login() {
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("message") === "expired") {
      setMessage("Your session has expired. Please log in again.");
    }
  }, [location]);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!formData.username || !formData.password) {
      setError("Username and Password are required.");
      return;
    }

    setError("");

    console.log("Username: " + formData.username);

    // Send login request to the server
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid login credentials.");
        }

        return response.json();
      })
      .then((data) => {
        if (data.token) {
          //alert("Login successful! Token stored. " + data.token);
          localStorage.setItem("token", data.token);

          // user login in user details
          localStorage.setItem("username", data.username);
          localStorage.setItem("authority", data.authority);
        } else {
          throw new Error("Token not found in response.");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="login-container">
      {message && <p style={{ color: "red" }}>{message}</p>}

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
