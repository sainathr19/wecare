// import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/navbar";
import "./Homepage.scss";
import { Navigate } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <NavBar />
      {localStorage.getItem("username") && (
        <Navigate to="/dashboard" replace={true} />
      )}
      <div className="wrapper">
        <div className="topbox">
          <p>HealthTracker: Stay connected to your health</p>
        </div>
      </div>
    </>
  );
}
