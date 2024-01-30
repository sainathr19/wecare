import React from "react";
import "./Location.scss";
export default function Location() {
  return (
    <div className="location-div">
      <iframe
        className="live-location"
        frameborder="0"
        src="https://stem.ubidots.com/app/dashboards/public/widget/IMGlq3Sn69GlKVneTDrb6DpvqEFpGNBE67STj0fjkrI?embed=true"
      ></iframe>
    </div>
  );
}
