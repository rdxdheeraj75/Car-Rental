import "./App.css";
import { useEffect, useState } from "react";
import CarsGrid from "./components/CarsGrid";
import { Routes, Route, useNavigate } from "react-router-dom";
import CarDetail from "./components/CarDetail";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import Admin from "./components/Admin";
import MyBookings from "./components/MyBookings";

function App() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  const [carId, setCarId] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080")
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  const handleClick = (carId) => {
    //alert("car id clicked.." + carId);
    setCarId(carId);
    navigate("/details");
    //window.open("http://localhost:3000/get");
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<CarsGrid cars={cars} handleClick={handleClick}></CarsGrid>}
        ></Route>

        <Route
          path="/details"
          element={<CarDetail carId={carId}></CarDetail>}
        ></Route>

        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/about" element={<About></About>}></Route>

        <Route path="/admin" element={<Admin></Admin>}></Route>

        <Route path="/mybookings" element={<MyBookings></MyBookings>}></Route>
      </Routes>
    </div>
  );
}

export default App;
