import React from "react"

const NextImage = ({ ...props }) => {
  return <img {...props}  alt={props.alt || "image"}/>;
};

export default NextImage;
