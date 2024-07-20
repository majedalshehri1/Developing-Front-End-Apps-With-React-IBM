// src/components/ProductList.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./CartSlice";
import Fortinet from "../ProductsImage/Fortinet.jpeg";
import Amoungus from "../ProductsImage/Amoungus.jpeg";
import FarCry6 from "../ProductsImage/FarCry6.png";
import readdead2 from "../ProductsImage/readdead2.jpg";
import godofwar from "../ProductsImage/godofwar.jpg";
import "./ProductList.css";

const ProductList = () => {
  const products = [
    { id: 1, name: "Fortinet", price: 25, image: Fortinet },
    { id: 2, name: "Among Us", price: 15, image: Amoungus },
    { id: 3, name: "Far Cry 6", price: 30, image: FarCry6 },
    { id: 4, name: "Red Dead 2", price: 70, image: readdead2 },
    { id: 5, name: "God Of War", price: 40, image: godofwar },
  ];

  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]); // State to store disabled products

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    setDisabledProducts([...disabledProducts, product.id]); // Mark the product as disabled
  };

  return (
    <div className="product-list">
      <ul className="product-list-items">
        {products.map((product) => (
          <li key={product.id} className="product-list-item">
            <div className="contentCard">
              {product.image && (
                <img
                  src={product.image}
                  className="imageLogo"
                  alt={product.name}
                />
              )}
              <div className="TitleProduct">
                <span>{product.name}</span>
                <span>${product.price}</span>
              </div>
            </div>
            <button
              className={`add-to-cart-btn ${
                disabledProducts.includes(product.id) ? "disabled" : ""
              }`}
              onClick={() => handleAddToCart(product)}
              disabled={disabledProducts.includes(product.id)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
