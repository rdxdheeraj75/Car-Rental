import React from "react";
import { useEffect, useState } from "react";
import "../styles.css";
import api from "./axiosInstance";

export default function About() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:8080/about`)
  //     .then((response) => response.json())
  //     .then((data) => alert(data));
  // }, []);

  useEffect(() => {
    api
      .get("/about")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;

  //return <div>Hello World... {localStorage.getItem("token")}</div>;
}
