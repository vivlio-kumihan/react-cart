import { useState, useEffect } from "react";
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
  sendCompleteToggle,
  sendInputErrorToggle,
  handlePrivacyPolicy
}) => {

  // 都道府県名
	const LOCATION = [
    "---",
    "北海道",
    "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
    "東京都", "茨城県",	"神奈川県", "栃木県", "千葉県", "群馬県", "山梨県", "埼玉県",
    "新潟県", "長野県", "富山県", "石川県", "福井県",
    "静岡県", "岐阜県", "愛知県", "三重県",
    "滋賀県", "京都府", "兵庫県", "大阪府", "奈良県", "和歌山県",
    "鳥取県", "島根県", "岡山県", "広島県", "山口県",
    "香川県", "愛媛県", "徳島県", "高知県",
    "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県",
    "沖縄県",
	];  

  // エラーメッセージのstate
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [postalCodeErrorMsg, setPostalCodeErrorMsg] = useState("");
  const [prefectureErrorMsg, setPrefectureErrorMsg] = useState("");
  const [addressErrorMsg, setAddressErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [telErrorMsg, setTelErrorMsg] = useState("");
  const [privacyPolicyErrorMsg, setPrivacyPolicyErrorMsg] = useState("");

  // 条件
  const emptyName = senderName === "";
  const emptyPostalCode = postalCode === "";
  const isPostalCodeIncludeHyphen = !postalCode.includes('\u002D');
  const isJustLenghtPostalCode = postalCode.length !== 8
  // const isNumPostalCode = isNaN(parseInt(postalCode));
  const defaultNotePref = prefectureSelected === "";
  const emptyAddress = address === "";
  const emptyEmail = email === "";
  const notFormalityEmail = !email.match(/.+@.+\..+/);
  const emptyTel = tel === "";
  const isTelIncludeHyphen = !tel.includes('\u002D');
  const isJustLenghtTel = (tel.length < 12 || tel.length > 13);
  // const isNumTel = isNaN(parseInt(tel));
  const flagPrivacyPolicy = privacyPolicy === false;

  // FAX
  const onSubmitPrint = (e) => {
    e.preventDefault();
    // エラーメッセージの初期化
    setNameErrorMsg("");
    setPostalCodeErrorMsg("");
    setPrefectureErrorMsg("")
    setAddressErrorMsg("");
    setEmailErrorMsg("");
    setTelErrorMsg("");
    // setPrefectureErrorMsg("");
    setPrivacyPolicyErrorMsg("");
    
    const formData = {
      senderName,
      postalCode,
      prefectureSelected,
      address,
      email,
      tel,
      note,
      privacyPolicy,
    };

    // (emptyPostalCode || isNumPostalCode || isJustLenghtPostalCode) && setPostalCodeErrorMsg("郵便番号を7桁の数字で入力してください。");
    // defaultNotePref && setPrefectureErrorMsg("都道府県を選択してください。")
    // emptyAddress && setAddressErrorMsg("住所を入力してください。");
    // (emptyTel || isNumTel ||isJustLenghtTel) && setTelErrorMsg("電話番号を10桁の数字で入力してください。");
    // flagPrivacyPolicy && setPrivacyPolicyErrorMsg("プライバシー・ポリシーのチェックをご確認ください。");
    // emptyName && setNameErrorMsg("氏名を入力してください。");
    
    emptyName && setNameErrorMsg("氏名を入力してください。");
    // (emptyPostalCode || isNumPostalCode || isJustLenghtPostalCode || isPostalCodeIncludeHyphen) && setPostalCodeErrorMsg("ハイフン区切りの郵便番号を入力してください。");
    (emptyPostalCode || isJustLenghtPostalCode || isPostalCodeIncludeHyphen) && setPostalCodeErrorMsg("ハイフン区切りの郵便番号を入力してください。");
    defaultNotePref && setPrefectureErrorMsg("都道府県を選択してください。")
    emptyAddress && setAddressErrorMsg("住所を入力してください。");
    // (emptyTel || isNumTel ||isJustLenghtTel || isTelIncludeHyphen) && setTelErrorMsg("ハイフン区切りの電話番号を入力してください。");
    (emptyTel || isJustLenghtTel || isTelIncludeHyphen) && setTelErrorMsg("ハイフン区切りの電話番号を入力してください。");
    flagPrivacyPolicy && setPrivacyPolicyErrorMsg("プライバシー・ポリシーのチェックをご確認ください。");

    const enableSubmit = 
      !emptyName &&
      !emptyPostalCode &&
      !isJustLenghtPostalCode &&
      !isPostalCodeIncludeHyphen &&
      // !isNumPostalCode &&
      !defaultNotePref &&
      !emptyAddress &&
      !emptyTel &&
      !isJustLenghtTel &&
      !isTelIncludeHyphen &&
      // !isNumTel &&
      !flagPrivacyPolicy;

    if (enableSubmit) {
      handlePrint();
      console.log("fax print!");
      console.log(formData);
    }
  };

  // メール
  const onSubmitEmail = (e) => {
    e.preventDefault();
    // エラーメッセージの初期化
    setNameErrorMsg("");
    setPostalCodeErrorMsg("");
    setPrefectureErrorMsg("");
    setAddressErrorMsg("");
    setEmailErrorMsg("");
    setTelErrorMsg("");
    // setPrefectureErrorMsg("");
    setPrivacyPolicyErrorMsg("");
    
    const formData = {
      senderName,
      postalCode,
      prefectureSelected,
      address,
      email,
      tel,
      note,
      privacyPolicy,
    };

    emptyName && setNameErrorMsg("氏名を入力してください。");
    // (emptyPostalCode || isNumPostalCode || isJustLenghtPostalCode || isPostalCodeIncludeHyphen) && setPostalCodeErrorMsg("ハイフン区切りの郵便番号を入力してください。");
    (emptyPostalCode || isJustLenghtPostalCode || isPostalCodeIncludeHyphen) && setPostalCodeErrorMsg("ハイフン区切りの郵便番号を入力してください。");
    defaultNotePref && setPrefectureErrorMsg("都道府県を選択してください。")
    emptyAddress && setAddressErrorMsg("住所を入力してください。");
    (emptyEmail || notFormalityEmail) && setEmailErrorMsg("FAXの方は不要、メール送信の方は要確認です。");
    // (emptyTel || isNumTel ||isJustLenghtTel || isTelIncludeHyphen) && setTelErrorMsg("ハイフン区切りの電話番号を入力してください。");
    (emptyTel || isJustLenghtTel || isTelIncludeHyphen) && setTelErrorMsg("ハイフン区切りの電話番号を入力してください。");
    flagPrivacyPolicy && setPrivacyPolicyErrorMsg("プライバシー・ポリシーのチェックをご確認ください。");

    const enableSubmit = 
      !emptyName &&
      !emptyPostalCode &&
      !isJustLenghtPostalCode &&
      !isPostalCodeIncludeHyphen &&
      // !isNumPostalCode &&
      !defaultNotePref &&
      !emptyAddress &&
      !emptyEmail &&
      !notFormalityEmail &&
      !emptyTel &&
      !isJustLenghtTel &&
      // !isNumTel &&
      !flagPrivacyPolicy;

    if (enableSubmit) {
      sendCompleteToggle();
      sendEmail();
      console.log("送信しました。");
      console.log(formData);
    } else {
      sendInputErrorToggle();
      console.log("入力エラーが発生。");
    }
  };
  // セッター
  const inputName = (e) => {
    setSenderName(e.target.value);
    nameErrorMsg && setNameErrorMsg("");
  };
  const inputPostalCode = (e) => {
    setPostalCode(e.target.value);
    postalCodeErrorMsg && setPostalCodeErrorMsg("");
  };
  const inputPrefecture = (e) => {
    setPrefectureSelected(e.target.value);

    // ユーザーが都道府県を選択した場合はエラーメッセージをクリア
    if (e.target.value !== "---") {
      setPrefectureErrorMsg("");
    } else {
      // ユーザーが都道府県を選択しなかった場合はエラーメッセージを表示
      setPrefectureErrorMsg("都道府県を選択してください。");
    }
  };
  const inputAddress = (e) => {
    setAddress(e.target.value);
    addressErrorMsg && setAddressErrorMsg("");
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
    emailErrorMsg && setEmailErrorMsg("");
  };
  const inputTel = (e) => {
    setTel(e.target.value);
    telErrorMsg && setTelErrorMsg("");
  };
  const inputNote = (e) => {
    setNote(e.target.value);
  };
  const inputPrivacyPolicy = () => {
    setPrivacyPolicy(prevState => !prevState);
    privacyPolicyErrorMsg && setPrivacyPolicyErrorMsg("");
  };

  // 入力値をリセットする関数
  const inputReset = () => {
    setSenderName("");
    setPostalCode("");
    setPrefectureSelected("");
    setAddress("");
    setTel("");
    setNote("");
    setPrivacyPolicy(false);
  };
  
  // 都道府県の初期エラーメッセージの設定
  useEffect(() => {
    // 初期表示時にエラーメッセージを設定
    setPrefectureErrorMsg("");
  }, []);

  return (
    <>
    <div className="form" onSubmit={onSubmitEmail}>
      <div className="input-wrapper">
        <div className="note">※印は必須事項になります。</div>
        {/* 名前 */}
        <div>
          <label htmlFor="senderName" className="required">
            <span className="required">お名前</span>
            {nameErrorMsg && (
              <div className="error-msg">{nameErrorMsg}</div>
            )}
          </label>
          <input onChange={inputName} value={senderName} id="senderName" type="text" />
        </div>

        {/* 郵便番号 */}
        <div className="with-note-container">
          <label htmlFor="postalCode" className="required">
            <span className="required">郵便番号</span>
            <span className="note">※ハイフン区切りで入力願います。</span>
            {postalCodeErrorMsg && (
              <div className="error-msg">{postalCodeErrorMsg}</div>
            )}           
          </label>
          <input onChange={inputPostalCode} value={postalCode} id="postalCode" type="text" />
        </div>

        {/* 都道府県 */}
        <div className="with-note-container">
          <label htmlFor="prefecture" className="required">
            <span className="required">都道府県</span>
            <span className="note">※都道府県を選択し、授与料合計を決定してください。</span>
            {prefectureErrorMsg && (
              <div className="error-msg">{prefectureErrorMsg}</div>
            )}           
          </label>
          <select
            onChange={inputPrefecture}
            id="prefecture"
            value={prefectureSelected}
          >
            {
              LOCATION.map(location => (
                <option key={location} value={location}>{location}</option>
              ))
            }
          </select>
        </div>

        {/* 住所 */}
        <div>
          <label htmlFor="address" className="required">
            <span className="required">ご住所</span>
            {addressErrorMsg && (
              <div className="error-msg">{addressErrorMsg}</div>
            )}          
          </label>
          <input onChange={inputAddress} value={address} id="address" type="text" />
        </div>

        {/* メールアドレス */}
        <div className="with-note-container">
          <label htmlFor="email">
            <span>Eメール</span>
            <span className="note color-green">※メールお申し込みの場合は必須になります。</span>
            {emailErrorMsg && (
              <div className="error-msg color-green">{emailErrorMsg}</div>
            )}            
          </label>
          <input onChange={inputEmail} value={email} id="email" type="email" />
        </div>

        {/* 電話番号 */}
        <div className="with-note-container">
          <label htmlFor="tel" className="required">
            <span className="required">電話番号</span>
            <span className="note">※ハイフン区切りで入力願います。</span>
            {telErrorMsg && (
              <div className="error-msg">{telErrorMsg}</div>
            )}                    
          </label>
          <input onChange={inputTel} value={tel} id="tel" type="text" />
        </div>

        {/* 備考 */}
        <div>
          <label htmlFor="note">備考</label>
          <textarea onChange={inputNote} value={note} id="note" />
        </div>
      </div> 

      <div className="privacy-policy non-print">
        <p>必要事項をご記入のうえ、確認ボタンを押して確認後、送信してください。</p>
        <a className="privacy-policy-anchor" onClick={handlePrivacyPolicy}><span>▶️</span>&nbsp;プライバシー・ポリシー</a>
        <div className="check-box">
          <input onChange={inputPrivacyPolicy} type="checkbox" id="privacy-policy" />
          <label htmlFor="privacy-policy">プライバシーポリシーに同意する</label>
          {privacyPolicyErrorMsg && (
            <div className="error-msg">{privacyPolicyErrorMsg}</div>
          )}    
        </div>
      </div>

      <div className="send-buttons non-print">
        <div className="send-btn">
          <button className="input-print-btn" type="button" onClick={onSubmitPrint}>FAX申込書を印刷する</button>
          <div className="note">申込み用紙の印刷ができない方は、FAX申込み用紙の必要事項をご確認のうえ他の紙に記載したものでも代用可能です。</div>
        </div>
        <div className="send-btn">
          <button className="input-mail-btn" type="button" onClick={onSubmitEmail}>メール申し込みを送信</button>
          <div className="note">FAXでのお申込みができない方は、こちらをお選びください。ご記入いただいたメールアドレスにEメールが届きますので、撮影した郵便振込用紙を添付のうえご返信ください。（※メールが届かない場合、迷惑メールフィルターなどご確認ください。）</div>
        </div>
      </div>

      <button className="input-reset-btn non-print" type="button" onClick={inputReset}>リセット</button>
    </div>
    </>
  );
};

export default OrgForm;