import ProductsIndex from "./ProductsIndex";
import Test from "./Test";
import "../styles/components/Main.sass";

const Main = ({ products, cartItems, onAddCart, onRemoveCart }) => {
  return (
    <div className="wrapper">
      <h2>お守り・ご祈祷</h2>
      <ProductsIndex
        products={products}
        cartItems={cartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
      />
    </div>
  );
};

export default Main;