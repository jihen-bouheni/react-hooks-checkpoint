import React from "react";
import { Card } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Go My Movie</Card.Title>
        <Card.Text>
          All movies you love
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">© 2020 Hannachi Mehdi</Card.Footer>
    </Card>

  );
}