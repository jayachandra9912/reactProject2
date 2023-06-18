// src/api.js

export const fetchProducts = () => {
    // Simulating API call delay with setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = [
          { id: 1, name: 'Product 1', price: 10 },
          { id: 2, name: 'Product 2', price: 15 },
          { id: 3, name: 'Product 3', price: 20 },
        ];
        resolve(products);
      }, 1000);
    });
  };
  