import React from "react";

function Greetings(props) {
  let greeting;

  switch (props.lang) {
    case "fi":
      greeting = "Hei"; // Finnish
      break;
    case "de":
      greeting = "Hallo"; // German
      break;
    case "en":
      greeting = "Hello"; // English
      break;
    case "es":
      greeting = "Hola"; // Spanish
      break;
    case "fr":
      greeting = "Bonjour"; // French
      break;
    default:
      greeting = "Hi"; // Fallback greeting
      break;
  }

  const boxStyle = {
    border: "1px solid black",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    
  };


  return (
    <div style={boxStyle}>
      {greeting}, {props.children}!
    </div>
  );
}

export default Greetings;
