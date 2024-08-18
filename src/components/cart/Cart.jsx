import React, { useContext } from 'react';
import './cart.css';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value);
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };

  return (
    <div className="cart">
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
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h2>Total Price: ${calculateTotalPrice()}</h2>
      </div>
    </div>
  );
};

export default Cart;
