import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

import Product from "./components/Product";


const products = [
  {
    id: 1,
    name: "PEANUT BUTTER BURGER",
    price: 150
  },
  {
    id: 2,
    name: "PIZZA BURGER",
    price: 170
  },
  {
    id: 3,
    name: "VIRGIN BURGER",
    price: 160
  },
  {
    id: 4,
    name: "SOFT TACO",
    price: 350
  },
  {
    id: 5,
    name: "DORITO TACO",
    price: 230
  },
  {
    id: 6,
    name: "NACHOS",
    price: 190
  },
  {
    id: 7,
    name: "VIRGIN MOJITO",
    price: 98
  }  
  
];


class App extends Component {
  constructor() {
    super();
    this.state = {  
      cart: [
      ],
    };
  }

  handleAddFunc(product) {
    const existingProduct = this.state.cart.filter(p => p.id === product.id);

    if (existingProduct.length > 0) {

        const withoutExistingProduct = this.state.cart.filter(p => p.id !== product.id); 
        const updatedUnitsProduct = {
          ...existingProduct[0],
          units: existingProduct[0].units + product.units,
        };

        this.setState({
          cart: [...withoutExistingProduct, updatedUnitsProduct]
        });

    } else {
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
  }  

  render() {
    return (
      <main className="wrapper">
        
        <div className="foodItem">
          <h1 className="heading"> FAST FOOD MENU </h1>
          {
            products.map(p => <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />)
          }
        </div>

          {/* BILL GENERATOR */}
        <div className="bill">
          {/* BILL HEADING */}
          <div className="billingData billingHeading">
          <h1 className="heading"> Payment Bill </h1>
            <span> Food </span>
            <span> Quantity </span>
            <span> Total </span>
          </div>
          
          <div>
          {
            this.state.cart.map(c => <div className="billingData data">
              <span>{c.name}</span>
              <span>{c.units}</span>
              <span>{c.total = c.units * c.price}  </span>  
              </div>)
          }
          </div>
          
          {/* GRAND TOTAL AMOUNT */}
          <div id="grandTotal">Grand total: {this.state.cart.reduce((a, d) => a + d.total, 0)} </div>
        </div>
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));