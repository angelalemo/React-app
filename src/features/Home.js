import React, { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import Product from "./Product";
import AddForm from "./Product/AddForm";
// import Context from "../Context";
import PropTypes from "prop-types";
import styled from "styled-components";

// function reducer(state, action) {
//   switch(action.type) {
//     case "SET":
//       return action.payload;
//     case "ADD":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }


let currentProductId = 9;

function Home ({className}){
    const [products, setProducts] = useState([]);
    // const [products, dispatch] = useReducer(reducer, []);
    // const theme = useContext(Context);
    
    useEffect(() => {
     async function getProducts() {
       const products = await axios.get(
         'https://68e9f9cff1eeb3f856e597f8.mockapi.io/api/products'
       );
      setProducts(products.data);
      // dispatch({type:"SET",payload:products.data});
     }

     getProducts();
    }, []);

    function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
    // dispatch({type:"ADD",payload:newProduct});
    }

    return (
    < div className = {className} >
    
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
   </div>
    );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
};
  

export default styled(Home)`
  .Home__products {
        display: flex;
        flex-wrap: wrap;

        list-style-type: none;
        padding: 0;
        margin: 0 -12px;
  }
`;