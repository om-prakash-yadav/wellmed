import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Medistore.css'

const MediStore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/medicines')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="product-container">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt={product.alt} />
          </div>
          <div className="product-details">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="price-add">
              <span className="price">${product.price}</span>
              <button className="add-to-cart">
                <span><i className="fa fa-shopping-cart"></i></span> Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default MediStore;
