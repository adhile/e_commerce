import React from "react";
import { useContext } from "react";
import { addTocartContext } from "../../context/ShopContextProvider";

export default function (props) {
  const { addToCart, cartItems } = useContext(addTocartContext);
  const { id, productName, price, productImage } = props.data;

  const cartItemAmount = cartItems[id];
  console.log(cartItemAmount);
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>

      <button
        className="addToCartBtn"
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
}
