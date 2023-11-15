import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import SendFee from "../containers/SendFee";

const OrderResult = ({ toggle, cartItems }) => {
  // カートに商品が入っているか否か条件分岐で使う。
  const isEmpty = (arr) => arr.length < 1;

  // // アイテム毎の金額合計
  const [totalFeeHash, setTotalFeeHash] = useState({});
  console.log(totalFeeHash);

  // // アイテム毎の重量合計
  // const [totalWeightHash, setTotalWeightHash] = useState(0);
  const itemTotalCount = (hash) => {
    return Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
  };  

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
            // totalFeeHash={totalFeeHash}
            // setTotalFeeHash={setTotalFeeHash}
            // totalWeightHash={totalWeightHash}
            // setTotalWeightHash={setTotalWeightHash}
          />
          {/* {
            useEffect(() => {
              setTotalFeeHash({ ...totalFeeHash, [cartItem.pid]: itemTotalCount(cartItem.types) })
            })
          } */}
        </div>
      ))}

      <ul className="calc-amount">
        <li>商品小計<span>{}</span>円</li>
        <li>消費税<span>{Math.round(10 * 0.1)}</span>円</li>
        <li>
          <SendFee />
        </li>
        <li>カートの重量合計<span>{}</span>g</li>
        <li className="total-fee">合計<span>{isNaN(100) ? 0 : Math.round(100)}</span>円</li>
        <li>
          <button onClick={() => alert("Implement Checkout")}>用紙出力</button>
        </li>
      </ul>
    </div>
  );
};

export default OrderResult;