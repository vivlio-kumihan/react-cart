import { useState } from "react";
import "../styles/containers/OrgForm.sass";

// 最終的には、郵便番号の入力で住所を自動補完される機能を付ける。
const OrgForm = ({
  sendEmail,
  handlePrint,
  senderName,
  setSenderName,
  postalCode,
  setPostalCode,
  address,
  setAddress,
  email,
  setEmail,
  tel,
  setTel,
  note,
  setNote, 
  privacyPolicy,
  setPrivacyPolicy,
  prefectureSelected,
  setPrefectureSelected, 
}) => {

  // エラーメッセージのstate
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [postalCodeErrorMsg, setPostalCodeErrorMsg] = useState("");
  const [addressErrorMsg, setAddressErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [telErrorMsg, setTelErrorMsg] = useState("");
  const [privacyPolicyErrorMsg, setPrivacyPolicyErrorMsg] = useState("");
  const [prefectureErrorMsg, setPrefectureErrorMsg] = useState("");

  // 条件
  const emptyName = senderName === "";
  const emptyPostalCode = postalCode === "";
  const isJustLenghtPostalCode = postalCode.length !==  7;
  const isNumPostalCode = isNaN(parseInt(postalCode));
  const emptyAddress = address === "";
  const emptyEmail = email === "";
  const notFormalityEmail = !email.match(/.+@.+\..+/);
  const emptyTel = tel === "";
  const isJustLenghtTel = tel.length !== 10;
  const isNumTel = isNaN(parseInt(tel));
  const flagPrivacyPolicy = privacyPolicy === false;
  const defaultNotePref = prefectureSelected === "" || "発送先の選択ボタンから都道府県を選択し、授与料合計を決定してください。";

  // FAX
  const onSubmitPrint = (e) => {
    e.preventDefault();
    // エラーメッセージの初期化
    setNameErrorMsg("");
    setPostalCodeErrorMsg("");
    setAddressErrorMsg("");
    setEmailErrorMsg("");
    setTelErrorMsg("");
    setPrefectureErrorMsg("");
    setPrivacyPolicyErrorMsg("");
    
    const formData = {
      senderName,
      postalCode,
      address,
      email,
      tel,
      note,
      privacyPolicy,
      prefectureSelected
    };

    emptyName && setNameErrorMsg("氏名を入力してください。");
    (emptyPostalCode || isNumPostalCode || isJustLenghtPostalCode) && setPostalCodeErrorMsg("郵便番号を7桁の数字で入力してください。");
    emptyAddress && setAddressErrorMsg("住所を入力してください。");
    (emptyTel || isNumTel ||isJustLenghtTel) && setTelErrorMsg("電話番号を10桁の数字で入力してください。");
    flagPrivacyPolicy && setPrivacyPolicyErrorMsg("プライバシー・ポリシーのチェックをご確認ください。");
    defaultNotePref && setPrefectureErrorMsg("発送先の選択ボタンから都道府県を選択してください。")

    const enableSubmit = 
      !emptyName &&
      !emptyPostalCode &&
      !isJustLenghtPostalCode &&
      !isNumPostalCode &&
      !emptyAddress &&
      !emptyTel &&
      !isJustLenghtTel &&
      !isNumTel &&
      !flagPrivacyPolicy;

    if (enableSubmit) {
      handlePrint();
      console.log("fax");
      console.log(formData);
    }
  };  

  // メール
  const onSubmitEmail = (e) => {
    e.preventDefault();
    // エラーメッセージの初期化
    setNameErrorMsg("");
    setPostalCodeErrorMsg("");
    setAddressErrorMsg("");
    setEmailErrorMsg("");
    setTelErrorMsg("");
    setPrefectureErrorMsg("");
    setPrivacyPolicyErrorMsg("");
    
    const formData = {
      senderName,
      postalCode,
      address,
      email,
      tel,
      note,
      privacyPolicy,
      prefectureSelected
    };

    emptyName && setNameErrorMsg("氏名を入力してください。");
    (emptyPostalCode || isNumPostalCode || isJustLenghtPostalCode) && setPostalCodeErrorMsg("郵便番号を7桁の数字で入力してください。");
    emptyAddress && setAddressErrorMsg("住所を入力してください。");
    (emptyEmail || notFormalityEmail) && setEmailErrorMsg("メールアドレスを入力してください。");
    (emptyTel || isNumTel ||isJustLenghtTel) && setTelErrorMsg("電話番号を10桁の数字で入力してください。");
    flagPrivacyPolicy && setPrivacyPolicyErrorMsg("プライバシー・ポリシーのチェックをご確認ください。");
    defaultNotePref && setPrefectureErrorMsg("発送先の選択ボタンから都道府県を選択してください。")

    const enableSubmit = 
      !emptyName &&
      !emptyPostalCode &&
      !isJustLenghtPostalCode &&
      !isNumPostalCode &&
      !emptyAddress &&
      !emptyEmail &&
      !emptyTel &&
      !isJustLenghtTel &&
      !isNumTel &&
      !flagPrivacyPolicy;

    if (enableSubmit) {
      sendEmail();
      console.log("送信しました。");
      console.log(formData);
    }
  };  

  // セッター
  const inputName = (e) => {
    setSenderName(e.target.value);
  };
  const inputPostalCode = (e) => {
    setPostalCode(e.target.value);
  };
  const inputAddress = (e) => {
    setAddress(e.target.value);
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputTel = (e) => {
    setTel(e.target.value);
  };
  const inputNote = (e) => {
    setNote(e.target.value);
  };
  const inputPrivacyPolicy = () => {
    setPrivacyPolicy(true);
  };
  // 入力値をリセットする関数
  const inputReset = () => {
    setSenderName("");
    setPostalCode("");
    setAddress("");
    setTel("");
    setNote("");
    setPrefectureSelected("");
    // setPrivacyPolicy(false);
  };

  return (
    <>
    <div className="form" onSubmit={onSubmitEmail}>
      <div className="input-wrapper">
        <div className="note">※印は必須事項になります。</div>
        <div>
          <label htmlFor="senderName" className="required">
            <span>お名前</span>
            {nameErrorMsg && (
              <div className="error-msg">{nameErrorMsg}</div>
            )}
          </label>
          <input onChange={inputName} value={senderName} id="senderName" type="text" />
        </div>
        <div className="with-note-container">
          <label htmlFor="postalCode" className="required">
            <span>郵便番号</span>
            <span className="note">※ハイフンを抜いた7桁の数字を入力してください。</span>
            {postalCodeErrorMsg && (
              <div className="error-msg">{postalCodeErrorMsg}</div>
            )}           
          </label>
          <input onChange={inputPostalCode} value={postalCode} id="postalCode" type="text" />
        </div>
        <div>
          <label htmlFor="prefectureSelected">都道府県</label>
          {/* <input onChange={inputPrefecture} value={prefectureSelected} id="prefectureSelected" type="text" /> */}
          {
            prefectureSelected 
              ?  <div>{prefectureSelected}</div>
              :  <div className="notice">発送先の選択ボタンから都道府県を選択し、授与料合計を決定してください。</div>
          }         
        </div>
        <div>
          <label htmlFor="address" className="required">
            <span>ご住所</span>
            {addressErrorMsg && (
              <div className="error-msg">{addressErrorMsg}</div>
            )}          
          </label>
          <input onChange={inputAddress} value={address} id="address" type="text" />
        </div>
        <div className="with-note-container">
          <label htmlFor="email">
            <span>メールアドレス</span>
            <span className="note">※メールお申し込みの場合は必須になります。</span>
            {emailErrorMsg && (
              <div className="error-msg">{emailErrorMsg}</div>
            )}            
          </label>
          <input onChange={inputEmail} value={email} id="email" type="email" />
        </div>
        <div className="with-note-container">
          <label htmlFor="tel" className="required">
            <span>電話番号</span>
            <span className="note">※ハイフンを抜いた10桁の数字を入力してください。</span>
            {telErrorMsg && (
              <div className="error-msg">{telErrorMsg}</div>
            )}                    
          </label>
          <input onChange={inputTel} value={tel} id="tel" type="text" />
        </div>
        <div>
          <label htmlFor="note">備考</label>
          <textarea onChange={inputNote} value={note} id="note" />
        </div>
      </div> 
      <div className="privacy-policy">
        <p>必要事項をご記入のうえ、確認ボタンを押して確認後、送信してください。</p>
        <a className="privacy-policy-anchor" href=""><span>▶️</span>&nbsp;プライバシー・ポリシー</a>
        <div className="check-box">
          <input onChange={inputPrivacyPolicy} type="checkbox" id="privacy-policy" />
          <label htmlFor="privacy-policy">プライバシーポリシーに同意する</label>
          {privacyPolicyErrorMsg && (
            <div className="error-msg">{privacyPolicyErrorMsg}</div>
          )}    
        </div>
      </div>
      <div className="send-buttons">
        <div className="send-btn">
          <button className="input-print-btn" type="button" onClick={onSubmitPrint}>FAX申込書を印刷する</button>
          <div className="note">申込み用紙の印刷ができない方は、FAX申込み用紙の必要事項をご確認のうえ他の紙に記載したものでも代用可能です。</div>
        </div>
        <div className="send-btn">
          <button className="input-mail-btn" type="button" onClick={onSubmitEmail}>メール申し込みを送信</button>
          <div className="note">FAXでのお申込みができない方は、こちらをお選びください。ご記入いただいたメールアドレスにEメールが届きますので、撮影した郵便振込用紙を添付のうえご返信ください。（※メールが届かない場合、迷惑メールフィルターなどご確認ください。）</div>
        </div>
      </div>
      <button className="input-reset-btn" type="button" onClick={inputReset}>リセット</button>
    </div>
    </>
  );
};

export default OrgForm;