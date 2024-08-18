import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import './Medistore.css'
import { CartContext } from '../../contexts/CartContext';

const MediStore = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

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
    <div className="container-fluid">
      <h1 className='text-center bg-white'>Our Medicines</h1>

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
                <button onClick={() => addToCart(product)} className="add-to-cart">
                  <span><i className="fa fa-shopping-cart"></i></span> Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default MediStore;
