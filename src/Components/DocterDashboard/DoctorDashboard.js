import React from "react";
import "./DoctorDashboard.scss";
import LoggedNav from "../LoggedNav/LoggedNav";
import Button from "@mui/material/Button";

export default function DoctorDashboard() {
  return (
    <>
      <LoggedNav />
      <div className="doctor-dashboard">
        <div className="dashboard-sidepanel">
          <p>sidepanel</p>
        </div>
        <div className="dashboard-main">
          <div className="status-cards">
            <div className="card">
              <p className="card-value">200</p>
              <p className="card-text">Total Patients</p>
            </div>
            <div className="card">
              <p className="card-value">100</p>
              <p className="card-text">Normal</p>
            </div>
            <div className="card">
              <p className="card-value">100</p>
              <p className="card-text">Abnormal</p>
            </div>
          </div>
          <div className="patient-search">
            <input
              className="search-input"
              type="text"
              placeholder="Patient id, name or D.O.B"
            />
            <Button className="search-button" variant="outlined">
              Search
            </Button>
          </div>
          <div className="patient-list">
            <p>patient list</p>
          </div>
        </div>
      </div>
    </>
  );
}
