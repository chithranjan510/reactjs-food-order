import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((items) => (
        <li key={items.id}>{items.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.75</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Order</button>
        <button className={classes.button}>Cancel</button>
      </div>
    </Modal>
  );
};

export default Cart;
