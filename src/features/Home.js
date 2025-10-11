import React, { useState } from "react";
import axios from "axios";
import Product from "./Product";
import AddForm from "./Product/AddForm";


let currentProductId = 9;

function Home (){
    const [products, setProducts] = useState([]);

       async function getProducts() {
     const products = await axios.get(
       'https://68e9f9cff1eeb3f856e597f8.mockapi.io/api/products'
     );
     setProducts(products.data);
   }

   getProducts();

    function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
    }

    return (
    <>
    <h1>Products list</h1>
     {
     products.length > 0 ? (
       <ul className="Home__products">
         {products.map((product) => (
           <Product key={product.id} item={product} />
         ))}
       </ul>
     ) : (
       <div>Loading products....</div>
     )
    }
    <AddForm addProduct={addProduct} />
   </>
    );
}

export default Home;