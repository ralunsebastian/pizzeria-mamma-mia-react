import { useState } from "react"
import { pizzaCart } from "../assets/data/pizzas"

const Cart = () => {

  const [cart, setCart ] = useState(pizzaCart)

  const calcularTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.count
    })
    return total
  }

  const aumentarCantidad = (id) => {
    const nuevoCart = cart.map((item) => {
      if (item.id === id){
        return {
          ...item,
          count: item.count + 1,
        }
      }
      return item
    })
    setCart(nuevoCart)
  }
  const disminuirCantidad = (id) => {
    const nuevoCart = cart.map((item) => {
      if (item.id === id){
        return {
          ...item,
          count: item.count - 1,
        }
      }
      return item
    })
    setCart(nuevoCart)
  }
  return(
    <div className="container mt-5">
      <h2 className="text-center mb-4"> Carrito de Compras</h2>

      {cart.map((item) => (
        <div className="card mb-3" key={item.id}>
          <div className="row g-0"> 
            <div className="col-md-4">
              <img 
                src={item.img}
                className="img-fluid rounded-start"
                alt={item.name}
                style={{ height:"200px", objectFit: "cover"}}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-capitalize"> {item.name} </h5>
                <p className="card-text"> Precio: {item.price}</p>

                <div className="d-flex align-items-center gap-2">
                  <button 
                    className="btn btn-outline-danger"    
                    onClick={() => disminuirCantidad(item.id)}               
                  >
                    -
                  </button>
                  <span> {item.count} </span>
                  <button 
                    className="btn btn-outline-success" 
                    onClick={() => aumentarCantidad(item.id)}                    
                  >
                    +
                  </button>
                </div>
               
              </div>
              
            </div>
          </div>
        </div>
        
      ))}
      <div className="text-end mt-4"> 
        <h3> Total: $ { calcularTotal()} </h3>
        <button className="btn btn-success col-md-3 " id="pagar">Pagar</button>
      </div>
    </div>
  )
}

export default Cart