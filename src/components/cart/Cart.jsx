import React, { useState } from 'react';
import './cart.css';

const initialData = [
  {
    "image": "images/id1.jpg",
    "alt": "A bottle of pain relief medicine",
    "title": "Pain Relief Medicine",
    "description": "Effective pain relief for headaches, muscle aches, and more.",
    "price": 15.99,
    "id": 1,
    "usage": "Take one tablet every 4-6 hours as needed.",
    "sideEffects": "May cause drowsiness, dizziness, or upset stomach.",
    "manufacturer": "HealthCorp Pharmaceuticals",
    "quantity":1
},
{
    "image": "images/id2.jpg",
    "alt": "A box of allergy relief tablets",
    "title": "Allergy Relief Tablets",
    "description": "Provides fast relief from allergy symptoms such as sneezing and runny nose.",
    "price": 12.49,
    "id": 2,
    "usage": "Take one tablet daily.",
    "sideEffects": "May cause dry mouth or drowsiness.",
    "manufacturer": "AllergyFree Inc.",
    "quantity":1
},
{
    "image": "images/id3.webp",
    "alt": "A bottle of cough syrup",
    "title": "Cough Syrup",
    "description": "Soothes throat and relieves cough.",
    "price": 8.99,
    "id": 3,
    "usage": "Take two teaspoons every 4 hours.",
    "sideEffects": "May cause drowsiness.",
    "manufacturer": "CoughEase Ltd.",
    "quantity":1
},
{
    "image": "images/id4.jpg",
    "alt": "A pack of vitamin C tablets",
    "title": "Vitamin C Tablets",
    "description": "Boosts immune system and overall health.",
    "price": 10.99,
    "id": 4,
    "usage": "Take one tablet daily.",
    "sideEffects": "Rarely causes upset stomach.",
    "manufacturer": "VitaHealth",
    "quantity":1
},
{
    "image": "images/id5.jpg",
    "alt": "A tube of antiseptic cream",
    "title": "Antiseptic Cream",
    "description": "Prevents infection in minor cuts and scrapes.",
    "price": 5.49,
    "id": 5,
    "usage": "Apply to affected area 1-3 times daily.",
    "sideEffects": "May cause mild skin irritation.",
    "manufacturer": "SafeSkin",
    "quantity":1
},
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialData);

  const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const handleDelete = (id) => {
    let items = cartItems.filter((prod) => {
      return prod.id !== id;
    })

    setCartItems(items);

    console.log(items);


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