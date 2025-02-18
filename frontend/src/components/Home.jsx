import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../assets/data/pizzas"
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Home = () => {
  return (
    <div className="container mt-5 pt-4">
      <h1 className="text-center mb-4"> Pizzas </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        { pizzas.map(pizza =>(
          <div className="col" key={pizza.id}>
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home
