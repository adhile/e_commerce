import React from "react";
import { PRODUCTS } from "../../Products";
import { addTocartContext } from "../../context/ShopContextProvider";
import { useContext } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export default function () {
  const { cartItems, getCartTotalAmount } = useContext(addTocartContext);
  const navigate = useNavigate();
  const totalAmount = getCartTotalAmount();
  return (
    <div className="cart">
      <h1>Your cart items</h1>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Sub Total:${totalAmount}</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Continue Shoping
          </button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is empty</h1>
      )}
    </div>
  );
}
