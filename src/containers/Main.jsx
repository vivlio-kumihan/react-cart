import "../styles/containers/Main.sass";

import Product from "./Product";
const Main = ({ data, cartItems, onAddCart, onRemoveCart, removeCartFromMain, setRemoveCartFromMain }) => {
  const toggleRemoveCartFromMain = () => {
    setRemoveCartFromMain(present => !present)
  }
  console.log(removeCartFromMain);

  return (
    <div className="wrapper">
      <h2>お守り・ご祈祷</h2>
      <Product
        data={data}
        cartItems={cartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
        toggleRemoveCartFromMain={toggleRemoveCartFromMain}
      />
    </div>
  );
};

export default Main;
