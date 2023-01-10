import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";
import "./Shop.css";

export default function () {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Souq</h1>
      </div>
      <div className="shopProducts">
        {PRODUCTS.map((product) => {
          return <Product data={product} />;
        })}
      </div>
    </div>
  );
}
