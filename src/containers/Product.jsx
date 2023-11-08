import { useState } from "react";

import "../styles/containers/Product.sass";

const Product = ({ products, cartItems, onAddCart, onRemoveCart }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const handleMouseEnter = (product) => {
    setHoveredCard(product.pid);
  };
  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <div
          className="card"
          key={product.pid}
          onMouseEnter={() => handleMouseEnter(product)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <div className={`mask ${hoveredCard === product.pid && "appear"}`}>
            <button className="mask-btn details">詳細を見る</button>
            {cartItems.find((cartItem) => cartItem.pid === product.pid) ? (
              <button
                className="mask-btn remove-btn"
                onClick={() => onRemoveCart(product)}
              >
                カートから削除
              </button>
            ) : (
              <button className="mask-btn" onClick={() => onAddCart(product)}>
                カートに追加
              </button>
            )}
          </div>
          <div className="frame">
            <img className="image" src={product.image} alt={product.name} />
          </div>
          <div className="item-info">
            <div className="name">{product.name}</div>
            {Object.keys(product.types).length !== 0 ? (
              <ul className="type">
                {Object.keys(product.types).map((ins, idx) => (
                  <li key={idx}>{ins}</li>
                ))}
              </ul>
            ) : (
              <ul className="display-none"></ul>
            )}
            {Object.keys(product.colors).length !== 0 ? (
              <ul className="color">
                {Object.keys(product.colors).map((ins, idx) => (
                  <li key={idx}>{ins}</li>
                ))}
              </ul>
            ) : (
              <ul className="display-none"></ul>
            )}
            <div className="price">
              {product.price}
              <span>円</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
