import Product from "./Product";
import "./Main.css"

// App.jsからpropsで商品データ・カートへの商品の出し入れを受信する。
export default function Main(props) {
  // ハッシュへ格納する。
  const { products, cartItems, onAddCart, onRemoveCart, thisType, thisColor } = props;

  return (
    <div className="wrapper">
      <h2>お守り・ご祈祷</h2>
      <div className="products-wrapper">
        {/* 商品を陳列する。この一連はイディオム。 */}
        {/* ハッシュのキーで呼び出したら値か返る例のやつ。 */}
        {products.map((product) => (
          <Product 
            key={product.pid} 
            product={product}
            item={cartItems.find((cartItem) => cartItem.pid === product.pid)}
            onAddCart={onAddCart}
            onRemoveCart={onRemoveCart}
            thisType={thisType}
            thisColor={thisColor}
          />
        ))}
      </div>
    </div>
  );
};