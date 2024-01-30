import React from "react";
import { Link } from "react-router-dom";
import "./LoggedNav.scss";
export default function LoggedNav() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link className="home-link" to="/">
            <h3>WeCare</h3>
          </Link>
        </div>
      </div>
    </>
  );
}
