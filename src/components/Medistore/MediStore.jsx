import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import './Medistore.css'
import { CartContext } from '../../contexts/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MediStore = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);
  const notify = () => toast.success(`Product added to cart`);
  useEffect(() => {
    axios.get('http://localhost:3000/medicines')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const addItemsToCart = async (product) => {
    let isalready = cartItems.some((prod) => prod.id === product.id);
    if (!isalready) {
      await axios.post(`http://localhost:3000/cartitems`, JSON.stringify(product));
      addToCart(product);
      notify();
    }
    else {
      toast.error("Item already in your cart");
    }

  }

  return (
    <div className="container-fluid">
      <h1 className='text-center bg-white mt-6 p-6'>Our Medicines</h1>

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
                <button onClick={() => addItemsToCart(product)} className="add-to-cart">
                  <span><i className="fa fa-shopping-cart"></i></span> Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}


export default MediStore;
