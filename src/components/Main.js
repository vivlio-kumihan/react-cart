import Product from "./Product";
import "./Main.css"

const Main = (props) => {
  const { products, cartItems, onAddCart, onRemoveCart } = props;
  // const { products, cartItems, onAddCart, onRemoveCart, thisType, thisColor } = props;

  return (
    <div className="wrapper">
      <h2>お守り・ご祈祷</h2>
      <div className="products-wrapper">
        {products.map((product) => (
          <Product 
            key={product.pid} 
            product={product}
            onCartItem={cartItems.find((cartItem) => cartItem.pid === product.pid)}
            onAddCart={onAddCart}
            onRemoveCart={onRemoveCart}
            // thisType={thisType}
            // thisColor={thisColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;