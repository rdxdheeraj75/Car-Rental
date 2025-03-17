import BookingsTable from "./BookingsTable";
import { useEffect, useState } from "react";
import "../styles.css";
import api from "./axiosInstance";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    let apiRequest = "";
    if (localStorage.getItem("authority") === "ADMIN") {
      apiRequest = "/admin/bookings";
    } else {
      apiRequest = "/user/bookings/" + localStorage.getItem("username");
    }

    console.log(apiRequest);

    api
      .get(apiRequest)
      .then((response) => {
        console.log(response.data);
        setBookings(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <BookingsTable bookings={bookings}></BookingsTable>
    </div>
  );
}
