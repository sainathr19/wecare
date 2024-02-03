// import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/navbar";
import "./Homepage.scss";
export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="banner">
          <div className="banner-head">Don't miss a beat.</div>
          <div className="banner-text">
            WeCare is the cutting-edge, powerful and easy solution for
            monitoring health in real time. Our non-invasive portable technology
            keeps clinicians and loved ones in the loop about a patient's health
            condition by providing an up to the minute data dashboard and alerts
            system when unusual behaviour is detected.
          </div>
        </div>
      </div>
      <div className="features">
        <p className="features-head">Features</p>
        <div className="features-cards">
          <div className="feature-card">
            <img
              src="https://www.cardiomo.com/assets/images/heart.png"
              alt=""
              className="feature-card-img"
            />
            <p className="feature-card-text">
              Actual ECG (Electrocardiogram) recording
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://www.cardiomo.com/assets/images/continuous_monitoring.png"
              alt=""
              className="feature-card-img"
            />

            <p className="feature-card-text">
              Continuous and comfortable health monitoring.
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://www.cardiomo.com/assets/images/notifications.png"
              alt=""
              className="feature-card-img"
            />

            <p className="feature-card-text">
              Instant notifications for relatives and caregivers
            </p>
          </div>
          {/* <div className="feature-card">
            <p>card</p>
          </div> */}
        </div>
      </div>
      <div className="div-1">
        <p className="div-1-head">Who is it for?</p>
        <div className="cards">
          <div className="card">
            <img
              className="card-img"
              src="https://www.cardiomo.com/assets/images/wcb_1.png"
              alt=""
            />
            <p className="card-head">People with high CVD risk</p>
            <p className="card-text">
              The pace of life in today's world is can be very demanding. This
              has led to significant growth in all types of people facing heart
              related health risks. Stress, obesity, smoking, alcohol or
              physical inactivity are quite common.WeCare's continuous
              monitoring can detect heart health issues at an early stage.
            </p>
          </div>
          <div className="card">
            <img
              className="card-img"
              src="https://www.cardiomo.com/assets/images/wcb_2.png"
              alt=""
            />
            <p className="card-head">Your family and relatives</p>
            <p className="card-text">
              WeCare's 'observer' functionality leverages the power of
              TeleHealth to provide real-time visibility into the health
              condition of the elderly or people who find themselves alone for
              long periods of time. Our platform sends notifications and alerts
              if urgent help is required.
            </p>
          </div>
          <div className="card">
            <img
              className="card-img"
              src="https://www.cardiomo.com/assets/images/wcb_3.png"
              alt=""
            />
            <p className="card-head">Health enthusiasts</p>
            <p className="card-text">
              WeCare offers enhanced capabilities to track your vitals —
              real-time EKG and blood pressure estimation. If you take your
              fitness or workout seriously, you need to monitor more parameters
              than just a pulse.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="contact-us">
        <p className="contactus-head">Contact us</p>
        <div className="contacts">
          <div className="contact-card">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2stdXNlciI+PHBhdGggZD0iTTQgMTkuNXYtMTVBMi41IDIuNSAwIDAgMSA2LjUgMkgyMHYyMEg2LjVhMi41IDIuNSAwIDAgMSAwLTVIMjAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjIiLz48cGF0aCBkPSJNMTUgMTNhMyAzIDAgMSAwLTYgMCIvPjwvc3ZnPg=="
              alt=""
              className="contact-card-img"
            />
          </div>
          <div className="contact-card"></div>
        </div>
      </div> */}
    </>
  );
}
