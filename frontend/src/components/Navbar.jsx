import React from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Importamos useNavigate
import { useCart } from "../context/CartContext"; // Importamos el contexto del carrito
import { useUserContext } from "../context/UserContext"; // Importamos el contexto del usuario

const Navbar = () => {
  const { total } = useCart(); // Obtenemos el total dinámicamente desde el contexto
  const { token, logout } = useUserContext(); // Obtenemos el token y la función logout del UserContext
  const navigate = useNavigate(); // Hook para redirigir después de logout

  const handleLogout = () => {
    logout(); // Ejecutamos el logout
    navigate("/"); // Redirigimos a la página de inicio
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" className="w-100 fixed-top">
      <div className="container">
        <BootstrapNavbar.Brand as={Link} to="/">🍕 Pizzería Mamma Mia</BootstrapNavbar.Brand>
        <Nav className="ms-auto">
          {/* Botón de Home siempre visible */}
          <Nav.Link as={Link} to="/" className="text-light">🏠 Home</Nav.Link>

          {/* Si el token existe (usuario autenticado), mostramos Profile y Logout */}
          {token ? (
            <>
              <Nav.Link as={Link} to="/profile" className="text-success">🔓 Profile</Nav.Link>
              <Nav.Link className="text-danger" onClick={handleLogout}>🔒 Logout</Nav.Link>
            </>
          ) : (
            // Si el token no existe (usuario no autenticado), mostramos Login y Register
            <>
              <Nav.Link as={Link} to="/login" className="text-primary">🔐 Login</Nav.Link>
              <Nav.Link as={Link} to="/register" className="text-warning">🔐 Register</Nav.Link>
            </>
          )}

          {/* Botón de Total siempre visible */}
          <Nav.Link as={Link} to="/cart" className="text-info">
            🛒 Total: ${total.toLocaleString()}
          </Nav.Link>
        </Nav>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;

