import React from "react";
import Image from "./Image";

const StarRating = (props) => {
  // const showStars = () => {
  return Array(5)
    .fill()
    .map((el, index) => {
      return (
        <span key={index}>
          {Math.floor(props.rating) <= index ? (
            <Image
              url={
                "https://www.flaticon.com/svg/static/icons/svg/2164/2164323.svg"
              }
              alt={"Empty Star"}
              height={17}
              width={17}
            />
          ) : (
            <Image
              url={
                "https://www.flaticon.com/svg/static/icons/svg/2164/2164197.svg"
              }
              alt={"Filled Star"}
              height={17}
              width={17}
            />
          )}
        </span>
      );
    });
  // };
};

export default StarRating;
