import Product from "./Product";
import "./Main.css"
import Example from "./Example";

const Main = (props) => {
  const { products, cartItems, onAddCart, onRemoveCart } = props;

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