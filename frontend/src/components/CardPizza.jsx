import React from "react";

const CardPizza = ({ pizza }) => {
  return (
    <div className="card">
      <img 
        src={pizza.img} 
        alt={pizza.name} 
        style={{ width: "100%", height: "auto" }} 
      />
      <h3>{pizza.name}</h3>
      <p>{pizza.desc}</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
      
      {/* Botón de "Añadir al carrito" */}
      <button 
        className="btn btn-primary" 
        onClick={() => alert(`Añadido al carrito: ${pizza.name}`)}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default CardPizza;

