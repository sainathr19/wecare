import React from "react";
import "./datacharts.scss";

export default function Datacharts() {
  return (
    <>
      <h1>Live Data Dashboard</h1>
      <div className="datacharts">
        <div className="w">
          <h5>Pulse Rate</h5>
          <iframe
            className="widget"
            title="2"
            width="450"
            height="260"
            src="https://thingspeak.com/channels/2295429/widgets/720825"
          ></iframe>
        </div>
        <div className="w">
          <h5>Body Temperature</h5>
          <iframe
            className="widget"
            title="3"
            width="450"
            height="260"
            src="https://thingspeak.com/channels/2295429/widgets/720826"
          ></iframe>
        </div>
        <div className="w">
          <h5>ECG</h5>
          <iframe
            className="widget"
            title="1"
            width="450"
            height="260"
            src="https://thingspeak.com/channels/2295429/widgets/718973"
          ></iframe>
        </div>
      </div>
      <div className="datacharts">
        <div className="w">
          <h5>Pulse Rate</h5>
          <iframe
            className="widget"
            title="1"
            width="450"
            height="260"
            src="https://thingspeak.com/channels/2295429/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&timescale=10&type=line"
          ></iframe>
        </div>
        <div className="w">
          <h5>Body Temperature</h5>
          <iframe
            className="widget"
            title="1"
            width="450"
            height="260"
            src="https://thingspeak.com/channels/2295429/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&max=100&min=0&results=60&type=line&yaxismax=100&yaxismin=0"
          ></iframe>
        </div>
        <div className="w">
          <h5>ECG</h5>
          <iframe
            className="widget"
            title="1"
            width="450"
            height="260"
            src="https://thingspeak.com/channels/2295429/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&timescale=daily&type=spline"
          ></iframe>
        </div>
      </div>
    </>
  );
}
