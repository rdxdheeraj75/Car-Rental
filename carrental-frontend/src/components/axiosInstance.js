import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Your API URL
});

// Function to log out user and redirect
const handleTokenExpiration = () => {
  localStorage.removeItem("token"); // Clear expired token
  localStorage.removeItem("username");
  localStorage.removeItem("authority");
  window.location.href = "/login?message=expired"; // Redirect to home with message
};

// Add a request interceptor to include the token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle Expired Token
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or unauthorized
      handleTokenExpiration();
    }
    return Promise.reject(error);
  }
);

export default api;
