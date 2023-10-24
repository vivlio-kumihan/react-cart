import "./Basket.css"

const Basket = (props) => {
  const { cartItems, onAddCart, onRemoveCart } = props;
  const itemsPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const taxPrice = itemsPrice * 0.1;
  const totalPrice = itemsPrice + taxPrice;

  return (
    <aside className="basket">
      
      <h2 className="cart-title">カート<span>{cartItems.length}</span></h2>
      {cartItems.length === 0 && <div className="default-msg">登録された商品はありません。</div>}
      {cartItems.map((cartItem) => (
        <ul className="item" key={cartItem.pid}>
          <li className="name">{cartItem.name}</li>
          {
            cartItem.type 
              ? cartItem.type.map((ins, idx) => (<li className="sub-name" key={idx}>{ins}</li>))
              : <li className="display-none"></li>
          }
          {
            cartItem.color 
              ? cartItem.color.map((ins, idx) => (<li className="sub-name" key={idx}>{ins}</li>))
              : <li className="display-none"></li>
          }
          <li className="quantity-state">
            <button onClick={() => onRemoveCart(cartItem)} className="remove">
              <div className="fa-solid fa-square-minus"></div>
            </button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => onAddCart(cartItem)} className="add">
              <div className="fa-solid fa-square-plus"></div>
            </button>
          </li>
          <li className="sub-total">
            {Math.round(cartItem.price)}円&nbsp;×&nbsp;{cartItem.quantity}
          </li>
        </ul>
      ))}
      {cartItems.length !== 0 && (
        <ul className="calc-amount">
          <li>商品小計<span>{Math.round(itemsPrice)}</span>円</li>
          <li>消費税 <span>{Math.round(taxPrice)}</span>円</li>
          <li>合計<span>{Math.round(totalPrice)}</span>円</li>
          <li>
            <button onClick={() => alert("Implement Checkout")}>用紙出力</button>
          </li>
        </ul>
      )}

    </aside>
  );
};

export default Basket;