import React from "react";
import "./Ddashboard.scss";
import { useState } from "react";
export default function Ddashboard() {
  const [search, setsearch] = useState({ username: "" });

  return (
    <div>
      <h1> Docter Dashboard</h1>
      <div className="search">
        <label htmlFor="search">Search a Patient</label>
        <input
          type="text"
          onChange={(e) => {
            setsearch({ ...search, username: e.target.value });
            console.log(search + "1");
            console.log(search);
          }}
        />
      </div>
    </div>
  );
}
