import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Importar el contexto

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart(); // Obtener función del contexto

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={pizza.img} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
        <Card.Text>Precio: ${pizza.price.toLocaleString()}</Card.Text>
        
        {/* Lista de ingredientes */}
        <div>
          <strong>Ingredientes:</strong>
          <ul className="list-unstyled">
            {pizza.ingredients.map((ingrediente, index) => (
              <li key={index}>🍕 {ingrediente}</li>
            ))}
          </ul>
        </div>

        <Link to={`/pizza/${pizza.id}`} className="btn btn-info">Ver detalles</Link>
        <Button variant="success" onClick={() => addToCart(pizza)}>🛒 Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;


