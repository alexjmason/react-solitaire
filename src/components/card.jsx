import React from "react";
import Draggable from "react-draggable";
// import CardImage from './../assets/images/cards/9D.png'

export default function Card(image) {
  return (
    <Draggable bounds="body" defaultPosition={{ x: 30, y: 30 }}>
      <div className="play-card">
        <img src={image} draggable="false" alt={"image"} />
      </div>
    </Draggable>
  );
}
