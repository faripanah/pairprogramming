import React from "react";
import "./CreditCard.css";

function CreditCard(props) {
 

  const cardTypeImage =
    props.type === "Visa"
      ? "/src/assets/images/visa.png"
      : "/src/assets/images/master-card.svg";

  return (
    <div
      className="creditCard"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      <div className="type">
        <img src={cardTypeImage} alt={props.type} width="50" />
      </div>
      <div className="number">
        •••• •••• •••• {props.number.slice(-4)}
      </div>
      <div className="expires-bank">
        <span>
          Expires {String(props.expirationMonth).padStart(2, "0")}/
          {String(props.expirationYear).slice(-2)}
        </span>
        <span>{props.bank}</span>
      </div>
      <div className="owner">{props.owner}</div>
    </div>
  );
}

export default CreditCard;
