import React from "react";
import "./Products.css";
import quiky from "../img/Products/quiky logo.png";
import Mobile1 from "../img/Products/Mobile 1.png";
import Mobile2 from "../img/Products/Mobile 2.png";
import Mobile3 from "../img/Products/Mobile 3.png";

function Products() {
  return (
    <div className="productPage">
      <h1 className="mainTitleProducts">Our Products</h1>
      <img src={quiky} className="quiky" />
      <img src={Mobile1} className="mobile1" />
      <img src={Mobile2} className="mobile2" />
      <img src={Mobile3} className="mobile3" />
    </div>
  );
}

export default Products;
