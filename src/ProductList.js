// src/ProductList.js

import React from 'react';

const ProductList = ({ products, handleSelectProduct }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleSelectProduct(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
