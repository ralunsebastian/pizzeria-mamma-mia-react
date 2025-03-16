import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../context/UserContext"; // Asegúrate de que la ruta sea correcta
import { useCart } from '../context/CartContext'; // Ajusta la ruta según tu estructura de archivos

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();
  const { token } = useUserContext(); // Obtenemos el token del contexto de usuario
  const navigate = useNavigate(); // Para redirigir al login si no hay token

  const handlePayment = () => {
    if (!token) {
      // Si el token es falso, redirigimos a la página de login
      navigate('/login');
    } else {
      // Si el token es verdadero, permitimos proceder con el pago
      alert('Pago realizado');
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
            onClick={handlePayment}
            disabled={!token} // Deshabilitamos el botón si el token es falso
            className="btn btn-success col-md-3 text-white"
          >
            {token ? 'Pagar' : 'Inicia sesión para pagar'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;

