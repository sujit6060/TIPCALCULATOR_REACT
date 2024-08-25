import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="page-footer font-small text-white"
      style={{ backgroundColor: "#212529" }}
    >
      <Container>
        <div className="text-center py-3">
          © {new Date().getFullYear()} Copyright All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
