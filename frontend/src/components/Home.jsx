// Home.js
import React, { useState, useEffect } from "react";
import CardPizza from "./CardPizza"; // Importamos el componente CardPizza
import { Container, Row, Col } from "react-bootstrap"; // Usamos React Bootstrap para la estructura

const Home = () => {
  const [pizza, setPizza] = useState(null); // Ahora solo necesitamos una pizza

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001"); // Solicitar solo la pizza con ID "p001"
        const data = await response.json();
        setPizza(data); // Actualizamos el estado con la pizza obtenida
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza(); // Llamamos a la API cuando el componente se monte
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <Container className="mt-5 pt-4">
      <h1 className="text-center mb-4">Pizza</h1>
      {pizza ? (
        <Row>
          <Col md={4} className="mb-4">
            <CardPizza pizza={pizza} /> {/* Pasamos la pizza con ID p001 como prop */}
          </Col>
        </Row>
      ) : (
        <p>Cargando pizza...</p> // Mensaje de carga en caso de que la pizza aún no se haya cargado
      )}
    </Container>
  );
};

export default Home;
