import { connect } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../redux/actions";
import styles from "../styles/CartItem.module.css";

function CartItem({ item, removeFromCart, updateCartQuantity }) {
  const handleChange = (e) => {
    const value = e.target.value;

    if (value < 1) return;

    updateCartQuantity(item.id, value);
  };

  return (
    <div className={styles.cartItem}>
      <span>
        {item.name} ${item.price.toFixed(2)}
      </span>

      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleChange}
      />

      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default connect(null, { removeFromCart, updateCartQuantity })(CartItem);