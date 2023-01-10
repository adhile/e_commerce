import React from "react";
import { createContext, useState } from "react";
import { PRODUCTS } from "../Products";

export const addTocartContext = createContext(null);

const getDefaultcart = () => {
  const cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export default function (props) {
  const [cartItems, setCartItems] = useState(getDefaultcart);

  const getCartTotalAmount = () => { 
    let totalAmount = 0;
    for (const item in cartItems) { 
      if (cartItems[item] > 0) { 
        let cartInfo = PRODUCTS.find(product => product.id === Number(item))
        totalAmount+=cartItems[item]*cartInfo.price
      }
    }
    return totalAmount
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };
  const updateCartItemsInput = (newInputValue, itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: newInputValue };
    });
  };
  const contextValue = {
    addToCart,
    removeFromCart,
    cartItems,
    updateCartItemsInput,
    getCartTotalAmount
  };

  return (
    <addTocartContext.Provider value={contextValue}>
      {props.children}
    </addTocartContext.Provider>
  );
}
