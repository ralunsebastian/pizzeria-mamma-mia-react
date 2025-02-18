import React from "react";
import { Container } from "react-bootstrap";
import bannerImage from "../assets/img/Header.jpg"; // Importar la imagen
const Header = () => (
  <header
    className="text-white text-center py-5"
    style={{
        backgroundImage: `url(${bannerImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "300px", // Ajusta según el tamaño deseado
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Container>
      <h1>🍕 Pizzería Mamma Mia</h1>
      <p>Tenemos las mejores pizzas que podrás encontrar!</p>
    </Container>
  </header>
);

export default Header;
