import React from "react";
import { Jumbotron, Button, Badge } from "react-bootstrap";

function JumoHead() {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "#3432" }}>
        <h1>Item List App!</h1>
        <p>This is a simple app to help organize your collections </p>

        <Button variant="danger">
         Items Owned <Badge variant="light">9</Badge>
          <span className="sr-only">unread messages</span>
        </Button>
        <p>
            
        </p>
 
        <Button  variant="warning">
         Subtotal: <Badge variant="light">$9043433,00000</Badge>
          <span className="sr-only">unread messages</span>
        </Button>
      </Jumbotron>
    </div>
  );
}
export default JumoHead;
