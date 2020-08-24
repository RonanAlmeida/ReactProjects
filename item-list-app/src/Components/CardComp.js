import React from "react";
import { Card, Button } from "react-bootstrap";

function CardComponent(props) {
  return (
    <Card
      className="mx-auto"
      style={{ width: "25rem", backgroundColor: "#3432" }}
    >
      <Card.Body>
        <hr></hr>

        <Card.Title>{props.title}</Card.Title>
        <hr></hr>
        <Card.Text>{props.desc}</Card.Text>
        <Button variant="success">{props.price}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
