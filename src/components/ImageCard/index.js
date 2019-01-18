import React from "react";

function ImageCard(props) {
  return (
    <img alt={props.key} src={props.image} />
  );
}

export default ImageCard;
