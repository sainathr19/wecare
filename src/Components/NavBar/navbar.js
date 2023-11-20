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
            {localStorage.getItem("username") ? (
              <Link className="profile" to="/">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNNyAyMC42NjJWMTlhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2MS42NjIiLz48L3N2Zz4="
                  alt=""
                />
                <p>{localStorage.getItem("username")}</p>
              </Link>
            ) : (
              <Link className="buttons" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
