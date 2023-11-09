import { useState, useEffect } from "react";
import CartItem from "./CartItem";

const OrderResult = ({ toggle, cartItems }) => {
  const isEmpty = (arr) => arr.length < 1;
  // # 01
  // 合計金額を割り出すために、商品IDと小計を連想配列でstateにして、
  // 値の総和を得る方針で進める。

  // # 02
  // カート内で注文する商品の合計金額を出すためのstateを設定する。
  const [totalFeeHash, setTotalFeeHash] = useState({});
  // console.log(totalFeeHash, "OrderResult");
  // to #03 下へ 

  // カート内で注文する商品の合計金額
  const [totalFee, setTotalFee] = useState(0);
  
  // カートの総重量合計のstateを生成させる。
  const [totalWeightHash, setTotalWeightHash] = useState({});
  
  // カート内で注文する商品の合計重量
  const [totalWeight, setTotalWeight] = useState(0);
  // console.log("result =>", totalWeight); 

  return (
    <div className={`cart-wrapper ${toggle && "active"}`}>
      {isEmpty(cartItems) && (
        <div className="default-msg">登録された商品はありません。</div>
      )}

      {cartItems.map((cartItem, idx) => (
        <CartItem
          key={idx} 
          cartItem={cartItem} 
          // # 03
          // propsで子コンポーネントに渡す。
          // to CartItem.js => 
          totalFeeHash={totalFeeHash}
          setTotalFeeHash={setTotalFeeHash}
          totalWeightHash={totalWeightHash}
          totalFee={totalFee}
          setTotalFee={setTotalFee}
          setTotalWeightHash={setTotalWeightHash}
          totalWeight={totalWeight}
          setTotalWeight={setTotalWeight}
        />
      ))}

      <ul className="calc-amount">
        <li>商品小計<span>{totalFee}</span>円</li>
        <li>消費税<span>{Math.round(totalFee * 1.1)}</span>円</li>
        {/* <li>合計<span>{}</span>円</li> */}
        <li>カートの重量合計<span>{totalWeight}</span>g</li>
        <li>
          <button onClick={() => alert("Implement Checkout")}>用紙出力</button>
        </li>
      </ul>
    </div>
  );
};

export default OrderResult;