import { useState } from 'react';
import "../styles/components/OrderForm.sass";

// 最終的には、郵便番号の入力で住所を自動補完される機能を付ける。
const OrderForm = () => {
  const inputVal = {
      name: "白峰太郎", 
      postalCode: "0000000", 
      prefecture: "", 
      city: "",
      town: "",
      email: "shiramine@taro.com", 
      tel: "000-000-0000", 
  };
  const [input, setInput] = useState(inputVal);
  const inputName = (e) => {
    setInput(input => ({ ...input, name: e.target.value }))
  };
  const inputPostalCode = (e) => {
    setInput(input => ({ ...input, postalCode: e.target.value }))
  };
  const inputPrefecture = (e) => {
    setInput(input => ({ ...input, prefecture: e.target.value }))
  };
  const inputCity = (e) => {
    setInput(input => ({ ...input, city: e.target.value }))
  };
  const inputTown = (e) => {
    setInput(input => ({ ...input, town: e.target.value }))
  };
  const inputEmail = (e) => {
    setInput(input => ({ ...input, email: e.target.value }))
  };
  const inputTel = (e) => {
    setInput(input => ({ ...input, tel: e.target.value }))
  };

  const reset = () => {
    // どれをやっても入力がリセットされない。理由がわからない。
    setInput( 
      { name: "",
        postalCode: "", 
        prefecture: "", 
        city: "" ,
        town: "" ,
        email: "" ,
        tel: "" ,
      });
  };

  return (
    <>
    <div className="form">
      <div className="input-wrapper">
        <div>
          <label htmlFor="name">名前</label>
          <input onChange={inputName} placeholder={input.name} id="name" type="text" />
        </div>
        <div>
          <label htmlFor="age">郵便番号</label>
          <input onChange={inputPostalCode} placeholder={input.postalCode} id="postalCode" type="text" pattern="\d{3}-?\d{4}" />
        </div>
        <div>
          <label htmlFor="age">都道府県</label>
          <input onChange={inputPrefecture} placeholder={input.prefecture} id="prefecture" type="text" />
        </div>
        <div>
          <label htmlFor="age">市町村</label>
          <input onChange={inputCity} placeholder={input.city} id="city" type="text" />
        </div>
        <div>
          <label htmlFor="age">町・番地</label>
          <input onChange={inputTown} placeholder={input.town} id="town" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={inputEmail} placeholder={input.email} id="email" type="email" />
        </div>
        <div>
          <label htmlFor="age">電話番号</label>
          <input onChange={inputTel} placeholder={input.tel} id="tel" type="text" pattern="\d{2,4}-?\d{2,4}-?\d{3,4}" />
        </div>
      </div>

      <div className="output-wrapper">
        <ul className="inputed-contents">
          <li>
            <label htmlFor="name">【お名前】</label>
            <div className="output">{input.name}</div>
          </li>
          <li>
            <label htmlFor="name">【郵便番号】</label>
            <div className="output">{input.postalCode}</div>
          </li>
          <li>
            <label htmlFor="email">【都道府県】</label>
            <div className="output">{input.prefecture}</div>
          </li>
          <li>
            <label htmlFor="contents">【市町村】</label>
            <div className="output">{input.city}</div>
          </li>
          <li>
            <label htmlFor="name">【町・番地】</label>
            <div className="output">{input.town}</div>
          </li>
          <li>
            <label htmlFor="name">【Email】</label>
            <div className="output">{input.email}</div>
          </li>
          <li>
            <label htmlFor="email">【電話番号】</label>
            <div className="output">{input.tel}</div>
          </li>
        </ul>

        <ul className="button-wrap">
          <li>
            <button type="button">送信</button>
          </li>
          <li>
            <button type="button" onClick={reset}>リセット</button>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default OrderForm;

// // textarea用
// const inputContents = (e) => {
//   setInput(input => ({ ...input, contents: e.target.value }))
// };

// <div>
//   <label htmlFor="contents">お問い合せ内容</label>
//   <textarea name="" id="contents" onChange={inputContents} placeholder={input.contents}></textarea>
// </div>