import React from "react";
import "./Dataset.scss";
export default function Dataset() {
  return (
    <div className="monitor-div">
      <div className="heart-rate">
        <iframe
          className="heart-rate-chart"
          width="80%"
          frameborder="0"
          src="https://stem.ubidots.com/app/dashboards/public/widget/-BuM7tpvkoR6ZsSVI4E7Zs8E76yA0evjNVkrhtVbmdI?embed=true"
        ></iframe>
      </div>
      <div className="bottom">
        <div className="temperature">
          <iframe
            className="temp-value"
            frameborder="0"
            src="https://stem.ubidots.com/app/dashboards/public/widget/0zz6POxpk1ps_JhrQehCUwboUHKb_O3yMe-_qN4VJmk?embed=true"
          ></iframe>
        </div>
        <div className="blood-pressure">
          <iframe
            className="blood-pressure-chart"
            frameborder="0"
            src="https://stem.ubidots.com/app/dashboards/public/widget/rQ1i1k-NpmVtRXhU-g9Ik6hyDAfYELEIZPxZ29HCzk0?embed=true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
