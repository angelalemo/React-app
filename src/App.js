import React, { useState, useEffect } from 'react';

import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import { Routes, Route } from 'react-router-dom';
import AddForm from './features/Product/AddForm';
import UpdateForm from './features/Product/UpdateFrom';
import axios from 'axios';

// import Context from './Context';
import GlobalStyle from './features/GlobalStyle';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        'https://68e9f9cff1eeb3f856e597f8.mockapi.io/api/products'
      );
      setProducts(products.data);
    }
    getProducts();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        {products.length > 0 ? (
          <Routes>
            <Route path="/create-product" element={<AddForm />} />
            <Route path="/update-product/:id" element={<UpdateForm />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        ) : (
          <div>Loading products....</div>
        )}
      </Container>
    </>
  );
}

export default App;
