import "./forgotpass.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function ForgotPass() {
  const [username, setusername] = useState("");
  const buttonsubmit = () => {
    console.log(username);
    toast.success("Link sent");
  };

  return (
    <>
      <Toaster />
      <div className="forgotpass">
        <h1>Forgot Password?</h1>
        <p>"Reset password in two quick steps"</p>
        <div className="li">
          <div className="fake">
            <p> </p>
          </div>
          <input
            type="text"
            className="logininput"
            placeholder="Username or email"
            id=""
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        </div>
        <button onClick={buttonsubmit} className="loginbutton" type="submit">
          Send Link
        </button>
        <div className="footer">
          <p className="footer1">Have your Credentials?</p>
          <Link to="/login" className="footer2">
            Login now.
          </Link>
        </div>
      </div>
    </>
  );
}
