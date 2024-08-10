import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    {/* Header area */}
    <TopHeader />
    {/* Navbar area */}
    <Navbar/>
  </React.StrictMode>
);
 
