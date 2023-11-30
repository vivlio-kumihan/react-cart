import { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import CartItem from "./CartItem";
import FaxForm from "../containers/FaxForm";
import MailForm from "../containers/MailForm";
import SendFee from "../containers/SendFee";
import "../styles/components/OrderResult.sass";

const OrderResult = ({ 
  toggle, 
  cartItems,
  totalFeeHash, setTotalFeeHash,
  setTotalFee,
  totalWeightHash, setTotalWeightHash, 
  setTotalWeight,
  totalSendFee, setTotalSendFee,
  nameValueZero,
  hasItem,
  reloadCartItems,
  }) => {

  const componentRef = useRef(null); 

  // formの入力情報
  const inputVal = {
      name: "白峯太郎", 
      postalCode: "0000000", 
      prefecture: "", 
      city: "",
      town: "",
      email: "shiramine@taro.com", 
      tel: "000-000-0000", 
      note: "", 
  };
  // Formのinput値のstate  
  const [inputFormInfo, setInputFormInfo] = useState(inputVal);  
  // カートに商品が入っているか否か条件分岐で使う。
  const isEmpty = (arr) => arr.length < 1;

  return (
    <div className={`cart-wrapper ${toggle && "active"}`}>
      {/* プリントアウト共用部 */}
      <div className="component-ref" ref={componentRef}>
        <h2 className="toggle-web">授与品のご案内</h2>
        <h2 className="toggle-print">授与品のご案内&nbsp;FAX申込用紙印刷</h2>
        {isEmpty(cartItems) && (
          <div className="default-msg">登録された商品はありません。</div>
        )}
        <div className="cart-index">
          <div className="result-wrapper">
            {cartItems.map((cartItem, idx) => (
              <div key={idx}>
                <CartItem
                  key={idx} 
                  {...cartItem}
                  totalFeeHash={totalFeeHash}
                  setTotalFee={setTotalFee}
                  totalWeightHash={totalWeightHash}
                  setTotalWeight={setTotalWeight}
                  nameValueZero={nameValueZero}
                  hasItem={hasItem}
                />
            </div>
            ))}
          </div>

          <ul className="calc-amount">
            <li>授与料小計<span>{reloadCartItems()[0]}</span>円</li>
            {/* <li>消費税<span>{Math.round(totalFee * 0.1)}</span>円</li> */}
            <li>
              <SendFee 
                totalWeight={reloadCartItems()[1]} 
                setTotalSendFee={setTotalSendFee}
              />
            </li>
            <li>カートの重量合計<span>{reloadCartItems()[1]}</span>g</li>
            {
              totalSendFee 
                ? <li className="total-fee">授与料合計<span>{reloadCartItems()[0]+totalSendFee}</span>円</li>
                : <li className="total-fee direction">授与料合計を出すには発送先を選択してください。</li>
            }
          </ul>
        </div>

        <FaxForm
          inputFormInfo={inputFormInfo}
          setInputFormInfo={setInputFormInfo}
        />   

        {/* ___リファクタリング___ */}
        <div className="for-only-print">
          <div className="wrapper">
            <h3>いずれかの下記口座までご送金（振込）してください。</h3>
            <dl>
              <div>
                <dt>銀行名</dt>
                <dd>ゆうちょ銀行</dd>
              </div>
              <div>
                <dt>金融機関コード</dt>
                <dd>9900</dd>
              </div>
              <div>
                <dt>店番</dt>
                <dd>109</dd>
              </div>
              <div>
                <dt>預金種目</dt>
                <dd>当座</dd>
              </div>
              <div>
                <dt>店名</dt>
                <dd>一〇九店（イチゼロキュウ店）</dd>
              </div>
              <div>
                <dt>口座番号</dt>
                <dd>0001231</dd>
              </div>
            </dl>
            <dl>
              <div>
                <dt>金融機関名</dt>
                <dd>郵便局</dd>
              </div>
              <div>
                <dt>口座番号</dt>
                <dd>01070-8-1231</dd>
              </div>
              <div>
                <dt>加入者名</dt>
                <dd>（宗）白峯神宮</dd>
              </div>
            </dl>

            <h3>申込者情報</h3>
            <dl>
              <div>
                <dt>お名前</dt>
                <dd>{inputFormInfo.name}</dd>
              </div>
              <div>
                <dt>郵便番号</dt>
                <dd>{inputFormInfo.postalCode}</dd>
              </div>
              <div>
                <dt>ご住所</dt>
                <dd>
                  {inputFormInfo.prefecture}
                  {inputFormInfo.city}
                  {inputFormInfo.town}
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>{inputFormInfo.email}</dd>
              </div>
              <div>
                <dt>電話番号</dt>
                <dd>{inputFormInfo.tel}</dd>
              </div>
              <div>
                <dt>備考</dt>
                <dd>{inputFormInfo.note}</dd>
              </div>
            </dl>
          </div>
          <div className="paste-area">
            ここに郵便振込用紙の<br />控えを貼付けてください。
          </div>
        </div>
        {/* ___リファクタリング___ */}

        <div className="send-buttons">
          <ReactToPrint 
            trigger={() => (
              <button className="to-print-btn">
                印刷する
              </button>
            )}
            pageStyle="@page {
              size: A4 portrait;
              margin: 0;
              }"
            content={() => componentRef.current}
          />

          <MailForm
            cartItems={cartItems}
            reloadCartItems={reloadCartItems}
            totalSendFee={totalSendFee}
            nameValueZero={nameValueZero}
            hasItem={hasItem}
            inputFormInfo={inputFormInfo}
          />             
        </div>

      </div>
    </div>
  );
};

export default OrderResult;