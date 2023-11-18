import { useEffect, useState } from "react";
import OrderForm from "./OrderForm";
import CartItem from "../components/CartItem";
import SendFee from "../containers/SendFee";
import "../styles/components/OrderResult.sass";

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
  // カート内で注文する商品の送料
  const [totalSendFee, setTotalSendFee] = useState(0);

  return (
    <div className={`cart-wrapper ${toggle && "active"}`}>
      {isEmpty(cartItems) && (
        <div className="default-msg">登録された商品はありません。</div>
      )}
      
      <div className="wrapper">
        <h2>お申し込みフォーム</h2>
        <OrderForm />
      </div>

      <div className="wrapper cart-index">
        <h2>賜物一覧</h2>
        <div className="result-wrapper">
          {cartItems.map((cartItem, idx) => (
          <div className={idx} key={idx}>
          {/* {console.log(cartItem)} */}
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
        </div>

        <ul className="calc-amount">
          <li>授与料小計<span>{totalFee}</span>円</li>
          <li>消費税<span>{Math.round(totalFee * 0.1)}</span>円</li>
          <li>
            <SendFee 
              totalWeight={totalWeight} 
              setTotalSendFee={setTotalSendFee}
            />
          </li>
          {/* <li>カートの重量合計<span>{totalWeight}</span>g</li> */}
          {
            totalSendFee 
              ? <li className="total-fee">授与料合計<span>{Math.round(totalFee * 1.1)+totalSendFee}</span>円</li>
              : <li className="total-fee">授与料合計を出すには<br />発送先を選択してください。</li>
          }
        </ul>
      </div>      
    </div>
  );
};

export default OrderResult;


// <li>
//   <button onClick={() => alert("Implement Checkout")}>用紙出力</button>
// </li>


// 商品名
// 価格
// 数量
// 小計
// 授与料小計
// 0,000円
// 郵送料（口座徴収通知料を含む）
// 0,000円
// 授与料合計
// 0,000円
// いずれかの下記口座までご送金（振込）してください。
// 銀行名　ゆうちょ銀行
// 金融機関コード　9900
// &nbsp;　 
// 店番　109
// 預金種目
// 当座
// 店名
// 一〇九店（イチゼロキュウ店）
// 口座番号
// 0001231
// 金融機関名
// 郵便局
// 口座番号
// 01070-8-1231
// 　 加入者名
// （宗）白峯神宮
// 申込者情報
// お名前
// 郵便番号
// ご住所
// 電話番号
// 備考
// ここに郵便振込用紙の控えを貼付けてください。
