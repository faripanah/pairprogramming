import React from "react";

function BoxColor(props) {

  const toHex = (value) => value.toString(16).padStart(2, "0");
  const hexColor = `#${toHex(props.r)}${toHex(props.g)}${toHex(props.b)}`;

  const boxStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color: "#fff",
    padding: "20px",
    margin: "10px 0",
    textAlign: "center",
    border: "2px solid black",
   
  };

  return (
    <div style={boxStyle}>
      <p>rgb({props.r}, {props.g}, {props.b})</p>
      <p>{hexColor}</p>
    </div>
  );
}

export default BoxColor;