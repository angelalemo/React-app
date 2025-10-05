import React, { useState } from "react";
import Data from "../app/data";
import Product from "./Product";
import AddForm from "./Product/AddForm";

let currentProductId = 9;

function Home (){
    const [products, setProducts] = useState(Data);

    function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
    }

    return (
        <div>
        <h1>New Products</h1>
        <ul className="Home__products">
        {products.map((product) => (
         <Product key={product.id} item={product} /> 
       ))}
     </ul>
      <AddForm addProduct={addProduct} />
   </div>
    );
}

export default Home;