// Pizza.jsx
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap"; // Importamos componentes de React-Bootstrap

const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Estado para almacenar la pizza con ID p001

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001"); // Usamos el ID fijo p001
        const data = await response.json();
        setPizza(data); // Guardamos la pizza en el estado
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza(); // Llamamos a la API cuando el componente se monta
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div className="pizza-container d-flex justify-content-center mt-4">
      {pizza ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text>{pizza.desc}</Card.Text>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p><strong>Precio:</strong> ${pizza.price}</p>
            {/* Botón "Añadir al carrito" */}
            <Button variant="primary">Añadir al carrito</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Cargando pizza...</p> // Mensaje de carga mientras se obtiene la pizza
      )}
    </div>
  );
};

export default Pizza;
