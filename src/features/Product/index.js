import React from "react";
import propTypes from "prop-types";

function Product({ item }) {
    const productImage = require(`../../assets/${item.imageURL}`);
    return(
    <li className="Products">
       <a href={`/update-product/${item.id}`}>
         <img className="Products__image" src={productImage} alt={item.name} />
         <div className="Products__name">{item.name}</div>
         <small className="Products__type">{item.type}</small>
       </a>
     </li>
    );
}

Product.propTypes = {
  item: propTypes.object.isRequired
};

export default Product;