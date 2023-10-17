import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// import axios from "axios";
// const data = await axios.get("http://localhost:3001/test");
// console.log(data);

// fetch("http://localhost:3001/test")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("/api/test")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-center" />
  </React.StrictMode>
);
