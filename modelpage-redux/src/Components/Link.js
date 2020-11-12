import React from "react";
import Image from './Image';

const Link = ({link}) => {
  return (
    <span style={{ margin: "5px" }}>
      <Image
        url={link.imgUrl}
        alt={"Car"}
        height={15}
        width={15}
      />
    <a href={link.href} style={{ padding: "3px", textDecoration: "none", color: "grey" }}>
      {link.title}
    </a>
    </span>
  );
};

export default Link;
