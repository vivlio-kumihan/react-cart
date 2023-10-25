import { useState } from "react";
import ItemCounter from "./itemCounter";
import "./Basket.css"

const Basket = (props) => {
  // const { cartItems, onAddCart, onRemoveCart, thisName, thisType, thisColor } = props;
  const { cartItems, onAddCart, onRemoveCart } = props;
  const itemsPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const taxPrice = itemsPrice * 0.1;
  const totalPrice = itemsPrice + taxPrice;

  // const Counter = ({ title, counter, setCounter }) => {
  //   const countUp = () => {
  //     setCounter(counter + 1)
  //   };
  //   const countDown = () => {
  //     setCounter(counter - 1)
  //   };
  // };
  // // カウンター
  // const [count, setCount] = useState(0);
  // const countUp = () => { setCount(count + 1) };
  // const countDown = () => { setCount(count - 1) };
  // const resetCount = () => { setCount(0) };

  
  const [counter, setCounter] = useState(0);
  console.log(counter);
    
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
              ? cartItem.color.map((ins, idx) => (
                <li className="quantity-state" key={idx}>
                  <h3>{ins}</h3>
                  <ItemCounter title={ins} key={idx} counter={counter} setCounter={setCounter} /> 
                </li>
                ))
              : <li className="display-none"></li>
          }
          <li className="sub-total">
            {Math.round(cartItem.price)}円&nbsp;×&nbsp;{counter.quantity}
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


// カート内で作るリストの参考になるはず
// {product.color.length !== 0 
//   ? (
//   <ul className="color">
//     {product.color.map((ins, idx) => (
//       <li key={idx}>
//         {ins}
//         <div className="quantity-state">
//           <button onClick={() => onRemoveCart(onCartItem)} className="remove"><div className="fa-solid fa-square-minus"></div></button>
//             {onCartItem ? <span>{onCartItem.quantity}</span> : <span>0</span>}
//           <button onClick={() => onAddCart(onCartItem)} className="add"><div className="fa-solid fa-square-plus"></div></button>
//         </div>
//       </li>
//     ))}
//   </ul>
//   ) : (
//   <ul className="display-none"></ul>
//   )
// }


// 問題　とりえあえず残しておく
// name, type, colorで場合分けをしないといけないし、
// それぞれにidをつけないといけなくなるはず。
// // 動かない〜！！！！
// const typeHash = (n, arr) => {
//   const keys = [...Array(n)].map((_, i) => i);
//   const hash = [keys, arr].slice(1).map((item) => {
//     let obj = {};
//     keys.forEach((key, idx) => (obj[key] = item[idx]));
//     return obj;
//   });
// };

// typeHash(5, ["apple", "banana"]);
// setThisType(typeHash);

// const colorHash = (n, arr) => {
//   const keyArr = [...Array(n)].map((_, i) => i);
//   const keys = keyArr;
//   const hash = arr.slice(1).map((item) => {
//     let obj = {};
//     keys.forEach((key, idx) => (obj[key] = item[idx]));
//     return obj;
//   });
// };