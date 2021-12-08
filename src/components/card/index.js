import React from "react";
import { Card } from "react-bootstrap";
import "./index.css";

const ImageCard = ({ title, imgSrc, description, redirectUrl }) => {
  return (
    <a
      className="image-card"
      href={redirectUrl}
      target="_blank"
      rel="noreferrer"
    >
      <Card
        style={{ height: "100%", position: "relative", overflow: " hidden" }}
      >
        <div className="overlay">{title}</div>
        <Card.Img variant="top" src={imgSrc} />
        {/* <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body> */}
      </Card>
    </a>
  );
};

export default ImageCard;
