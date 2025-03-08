import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();

  return (
    <div className="main-content">
      <div className="container mt-5 fixed">
        <h2 className="text-center mb-5 text-white">Carrito de Compras</h2>

        {cart.length === 0 ? (
          <p className="text-center text-white">🛒 Tu carrito está vacío</p>
        ) : (
          cart.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.img}
                    className="img-fluid rounded-start"
                    alt={item.name}
                    style={{ height: "200px", objectFit: "cover" }}
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
        <div className="text-end mt-4">
          <h3 className="text-white">Total: ${total.toLocaleString()}</h3>
          <button className="btn btn-success col-md-3 text-white">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
