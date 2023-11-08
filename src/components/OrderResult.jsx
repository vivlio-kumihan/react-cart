import { useState } from "react";
import CartItem from "./CartItem";

const OrderResult = ({ toggle, cartItems }) => {

  const isEmpty = (arr) => arr.length < 1;

  // const [totalWeight, setTotalWeight] = useState(0);
  // setTotalWeight(totalWeight);

  return (
    <div className={`cart-wrapper ${toggle && "active"}`}>
      {isEmpty(cartItems) && (
        <div className="default-msg">登録された商品はありません。</div>
      )}

      {cartItems.map((cartItem, idx) => (
        <CartItem
          key={idx} 
          cartItem={cartItem} 
        />
      ))}

      <ul className="calc-amount">
        <li>商品小計<span>{}</span>円</li>
        <li>消費税<span>{}</span>円</li>
        <li>合計<span>{}</span>円</li>
        {/* <li>カートの重量合計<span>{totalWeight}</span>g</li> */}
        <li>
          <button onClick={() => alert("Implement Checkout")}>用紙出力</button>
        </li>
      </ul>
    </div>
  );
};

export default OrderResult;