import React from "react";
import { Container } from "react-bootstrap";
import "./css/Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-3">
      <Container className="text-center">
        <div>&copy; {currentYear} Pavithra Saravanan</div>
      </Container>
    </footer>
  );
}
