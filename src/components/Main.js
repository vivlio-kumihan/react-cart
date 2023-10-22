import Product from "./Product";

// App.jsからpropsで商品データ・カートへの商品の出し入れを受信する。
export default function Main(props) {
  // ハッシュへ格納する。
  const { products, cartItems, onAdd, onRemove } = props;

  return (
    <div className="col-2 block">
      <h2>Products</h2>
      <div className="row">
        {/* 商品を陳列する。この一連はイディオム。 */}
        {/* ハッシュのキーで呼び出したら値か返る例のやつ。 */}
        {products.map((product) => (
          <Product 
            key={product.id} 
            product={product}
            item={cartItems.find((cartItem) => cartItem.id === product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};