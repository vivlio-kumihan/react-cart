export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const taxPrice = itemsPrice * 0.1;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="col-1 block">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is Empty.</div>}
        {cartItems.map((cartItem) => (
          <div key={cartItem.id} className="row">
            <div className="col-1">{cartItem.name}</div>
            <div className="col-1">
              <button onClick={() => onRemove(cartItem)} className="remove">-</button>
              <button onClick={() => onAdd(cartItem)} className="add">+ </button>
            </div>
            <div className="col-1 text-right">
              {cartItem.quantity} X ${cartItem.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Item Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2"><strong>Total Price</strong></div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout")}>Checkout</button>
            </div>

          </>
        )}
      </div>
    </aside>
  );
};