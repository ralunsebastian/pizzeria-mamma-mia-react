import React, { useState, useEffect } from "react";
import CardPizza from "./CardPizza"; // Importamos el componente CardPizza
import { Container, Row, Col } from "react-bootstrap"; // Usamos React Bootstrap para la estructura

const Home = () => {
  const [pizzas, setPizzas] = useState([]); // Usamos un array para almacenar todas las pizzas

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas"); // Solicitar todas las pizzas
        const data = await response.json();
        setPizzas(data); // Actualizamos el estado con las pizzas obtenidas
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas(); // Llamamos a la API cuando el componente se monte
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <Container className="mt-5 pt-4">
      <h1 className="text-center mb-4">Pizzas</h1>
      {pizzas.length > 0 ? (
        <Row>
          {pizzas.map((pizza) => (
            <Col key={pizza.id} md={4} className="mb-4">
              <CardPizza pizza={pizza} /> {/* Pasamos cada pizza como prop */}
            </Col>
          ))}
        </Row>
      ) : (
        <p>Cargando pizzas...</p> // Mensaje de carga si no hay pizzas todavía
      )}
    </Container>
  );
};

export default Home;

