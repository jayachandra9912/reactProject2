// src/App.js

import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import { fetchProducts } from './api';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div>
      <ProductList products={products} handleSelectProduct={handleSelectProduct} />
      <Cart selectedProducts={selectedProducts} />
    </div>
  );
};

export default App;
