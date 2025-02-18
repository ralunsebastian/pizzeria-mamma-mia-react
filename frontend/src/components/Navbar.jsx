import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar, Button } from "react-bootstrap";

const Navbar = () => {
  const total = 25000;
  const token = false; // Simulación de login

  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Container>
        <BootstrapNavbar.Brand href="#">🍕 Pizzería Mamma Mia</BootstrapNavbar.Brand>
        <Nav className="ms-auto">
          <Button variant="light" className="me-2">🏠 Home</Button>
          {token ? (
            <>
              <Button variant="success" className="me-2">🔓 Profile</Button>
              <Button variant="danger" className="me-2">🔒 Logout</Button>
            </>
          ) : (
            <>
              <Button variant="primary" className="me-2">🔐 Login</Button>
              <Button variant="warning" className="me-2">🔐 Register</Button>
            </>
          )}
          <Button variant="info">🛒 Total: ${total.toLocaleString()}</Button>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
