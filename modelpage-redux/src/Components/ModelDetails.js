import React from "react";
import "../css/styles.css";
import StarRating from "./StarRating";

const ModelDetails = (props) => {
  return (
    <div style={{ padding: "10px", margin: "5px" }}>
      <h2 className="SubHead2">{props.name}</h2>
      <p className="Rating">
        <StarRating rating={props.reviewDetails.rating} />{" "}
        {props.reviewDetails.totalReviewCount} Reviews
      </p>
    </div>
  );
};

export default ModelDetails;
