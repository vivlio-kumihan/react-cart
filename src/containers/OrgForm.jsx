import "../styles/containers/OrgForm.sass";

// 最終的には、郵便番号の入力で住所を自動補完される機能を付ける。
const OrgForm = ({ inputFormInfo, setInputFormInfo, prefectureSelected }) => {
  const inputName = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, senderName: e.target.value }));
  };
  const inputPostalCode = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, postalCode: e.target.value }));
  };
  // const inputPrefecture = (e) => {
  //   setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, prefecture: e.target.value }));
  // };
  const inputAddress = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, address: e.target.value }));
  };
  const inputEmail = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, email: e.target.value }));
  };
  const inputTel = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, tel: e.target.value }));
  };
  const inputNote = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, note: e.target.value }));
  };

  const reset = () => {
    setInputFormInfo({
      senderName: "",
      postalCode: "",
      address: "",
      email: "",
      tel: "",
      note: "",
    });
  };
  
  return (
    <>
    <div className="form">
      <div className="input-wrapper">
        <div className="note">※印は必須事項になります。</div>
        <div>
          <label htmlFor="senderName" className="required"><span>お名前</span></label>
          <input onChange={inputName} placeholder={inputFormInfo.senderName} value={inputFormInfo.senderName} id="senderName" type="text" />
        </div>
        <div>
          <label htmlFor="postalCode" className="required"><span>郵便番号</span></label>
          <input onChange={inputPostalCode} placeholder={inputFormInfo.postalCode} value={inputFormInfo.postalCode} id="postalCode" type="text" pattern="\d{3}-?\d{4}" />
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
          <input onChange={inputAddress} placeholder={inputFormInfo.address} value={inputFormInfo.address} id="address" type="text" />
        </div>
        <div className="email-container">
          <label htmlFor="email">
            <span>メールアドレス</span>
            <span className="note">※メールお申し込みの場合は必須になります。</span>
          </label>
          <input onChange={inputEmail} placeholder={inputFormInfo.email} value={inputFormInfo.email} id="email" type="email" />
        </div>
        <div>
          <label htmlFor="tel" className="required"><span>電話番号</span></label>
          <input onChange={inputTel} placeholder={inputFormInfo.tel} value={inputFormInfo.tel} id="tel" type="text" pattern="\d{2,4}-?\d{2,4}-?\d{3,4}" />
        </div>
        <div>
          <label htmlFor="note">備考</label>
          <textarea onChange={inputNote} placeholder={inputFormInfo.note} value={inputFormInfo.note} id="note" />
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

// setInputFormInfo( 
//   { name: "",
//     postalCode: "", 
//     prefecture: "", 
//     address: "" ,
//     email: "" ,
//     tel: "" ,
//     note: "" ,
//   });

// // textarea用
// const inputContents = (e) => {
//   setInput(input => ({ ...input, contents: e.target.value }))
// };

// <div>
//   <label htmlFor="contents">お問い合せ内容</label>
//   <textarea name="" id="contents" onChange={inputContents} placeholder={input.contents}></textarea>
// </div>

// <div className="output-wrapper">
//   <ul className="inputed-contents">
//     <li>
//       <label htmlFor="name">【お名前】</label>
//       <div className="output">{inputFormInfo.senderName}</div>
//     </li>
//     <li>
//       <label htmlFor="name">【郵便番号】</label>
//       <div className="output">{inputFormInfo.postalCode}</div>
//     </li>
//     <li>
//       <label htmlFor="email">【都道府県】</label>
//       <div className="output">{inputFormInfo.prefecture}</div>
//     </li>
//     <li>
//       <label htmlFor="contents">【市町村】</label>
//       <div className="output">{inputFormInfo.address}</div>
//     </li>
//     <li>
//       <label htmlFor="name">【町・番地】</label>
//       <div className="output">{inputFormInfo.town}</div>
//     </li>
//     <li>
//       <label htmlFor="name">【Email】</label>
//       <div className="output">{inputFormInfo.email}</div>
//     </li>
//     <li>
//       <label htmlFor="email">【電話番号】</label>
//       <div className="output">{inputFormInfo.tel}</div>
//     </li>
//     <li>
//       <label htmlFor="email">【備考】</label>
//       <div className="output">{inputFormInfo.note}</div>
//     </li>
//   </ul>
// 
//   <ul className="button-wrap">
//     <li>
//       <button type="button">送信</button>
//     </li>
//     <li>
//       <button type="button" onClick={reset}>リセット</button>
//     </li>
//   </ul>
// </div>