import React from "react";
import ReactCountryFlag from "react-country-flag";
import "./flag.css";

function ExampleComponent() {
  return (
    <div>
      <span className="flag">
        <ReactCountryFlag countryCode="us" svg />
        <language>EN </language>
      </span>
    </div>
  );
}

export default ExampleComponent;
