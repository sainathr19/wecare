import React from "react";
import "./ModeSelector.scss";
import LoggedNav from "../LoggedNav/LoggedNav";
import { Link } from "react-router-dom";
export default function ModeSelector() {
  return (
    <>
      <LoggedNav />
      <div className="mode-selector">
        <p className="mode-head">Select user Type</p>
        <div className="button-container">
          <Link to="/login/patient" className="buttons">
            Patient
          </Link>
          <Link to="/login/doctor" className="buttons">
            Doctor
          </Link>
        </div>
      </div>
    </>
  );
}
