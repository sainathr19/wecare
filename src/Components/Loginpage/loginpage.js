import React, { useState } from "react";
import "./loginpage.scss";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginPage(props) {
  const navigate = useNavigate();
  let [Formdata, setFormdata] = useState({ username: "", password: "" });
  const [passmode, setpassmode] = useState("password");
  const openeye =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWV5ZSI+PHBhdGggZD0iTTIgMTJzMy03IDEwLTcgMTAgNyAxMCA3LTMgNy0xMCA3LTEwLTctMTAtN1oiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+PC9zdmc+";
  const closedeye =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWV5ZS1vZmYiPjxwYXRoIGQ9Ik05Ljg4IDkuODhhMyAzIDAgMSAwIDQuMjQgNC4yNCIvPjxwYXRoIGQ9Ik0xMC43MyA1LjA4QTEwLjQzIDEwLjQzIDAgMCAxIDEyIDVjNyAwIDEwIDcgMTAgN2ExMy4xNiAxMy4xNiAwIDAgMS0xLjY3IDIuNjgiLz48cGF0aCBkPSJNNi42MSA2LjYxQTEzLjUyNiAxMy41MjYgMCAwIDAgMiAxMnMzIDcgMTAgN2E5Ljc0IDkuNzQgMCAwIDAgNS4zOS0xLjYxIi8+PGxpbmUgeDE9IjIiIHgyPSIyMiIgeTE9IjIiIHkyPSIyMiIvPjwvc3ZnPg==";
  const [eye, seteye] = useState(openeye);
  const welcome = props.isDoctor ? "Welcome Back Doctor!" : "Welcome Back!";
  const desc = props.isDoctor
    ? "Seamless access for doctors, fostering remote health monitoring excellence."
    : "Unlock Your Wellness Journey: Log In to a Healthier You!";

  const loginsubmit = async () => {
    console.log(Formdata);
    if (Formdata.username === "testuser" || Formdata.password === "password") {
      toast.success("Logged in");
      setTimeout(function () {
        if (props.isDoctor) {
          navigate("/dashboard/doctor", { replace: true });
        } else {
          navigate("/dashboard/monitor", { replace: true });
        }
      }, 3000);
    } else {
      toast.error("Invalid credentials");
    }
  };
  const passeye = () => {
    passmode === "text" ? setpassmode("password") : setpassmode("text");
    eye === openeye ? seteye(closedeye) : seteye(openeye);
  };

  return (
    <>
      <Toaster />
      <div className="loginpage">
        <div className="left">
          <h1>{welcome}</h1>
          <p>"{desc}"</p>
          <div className="form">
            <div className="li">
              <div className="fake">
                <p> </p>
              </div>
              <input
                type="text"
                className="logininput"
                placeholder="Username"
                id="username"
                onChange={(e) => {
                  setFormdata({ ...Formdata, username: e.target.value });
                }}
              />
            </div>
            <div className="li">
              <div className="fake">
                <p> </p>
              </div>
              <div className="password">
                <input
                  type={passmode}
                  className="logininput"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => {
                    setFormdata({ ...Formdata, password: e.target.value });
                  }}
                />
                <button onClick={passeye} className="passeye">
                  <img src={eye} alt="" />
                </button>
              </div>
            </div>
            <div className="fp">
              <Link to="/forgotpass" className="forgotpass">
                Forgot password?
              </Link>
            </div>
            <button onClick={loginsubmit} className="loginbutton" type="submit">
              Login
            </button>
          </div>
          <div className="footer">
            <p className="footer1">Don't have credentials?</p>
            <Link to="/contactus" className="footer2">
              Contact us.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
