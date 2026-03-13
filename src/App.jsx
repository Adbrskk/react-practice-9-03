import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;