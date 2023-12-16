import "../styles/containers/OrgForm.sass";

// 最終的には、郵便番号の入力で住所を自動補完される機能を付ける。
const OrgForm = ({ inputFormInfo, setInputFormInfo, prefectureSelected }) => {

  const inputName = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, name: e.target.value }))
  };
  const inputPostalCode = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, postalCode: e.target.value }))
  };
  // const inputPrefecture = (e) => {
  //   setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, prefecture: e.target.value }))
  // };
  const inputCity = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, city: e.target.value }))
  };
  const inputTown = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, town: e.target.value }))
  };
  const inputEmail = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, email: e.target.value }))
  };
  const inputTel = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, tel: e.target.value }))
  };
  const inputNote = (e) => {
    setInputFormInfo(inputFormInfo => ({ ...inputFormInfo, note: e.target.value }))
  };

  // const reset = () => {
  //   // どれをやっても入力がリセットされない。理由がわからない。
  //   setInputFormInfo( 
  //     { name: "",
  //       postalCode: "", 
  //       prefecture: "", 
  //       city: "" ,
  //       town: "" ,
  //       email: "" ,
  //       tel: "" ,
  //       note: "" ,
  //     });
  // };

  return (
    <>
    <div className="form">
      <div className="input-wrapper">
        <div>
          <label htmlFor="name">名前</label>
          <input onChange={inputName} placeholder={inputFormInfo.name} id="name" type="text" />
        </div>
        <div>
          <label htmlFor="postalCode">郵便番号</label>
          <input onChange={inputPostalCode} placeholder={inputFormInfo.postalCode} id="postalCode" type="text" pattern="\d{3}-?\d{4}" />
        </div>
        <div>
          <label htmlFor="prefecture">都道府県</label>
          <div>{
            prefectureSelected 
              ? prefectureSelected
              : "発送先の選択ボタンから都道府県を選対し、授与料合計を決定してください。"
          }</div>
          {/* <input onChange={inputPrefecture} placeholder={inputFormInfo.prefecture} id="prefecture" type="text" /> */}
        </div>
        <div>
          <label htmlFor="city">市町村</label>
          <input onChange={inputCity} placeholder={inputFormInfo.city} id="city" type="text" />
        </div>
        <div>
          <label htmlFor="town">町・番地</label>
          <input onChange={inputTown} placeholder={inputFormInfo.town} id="town" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={inputEmail} placeholder={inputFormInfo.email} id="email" type="email" />
        </div>
        <div>
          <label htmlFor="tel">電話番号</label>
          <input onChange={inputTel} placeholder={inputFormInfo.tel} id="tel" type="text" pattern="\d{2,4}-?\d{2,4}-?\d{3,4}" />
        </div>
        <div>
          <label htmlFor="note">備考</label>
          <textarea onChange={inputNote} placeholder={inputFormInfo.note} id="note" />
        </div>
      </div>      
    </div>
    </>
  );
};

export default OrgForm;

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
//       <div className="output">{inputFormInfo.name}</div>
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
//       <div className="output">{inputFormInfo.city}</div>
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