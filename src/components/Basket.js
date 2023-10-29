import { useState } from "react";
import "./Basket.css"

const Basket = (props) => {
  const { cartItems } = props;

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
      <OrderResult 
        toggle={toggle}
        cartItems={cartItems}
      />
    </div>
  );
};

const OrderResult = ({ toggle, cartItems }) => {
  const [order, setOrder] = useState({ name: "", count: 0 });

  // 問題点2、3については手を付けられていない。
  // 問題点 2
  // それぞれのstateでカウントを取れるようになったうえで、
  // 品名とその種類または色に紐づいた数量をもって購入商品の合計を表示させる。
  // いずれかの状態の合計を算出させる。
  //   商品名 × 単価 × 数量 ＝ 料金
  //   種類　 × 単価 × 数量 ＝ 料金
  //   色　　 × 単価 × 数量 ＝ 料金

  // 問題点 3
  // 『送料』を表示させる。
  //   送料
  //     種類 重量 × 数量
  //     色　 重量 × 数量
  // formで全国の都道府県のリスト作成。
  // 都道府県ごとに係数をかけるとか？
  // const shippingTable = {
  //   100: {"京都": 1, "大阪": 1, "兵庫": 1, "奈良": 1, ...}, 
  // };

  // const itemsPrice = cartItems.reduce((sum, item) => sum + order.count * item.price, 0);
  // const taxPrice = itemsPrice * 0.1;
  // const totalPrice = itemsPrice + taxPrice;

  return (
    <div className={`cart-wrapper ${toggle ? "active" : ""}`}>
      {cartItems.length === 0 && <div className="default-msg">登録された商品はありません。</div>}
      {cartItems.map((cartItem) => (
        <ul className="item" key={cartItem.pid}>
          {
            cartItem.type.length || cartItem.color.length
              ? <li className="quantity-state name">{cartItem.name}</li>
              : <li className="quantity-state name">
                {cartItem.name}
                <ItemCounter
                  setName={cartItem.name}
                  count={order.count}
                  order={order}
                  setOrder={setOrder}
                /> 
              </li>
          } 
          {
            cartItem.type 
              ? cartItem.type.map((ins, idx) => (
                <li className="quantity-state" key={idx}>
                  <h3>{ins}</h3> 
                  <ItemCounter
                    setName={ins}
                    count={order.count}
                    order={order}
                    setOrder={setOrder}
                  /> 
                </li>))
              : <li className="display-none"></li>
          }
          {
            cartItem.color 
              ? cartItem.color.map((ins, idx) => (
                <li className="quantity-state" key={idx}>
                  <h3>{ins}</h3>
                  <ItemCounter
                    setName={ins}
                    count={order.count}
                    order={order}
                    setOrder={setOrder}
                  /> 
                </li>))
              : <li className="display-none"></li>
          }
          {/* 問題点 2 の関係箇所 */}
          {/* <li className="sub-total">
            {Math.round(cartItem.price)}円&nbsp;×&nbsp;{count}
          </li> */}
        </ul>
      ))}
      {/* 問題点 2 の関係箇所 */}
      {/* {cartItems.length !== 0 && (
        <ul className="calc-amount">
          <li>商品小計<span>{Math.round(itemsPrice)}</span>円</li>
          <li>消費税 <span>{Math.round(taxPrice)}</span>円</li>
          <li>合計<span>{Math.round(totalPrice)}</span>円</li>
          <li>
            <button onClick={() => alert("Implement Checkout")}>用紙出力</button>
          </li>
        </ul>
      )} */}
    </div>
  );
}

const ItemCounter = ({ setName, count, order, setOrder }) => {

  // setOrder(order => ({order, name: setName}));

  // react-dom.development.js:86 Warning: 
  // Cannot update a component (`OrderResult`) while rendering a different component (`ItemCounter`). 
  // To locate the bad setState() call inside `ItemCounter`, follow the stack trace as described in 
  // https://reactjs.org/link/setstate-in-render
  //   at ItemCounter (http://localhost:3000/main.66ae1621d7f77cc7ca5d.hot-update.js:220:3)
  //   at li
  //   at ul
  //   at div
  //   at OrderResult (http://localhost:3000/main.66ae1621d7f77cc7ca5d.hot-update.js:82:3)
  //   at div
  //   at Basket (http://localhost:3000/main.66ae1621d7f77cc7ca5d.hot-update.js:30:5)
  //   at div
  //   at App (http://localhost:3000/static/js/bundle.js:39:84)

  setOrder(order => ({order, name: setName}));

  const countUp = () => {
    setOrder(order => ({ ...order, count: count + 1 }));
  };

  const countDown = () => {
    if (order.count > 0) {
      setOrder(order => ({ ...order, count: count - 1 }));
    }
  };

  const resetCount = () => {
    setOrder({ ...order, count: 0 })
  };

  return (
    <div className="wrapper">
      <button onClick={countUp} className="add">
        <div className="fa-solid fa-square-plus"></div>
      </button>
      <div className="quantity-count">{count}</div>
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