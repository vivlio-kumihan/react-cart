import { useState, useRef, useEffect, useCallback } from "react";
import emailjs from '@emailjs/browser';
import ReactToPrint from "react-to-print";
import { useReactToPrint } from 'react-to-print';
import CartItem from "./CartItem";
import OrgForm from "../containers/OrgForm";
import MailForm from "../containers/MailForm";
import SendFee from "../containers/SendFee";
import "../styles/components/OrderResult.sass";

const OrderResult = ({ 
  toggle, 
  toggleAction,
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

  cartItems.forEach(item => {
    if (item.pid === "syuin_chou") {
      if (Object.keys(item.types).reduce((acc, key) => acc + parseInt(item.types[key]), 0) === 1) {
        console.log(reloadCartItems()[0] + 20);
      } else {
        console.log(reloadCartItems()[1]);
      }
    }
  });
  
  // Formのinput属性値のstate  
  const [senderName, setSenderName] = useState(""); 
  const [postalCode, setPostalCode] = useState(""); 
  const [address, setAddress] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [tel, setTel] = useState(""); 
  const [note, setNote] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false)
  const [prefectureSelected, setPrefectureSelected] = useState("");

  // 印刷のトリガー
  const componentRef = useRef(null); 
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  // メール送信のトリガー
  const sendForm = useRef();
  // このファイル内でクリックイベントに対応する場合、preventDefault()が必要みたい。
  // const sendEmail = (e) => {
  //   e.preventDefault();
  const sendEmail = () => {
    // emailjs.sendForm('service_g7yuumj', 'template_dq4zyxs', sendForm.current, 'qFuS96-H2M1rD2BgC')
    emailjs.sendForm('service_rnt4ier', 'template_dq4zyxs', sendForm.current, 'qFuS96-H2M1rD2BgC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };  
  
  // カートに商品が入っているか否か条件分岐で使う。
  const isEmpty = (arr) => arr.length < 1; 

  return (
    <div className={`cart-wrapper ${toggle && "active"}`}>
      <div className="cart-container">
        {/* プリントアウト共用部 */}
        <div className="component-ref" ref={componentRef}>
          <h3 className="toggle-web">お求め一覧</h3>
          <h3 className="toggle-print">お守り・授与品のご案内&nbsp;FAX申込用紙印刷</h3>
          <p>お申し込み社務所到着後、翌日の午前中に執り行います。</p>
          {isEmpty(cartItems) && (
            <div className="default-msg">現在、登録されたお守り・授与品はありません。</div>
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
                    cartItems={cartItems}
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
                        // goSyuinChouAction={goSyuinChouAction}
                      />
                  </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="offer-contents">
              <OrgForm
                sendEmail={sendEmail}
                handlePrint={handlePrint}
                senderName={senderName}
                setSenderName={setSenderName}
                postalCode={postalCode}
                setPostalCode={setPostalCode}
                address={address}
                setAddress={setAddress}
                email={email}
                setEmail={setEmail}
                tel={tel}
                setTel={setTel}
                note={note}
                setNote={setNote}
                privacyPolicy={privacyPolicy}
                setPrivacyPolicy={setPrivacyPolicy}
                prefectureSelected={prefectureSelected}
                setPrefectureSelected={setPrefectureSelected}
                togglea={toggle}
                toggleAction={toggleAction}
              />   

              {/* ___リファクタリング start___ */}
              <div className="for-only-print">
                <div className="wrapper">
                  <h3>いずれかの下記口座までご送金（振込）してください。</h3>
                  <dl className="financial-institutions-name">
                    <div>
                      <dt className="finacial-name">□銀行名</dt>
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
                  <dl className="financial-institutions-name">
                    <div className="first">
                      <dt className="finacial-name">□金融機関名</dt>
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
                  <dl className="entrys-information">
                    <div>
                      <dt>お名前</dt>
                      <dd>{senderName}</dd>
                    </div>
                    <div>
                      <dt>郵便番号</dt>
                      <dd>{postalCode}</dd>
                    </div>
                    <div>
                      <dt>ご住所</dt>
                      <dd>
                        {prefectureSelected}{address}
                      </dd>
                    </div>
                    <div>
                      <dt>E-mail</dt>
                      <dd>{email}</dd>
                    </div>
                    <div>
                      <dt>電話番号</dt>
                      <dd>{tel}</dd>
                    </div>
                    <div>
                      <dt>備考</dt>
                      <dd>{note}</dd>
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
                      {/* <button　className="to-print-btn">
                        FAX申込書を印刷する
                      </button>
                      <div className="note">申込み用紙の印刷ができない方は、FAX申込み用紙の必要事項をご確認のうえ他の紙に記載したものでも代用可能です。</div> */}
                    </div>
                  )}
                  pageStyle="@page { size: A4 portrait; margin: 0; }"
                  content={() => componentRef.current}
                />

                <MailForm
                  cartItems={cartItems}
                  reloadCartItems={reloadCartItems}
                  totalSendFee={totalSendFee}
                  nameValueZero={nameValueZero}
                  hasItem={hasItem}
                  sendEmail={sendEmail}
                  sendForm={sendForm}
                  senderName={senderName}
                  postalCode={postalCode}
                  address={address}
                  email={email}
                  tel={tel}
                  note={note}
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