// App.js
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
// import SuperCoin from './Components/SuperCoin'
import "./App.css";
const App = () => {
  return (
    <div>
      <h1 className="app-heading">E-Commerce Application</h1>
      <div className="storeContent">
        <ProductList />
        <ShoppingCart />
      </div>
      {/* <SuperCoin/> */}
    </div>
  );
};

export default App;
