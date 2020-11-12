import React from "react";

const PriceDetails = (props) => {
  return (
    <div style={{ padding: "10px", margin: "5px" }}>
      <h2 className="SubHead2">{props.details.price}</h2>
      <h5 className="PriceType">{props.details.carType}</h5>
    </div>
  );
};

export default PriceDetails;
