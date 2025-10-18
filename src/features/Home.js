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


// let currentProductId = 9;

function Home ({className, products}) {

    return (
    < div className = {className} >
    <h1>Products list</h1>
       <ul className="Home__products">
         {products.map((product) => (
           <Product key={product.id} item={product} />
         ))}
       </ul>
   </div>
    );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
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