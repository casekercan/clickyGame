import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="img-container">
      <img alt={props.key} src={props.image} />
    </div>
  );
}

export default ImageCard;
