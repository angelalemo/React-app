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