import React from "react";
import { Container } from "react-bootstrap";
import bannerImage from "../assets/img/Header.jpg"; // Importar la imagen
const Header = () => (
  <header
    className="text-white text-center py-5"
    style={{

      position: "relative",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white", // Asegura que el texto sea visible
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${bannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    }}
  >
    <Container>
      <h1>🍕 Pizzería Mamma Mia</h1>
      <p>Tenemos las mejores pizzas que podrás encontrar!</p>
    </Container>
  </header>
);

export default Header;
