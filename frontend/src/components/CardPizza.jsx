import React from "react";
import { Card, Button } from "react-bootstrap";

const CardPizza = ({ pizza, addToCart }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={pizza.img} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
        <Card.Text>Precio: ${pizza.price.toLocaleString()}</Card.Text>
        
        {/* Lista de ingredientes */}
        <Card.Text>
          <strong>Ingredientes:</strong>
          <ul className="list-unstyled">
            {pizza.ingredients.map((ingrediente, index) => (
              <li key={index}>🍕 {ingrediente}</li>
            ))}
          </ul>
        </Card.Text>

        <Button variant="success" onClick={() => addToCart(pizza)}>🛒 Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

