import "../styles/containers/Main.sass";

import Product from "./Product";
const Main = ({ products, cartItems, onAddCart, onRemoveCart }) => {
  return (
    <div className="wrapper">
      <h2>お守り・ご祈祷</h2>
      <Product
        products={products}
        cartItems={cartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
      />
    </div>
  );
};

export default Main;
