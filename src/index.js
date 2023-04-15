import React from "react";
import ReactDOM from "react-dom";

const name = "Shubham";
const year = 2023;

ReactDOM.render(
  <div>
    <p>created by {name} </p>
    <p>In year {year}</p>
  </div>,
  document.getElementById("root")
);
