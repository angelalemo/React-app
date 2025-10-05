import React from "react";
import propTypes from "prop-types";

function Container({ children }) {
  return <main>{children}</main>;
}

Container.propTypes = {
  children: propTypes.node.isRequired
};

export default Container;