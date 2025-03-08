import React, { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "../context/CartContext"; // Importar el contexto

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart(); // Obtener la función para agregar al carrito

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="main-content">
      <Container className="mt-5 pt-4">
        <h1 className="text-center mb-4 text-white">Pizzas</h1>
        {pizzas.length > 0 ? (
          <Row>
            {pizzas.map((pizza) => (
              <Col key={pizza.id} md={4} className="mb-4">
                <CardPizza pizza={pizza} addToCart={addToCart} /> {/* Pasamos addToCart */}
              </Col>
            ))}
          </Row>
        ) : (
          <p className="text-white text-center">Cargando pizzas...</p>
        )}
      </Container>
    </div>
  );
};

export default Home;
