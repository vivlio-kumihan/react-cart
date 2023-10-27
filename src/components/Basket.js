import { useState } from "react";
import "./Basket.css"

const Basket = (props) => {
  const { cartItems } = props;
  const [counter, setCounter] = useState(0);
  const itemsPrice = cartItems.reduce((sum, item) => sum + counter * item.price, 0);
  const taxPrice = itemsPrice * 0.1;
  const totalPrice = itemsPrice + taxPrice;
  const [toggle, setToggle] = useState(false);
  const toggleAction = () => {
    setToggle(present => !present)
  }

  return (
    <div className="basket">
      <div className="cart-title-wrapper">
        <button className="cart-title" onClick={toggleAction}>
          <span>{cartItems.length}</span>
        </button>
        <div className="ami"></div>
      </div>
      <div className={`cart-wrapper ${toggle ? "active" : ""}`}>
        {cartItems.length === 0 && <div className="default-msg">登録された商品はありません。</div>}
        {cartItems.map((cartItem) => (
          <ul className="item" key={cartItem.pid}>
            {
              cartItem.type.length || cartItem.color.length
                ? <li className="quantity-state name">{cartItem.name}</li>
                : <li className="quantity-state name">
                    {cartItem.name}
                    <ItemCounter key={0} orderedItem={cartItem.name} counter={counter} setCounter={setCounter} /> 
                  </li>
            } 
            {
              cartItem.type 
                ? cartItem.type.map((ins, idx) => (
                  <li className="quantity-state" key={idx}>
                    <h3>{ins}</h3> 
                    <ItemCounter key={ins} orderedItem={ins} counter={counter} setCounter={setCounter} /> 
                  </li>))
                : <li className="display-none"></li>
            }
            {
              cartItem.color 
                ? cartItem.color.map((ins, idx) => (
                  <li className="quantity-state" key={idx}>
                    <h3>{ins}</h3>
                      <ItemCounter key={ins} orderedItem={ins} counter={counter} setCounter={setCounter} /> 
                  </li>))
                : <li className="display-none"></li>
            }
            <li className="sub-total">
              {Math.round(cartItem.price)}円&nbsp;×&nbsp;{counter}
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
      </div>
    </div>
  );
};

const ItemCounter = ({ orderedItem, counter, setCounter }) => {
  const orderHash = { order: orderedItem, count: 0 };
  const [order, setOrder] = useState(orderHash);
  
  const countUp = () => {
    setOrder(order => ({ ...order, count: orderHash.count + 1 }))
  };
  const countDown = () => {
    setOrder(order => ({ ...order, count: orderHash.count - 1 }))
  };
  const resetCount = () => {
    setCounter({ ...order, count: 0 })
  };

  return (
    <div className="wrapper">
      <button onClick={countUp} className="add">
        <div className="fa-solid fa-square-plus"></div>
      </button>
      <div className="quantity-count">{counter}</div>
      <button onClick={countDown} className="remove">
        <div className="fa-solid fa-square-minus"></div>
      </button>
      <button onClick={resetCount} className="reset">
        <div className="fa-solid fa-trash-can"></div>
      </button>
    </div>
  );
};

export default Basket;