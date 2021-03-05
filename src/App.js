import React from "react";
import "./App.css";

let currTime = new Date();
currTime = currTime.getHours;

let greet = "";
let fontColor = {};

if ((currTime) => 1 && currTime < 12) {
  greet = "Good Morning.";
  fontColor.color = "green";
} else if ((currTime) => 12 && currTime < 19) {
  greet = "Good Afternoon.";
  fontColor.color = "red";
} else {
  greet = "Good Night.";
  fontColor.color = "violet";
}

function App() {
  return (
    <div className="App">
      <h1>
        Hello Jass, <span style={fontColor}> {greet}</span>{" "}
      </h1>
    </div>
  );
}

export default App;
