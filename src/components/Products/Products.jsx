import React from 'react';
import './Products.css';

function Products() {
    return (
        <div className="custom-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykUKbHv4ruhdGJFoibGSHsTobb4-fVfXUkw&s"
                className="custom-card-img" alt="Frame" />
            <div className="custom-card-body">
                <h5 className="custom-card-title">Card title</h5>
                <p className="custom-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/cart" className="custom-btn">Go somewhere</a>
            </div>
        </div>
    );
}

export default Products;
