import { useState } from "react";
import "../styles/containers/OrgForm.sass";

// 最終的には、郵便番号の入力で住所を自動補完される機能を付ける。
const OrgForm = ({ 
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
  prefectureSelected,
  setPrefectureSelected, 
}) => {

  // エラーメッセージのstate
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [postalCodeErrorMsg, setPostalCodeErrorMsg] = useState("");
  const [addressErrorMsg, setAddressErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [telErrorMsg, setTelErrorMsg] = useState("");  

  // トリガー
  const onSubmit = (e) => {
    e.preventDefault();
    // エラーメッセージの初期化
    setNameErrorMsg("");
    setPostalCodeErrorMsg("");
    setAddressErrorMsg("");
    setEmailErrorMsg("");
    setTelErrorMsg("");
    
    const formData = {
      senderName,
      postalCode,
      address,
      email,
      tel,
      note,
    };

    // 条件
    const emptyName = senderName === "";
    const emptyPostalCode = postalCode === "";
    const isJustLenghtPostalCode = postalCode.length !==  8;
    const isNumPostalCode = !isNaN(parseInt(postalCode));
    const emptyAddress = address === "";
    const emptyEmail = email === "";
    const emptyTel = tel === "";
    const isJustLenghtTel = tel.length !== 10;
    const isNumTel = !isNaN(parseInt(tel));
  
    emptyName && setNameErrorMsg("氏名を入力してください。");
    (emptyPostalCode || isNumPostalCode || isJustLenghtPostalCode) && setPostalCodeErrorMsg("郵便番号を8桁の数字で入力してください。");
    emptyAddress && setAddressErrorMsg("住所を入力してください。");
    emptyEmail && setEmailErrorMsg("メールアドレスを入力してください。");
    (emptyTel || isNumTel ||isJustLenghtTel) && setTelErrorMsg("電話番号を10桁の数字で入力してください。");

    const enableSubmit = 
      !emptyName &&
      !emptyPostalCode &&
      !isJustLenghtPostalCode &&
      !isNumPostalCode &&
      !emptyAddress &&
      !emptyEmail &&
      !emptyTel &&
      !isJustLenghtTel &&
      !isNumTel;

    if (enableSubmit) {
      console.log("送信しました。");
      console.log(formData);
    }
  };  

  const inputName = (e) => {
    setSenderName(e.target.value);
  };
  const inputPostalCode = (e) => {
    setPostalCode(e.target.value);
  };
  // const inputPrefecture = (e) => {
  //   setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, prefecture: e.target.value }));
  // };
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

  const reset = () => {
    setSenderName("");
    setPostalCode("");
    setAddress("");
    setTel("");
    setNote("");
    setPrefectureSelected("");
  };
  
  return (
    <>
    <div className="form">
      <div className="input-wrapper">
        <div className="note">※印は必須事項になります。</div>
        <div>
          <label htmlFor="senderName" className="required"><span>お名前</span></label>
          <input onChange={inputName} placeholder={senderName} value={senderName} id="senderName" type="text" />
        </div>
        <div>
          <label htmlFor="postalCode" className="required"><span>郵便番号</span></label>
          <input onChange={inputPostalCode} placeholder={postalCode} value={postalCode} id="postalCode" type="text" pattern="\d{3}-?\d{4}" />
        </div>
        <div>
          <label htmlFor="prefecture">都道府県</label>
          <div>{
            prefectureSelected 
              ? prefectureSelected
              : "発送先の選択ボタンから都道府県を選択し、授与料合計を決定してください。"
          }</div>
          {/* <input onChange={inputPrefecture} placeholder={inputFormInfo.prefecture} id="prefecture" type="text" /> */}
        </div>
        <div>
          <label htmlFor="city" className="required"><span>ご住所</span></label>
          <input onChange={inputAddress} placeholder={address} value={address} id="address" type="text" />
        </div>
        <div className="email-container">
          <label htmlFor="email">
            <span>メールアドレス</span>
            <span className="note">※メールお申し込みの場合は必須になります。</span>
          </label>
          <input onChange={inputEmail} placeholder={email} value={email} id="email" type="email" />
        </div>
        <div>
          <label htmlFor="tel" className="required"><span>電話番号</span></label>
          <input onChange={inputTel} placeholder={tel} value={tel} id="tel" type="text" pattern="\d{2,4}-?\d{2,4}-?\d{3,4}" />
        </div>
        <div>
          <label htmlFor="note">備考</label>
          <textarea onChange={inputNote} placeholder={note} value={note} id="note" />
        </div>
      </div> 
      <div className="privacy-policy">
        <p>必要事項をご記入のうえ、確認ボタンを押して確認後、送信してください。</p>
        <a className="privacy-policy-anchor" href=""><span>▶️</span>&nbsp;プライバシー・ポリシー</a>
        <div className="check-box">
          <input type="checkbox" id="name" />
          <label htmlFor="name">プライバシーポリシーに同意する</label>
        </div>
      </div>
      <button className="reset-btn" type="button" onClick={reset}>リセット</button>
    </div>
    </>
  );
};

export default OrgForm;