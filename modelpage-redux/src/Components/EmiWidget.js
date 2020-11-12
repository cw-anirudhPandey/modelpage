import React from "react";

const EmiWidget = (props) => {
  return (
    <div style={{ padding: "10px", margin: "5px" }}>
      Emi {props.details.cost} <button className="Rectangle-9">Customize your EMI</button>
      <p className="PriceType">For {props.details.duration}</p>
    </div>
  );
};

export default EmiWidget;
