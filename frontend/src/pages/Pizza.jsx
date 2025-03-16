import { Card, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";  // Importamos useNavigate
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";  // Importamos el hook del carrito

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useCart();  // Desestructuramos la función addToCart
  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        
        if (!response.ok) {
          // Si no hay una respuesta válida, redirigimos a la página NotFound
          navigate('/notfound');
        } else {
          const data = await response.json();
          setPizza(data);
        }
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
        navigate('/notfound');  // En caso de error, redirigimos a la página NotFound
      }
    };

    fetchPizza();
  }, [id, navigate]); // Aseguramos que useNavigate esté en las dependencias

  const agregarAlCarrito = () => {
    addToCart(pizza);  // Llamamos a la función addToCart para agregar la pizza
    console.log(`Pizza ${pizza.name} añadida al carrito`);
  };

  if (!pizza) return <p>Cargando...</p>;

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "22rem", textAlign: "center" }} className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={pizza.img} alt={pizza.name} style={{ borderRadius: "10px" }} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
          </Card.Text>
          <Card.Text>
            <strong>Precio:</strong> ${pizza.price}
          </Card.Text>
          <Button variant="success" onClick={agregarAlCarrito}>
            🛒 Añadir al carrito
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Pizza;
