import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import SendFee from "../containers/SendFee";

const OrderResult = ({ toggle, cartItems }) => {

  // カートに商品が入っているか否か条件分岐で使う。
  const isEmpty = (arr) => arr.length < 1;

  // アイテム毎の金額
  const [totalFeeHash, setTotalFeeHash] = useState({});
  // カート内で注文する商品の小計
  const [totalFee, setTotalFee] = useState(0);  

  // アイテム毎の重量
  const [totalWeightHash, setTotalWeightHash] = useState({});
  // カート内で注文する商品の重量
  const [totalWeight, setTotalWeight] = useState(0);

  return (
    <div className={`cart-wrapper ${toggle && "active"}`}>
      {isEmpty(cartItems) && (
        <div className="default-msg">登録された商品はありません。</div>
      )}

      {cartItems.map((cartItem, idx) => (
        <div className={idx} key={idx}>
          <CartItem
            key={idx} 
            cartItem={cartItem} 
            totalFeeHash={totalFeeHash}
            setTotalFeeHash={setTotalFeeHash}
            totalFee={totalFee}
            setTotalFee={setTotalFee}
            totalWeightHash={totalWeightHash}
            setTotalWeightHash={setTotalWeightHash}
            totalWeight={totalWeight}
            setTotalWeight={setTotalWeight}
          />
        </div>
      ))}

      <ul className="calc-amount">
        <li>商品小計<span>{totalFee}</span>円</li>
        <li>消費税<span>{Math.round(totalFee * 0.1)}</span>円</li>
        <li>
          <SendFee />
        </li>
        <li>カートの重量合計<span>{totalWeight}</span>g</li>
        <li className="total-fee">合計<span>{Math.round(totalFee * 1.1)}</span>円</li>
        <li>
          <button onClick={() => alert("Implement Checkout")}>用紙出力</button>
        </li>
      </ul>
    </div>
  );
};

export default OrderResult;