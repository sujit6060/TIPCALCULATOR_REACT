import React from "react";
import { Card } from "react-bootstrap";

function Header() {
  return (
    <div className="mb-4">
      <Card className="text-center">
        <Card.Header
          style={{
            fontSize: "30px",
            fontFamily: "Times New Roman, Times, serif",
            fontWeight: "bolder",
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          TipCalculator
          <p style={{ fontSize: "20px", margin: 0 }}>Built in React</p>
        </Card.Header>
      </Card>
    </div>
  );
}

export default Header;
