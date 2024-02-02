import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <h3>WeCare</h3>
        </div>
        <div className="right">
          <div className="navoptions">
            <Link className="buttons" to="/login/patient">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
