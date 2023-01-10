import React from "react";
import { useContext } from "react";
import { addTocartContext } from "../../context/ShopContextProvider";

export default function (props) {
  const { cartItems, addToCart, removeFromCart,updateCartItemsInput } = useContext(addTocartContext);
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="counter">
          <button
            onClick={() => {
              addToCart(id);
            }}
          >
            +
          </button>
                  <input type="text" value={cartItems[id]} onChange={(e) => {updateCartItemsInput(Number(e.target.value),id) } } />
          <button
            onClick={() => {
              removeFromCart(id);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
