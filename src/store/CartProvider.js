import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItem = state.items.concat(action.item);
    const updatedAmount = state.totalAmount + action.item.price*action.item.amount;
    return {items: updatedItem, totalAmount: updatedAmount}
  }

  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchedCartAction] = useReducer(
    cartReducer,
    defaultState
  );

  const addItemToCartHandler = (item) => {
    dispatchedCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchedCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
