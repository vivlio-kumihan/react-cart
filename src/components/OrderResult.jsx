import { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import CartItem from "./CartItem";
import OrgForm from "../containers/OrgForm";
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

  const [prefectureSelected, setPrefectureSelected] = useState("");

  // formの入力情報
  const inputVal = {
      name: "", 
      postalCode: "", 
      prefecture: "", 
      city: "",
      town: "",
      email: "", 
      tel: "", 
      note: "", 
  };
  // Formのinput値のstate  
  const [inputFormInfo, setInputFormInfo] = useState(inputVal);  
  // カートに商品が入っているか否か条件分岐で使う。
  const isEmpty = (arr) => arr.length < 1;

  return (
    <div className={`cart-wrapper ${toggle && "active"}`}>
      <div className="cart-container">
        {/* プリントアウト共用部 */}
        <div className="component-ref" ref={componentRef}>
          <h3 className="toggle-web">お求め一覧</h3>
          <h3 className="toggle-print">授与品のご案内&nbsp;FAX申込用紙印刷</h3>
          <p>お申し込み社務所到着後、翌日の午前中に執り行います。</p>
          {isEmpty(cartItems) && (
            <div className="default-msg">現在、登録された商品はありません。</div>
          )}

          <div className="flex-wrapper">
            <div className="calc-result">
              <ul className="calc-amount">
                <li>授与料小計<span>{reloadCartItems()[0]}</span>円</li>
                <li>
                  <SendFee 
                    totalWeight={reloadCartItems()[1]} 
                    setTotalSendFee={setTotalSendFee}
                    prefectureSelected={prefectureSelected}
                    setPrefectureSelected={setPrefectureSelected}
                  />
                </li>
                {/* <li>カートの重量合計<span>{reloadCartItems()[1]}</span>g</li> */}
                {
                  totalSendFee 
                    ? <li className="total-fee">授与料合計<span>{reloadCartItems()[0]+totalSendFee}</span>円</li>
                    : <li className="total-fee direction">授与料合計を出すには発送先を選択してください。</li>
                }
              </ul>
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
              </div>
            </div>

            <div className="offer-contents">
              <OrgForm
                inputFormInfo={inputFormInfo}
                setInputFormInfo={setInputFormInfo}
                prefectureSelected={prefectureSelected}
              />   

              {/* ___リファクタリング start___ */}
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
              {/* ___リファクタリング end___ */}

              <div className="send-buttons">
                <ReactToPrint 
                  trigger={() => (
                    <div>
                      <button className="to-print-btn">
                        印刷する
                      </button>
                      <p>申込み用紙の印刷ができない方は、<br />FAX申込み用紙の必要事項をご確認のうえ<br />他の紙に記載したものでも代用可能です。</p>
                    </div>
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
                  prefectureSelected={prefectureSelected}
                />             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderResult;