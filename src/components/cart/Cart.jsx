import React, { useContext } from 'react';
import './cart.css';
import { CartContext } from '../../contexts/CartContext';
import axios from 'axios'; // If using axios

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleQuantityChange = async (e, id) => {
    const newQuantity = parseInt(e.target.value);
    const updatedItem = cartItems.find(item => item.id === id);
    updatedItem.quantity = newQuantity;

    try {
      // Update the item on the server
      await axios.put(`http://localhost:3000/cartitems/${id}`, updatedItem);

      // Update the item in the local state
      setCartItems(
        cartItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Delete the item from the server
      await axios.delete(`http://localhost:3000/cartitems/${id}`);

      // Update the local state
      const updatedCartItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };

  return (
    <>

      {
        cartItems.length > 0 ? (<div className="cart">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.alt} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(e, item.id)}
                  className="cart-item-quantity"
                />
                <button className='btn btn-danger m-4' onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
          <div className="cart-total d-flex justify-content-end align-items-center gap-4">
            <h2 className='fs-3'>Total Price: ${calculateTotalPrice()}</h2>
            <button className="btn-lg btn-success">Checkout</button>
          </div>
        </div>) : (
          <div style={{marginTop:'100px'}} className="container d-flex  justify-content-center align-items-center">
            <h1>Cart is Empty </h1></div>
        )
      }
    </>
  );
};

export default Cart;
