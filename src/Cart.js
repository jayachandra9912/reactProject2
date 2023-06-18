// src/Cart.js

import React from 'react';

const Cart = ({ selectedProducts }) => {
  const totalPrice = selectedProducts.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {selectedProducts.length === 0 ? (
        <p>No products selected.</p>
      ) : (
        <div>
          {selectedProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
          <p>Total Price: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
