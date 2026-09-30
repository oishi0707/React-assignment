import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>🛒 Online Shopping Cart</h1>
        <p>React useReducer + Context API</p>
      </header>

      <main>
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

export default App;