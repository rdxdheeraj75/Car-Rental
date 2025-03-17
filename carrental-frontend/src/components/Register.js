import React, { useState } from "react";
import "../styles.css";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "USER", // Default role
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    const user = {
      username: formData.username,
      password: formData.password,
      authority: formData.role,
    };

    //alert("User detail is: " + user.username);

    /*const AUTH_REST_API_BASE_URL = "http://localhost:8080";
    axios
      .post(AUTH_REST_API_BASE_URL + "/register" + user)
      .catch((error) => alert("Error: " + error));
    */
    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      //credentials: "include",
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`${user.username} User Registered Successfully...`);
        const defaultState = {
          username: "",
          password: "",
          role: "USER",
        };

        setFormData(defaultState);
      })
      .catch((error) => alert("Error creating user: " + error));
  };

  return (
    <div className="register-container">
      <h2>Register New User</h2>
      <form onSubmit={handleSubmit} className="register-form">
        {/* Username Field */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Role Selection */}
        <div className="form-group">
          <label htmlFor="role">Authority</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
}
