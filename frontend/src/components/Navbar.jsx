import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false; // Simulación de login

  return (
<BootstrapNavbar bg="dark" variant="dark" className="w-100 fixed-top">
  <div className="container">
    <BootstrapNavbar.Brand as={Link} to="/">🍕 Pizzería Mamma Mia</BootstrapNavbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/" className="text-light">🏠 Home</Nav.Link>
      {token ? (
        <>
          <Nav.Link as={Link} to="/profile" className="text-success">🔓 Profile</Nav.Link>
          <Nav.Link as={Link} to="/logout" className="text-danger">🔒 Logout</Nav.Link>
        </>
      ) : (
        <>
          <Nav.Link as={Link} to="/login" className="text-primary">🔐 Login</Nav.Link>
          <Nav.Link as={Link} to="/register" className="text-warning">🔐 Register</Nav.Link>
        </>
      )}
      <Nav.Link as={Link} to="/cart" className="text-info">🛒 Total: ${total.toLocaleString()}</Nav.Link>
    </Nav>
  </div>
</BootstrapNavbar>

  );
};

export default Navbar;

