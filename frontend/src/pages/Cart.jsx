import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../context/UserContext"; 
import { useCart } from '../context/CartContext'; 

const Cart = () => {
  const { cart, addToCart, removeFromCart, total, clearCart } = useCart(); // Se agrega clearCart
  const { token } = useUserContext(); 
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!token) {
      navigate('/login');
      return;
    }

    const checkoutData = {
      items: cart.map(item => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: total,
    };

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(checkoutData),
      });

      if (!response.ok) {
        throw new Error('Error al procesar el pago');
      }

      const data = await response.json();
      alert('Pago realizado con éxito');

      clearCart(); // Vacía el carrito después del pago

    } catch (error) {
      console.error("Error al realizar el checkout:", error);
      alert('Hubo un error al procesar el pago');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5 bg-dark p-4 rounded">
      <h2 className="text-center mb-5 text-white">Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="text-center text-white">🛒 Tu carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <div className="card mb-3" key={item.id} style={{ borderRadius: '10px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.img}
                  className="img-fluid rounded-start"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover", borderRadius: '10px' }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-capitalize">{item.name}</h5>
                  <p className="card-text">Precio: ${item.price.toLocaleString()}</p>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <Row className="mt-4">
        <Col className="text-end">
          <h3 className="text-white">Total: ${total.toLocaleString()}</h3>
          <Button
            onClick={handleCheckout} 
            disabled={!token || loading} 
            className="btn btn-success col-md-3 text-white"
          >
            {loading ? 'Procesando...' : (token ? 'Pagar' : 'Inicia sesión para pagar')}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
