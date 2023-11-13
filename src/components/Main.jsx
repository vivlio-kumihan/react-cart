import "../styles/components/Main.sass";
import Product from "./Product";

const Main = ({ data, cartItems, onAddCart, onRemoveCart }) => {
  
  return (
    <div className="wrapper">
      <h2>お守り・ご祈祷</h2>
      <Product
        data={data}
        cartItems={cartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
      />
    </div>
  );
};

export default Main;
