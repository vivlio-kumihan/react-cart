import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/components/CartItem.sass";
import parse from 'html-react-parser';

const MailForm = ({ 
  cartItems,
  reloadCartItems,
  totalSendFee,
  inputFormInfo,
  nameValueZero,
  hasItem,
  }) => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rnt4ier', 'template_dq4zyxs', form.current, 'qFuS96-H2M1rD2BgC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const itemContents = cartItems.map((item) => {
    // name, types, colorsそれぞれの注文数を出す関数
    const whichItemSumCalcCount = () => {
      if ((hasItem(item.types) || hasItem(item.colors)) && nameValueZero) {
        const hash = hasItem(item.types) ? item.types : item.colors;
        return Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
      } else {
        return parseInt(Object.values(item.name)[0]);
      }
    }; 
    // 商品名
    const itemName = Object.keys(item.name)[0];
    // 種類
    const itemTypes = item.types;
    // const tmpItemTypes = Object.keys(item.types).map((key) => {
    //   return `<dl><dt>${key}</dt><dd>${item.types[key]}</dd></dl>`
    // });
    // const itemTypes = tmpItemTypes.reduce((acc, itemText) => acc + itemText, "");
    // 色
    const itemColors =item.colors;
    // const tmpItemColors = Object.keys(item.colors).map((key) => {
    //   return `<dl><dt>${key}</dt><dd>${item.colors[key]}</dd></dl>`
    // });
    // const itemColors = tmpItemColors.reduce((acc, itemText) => acc + itemText, "");
    // 単価
    const itemPrice = item.price;
    // 注文数
    const itemCount = whichItemSumCalcCount();
    // 商品小計
    const itemSubTotalFee = item.price * whichItemSumCalcCount();

    return [itemName, itemTypes, itemColors, itemPrice, itemCount, itemSubTotalFee];
    // return (
    //   const itemContents = [itemName, itemTypes, itemColors, itemPrice, itemCount, itemSubTotalFee];
    //   // `<ul><li>${itemName}</li><li>${itemTypes}</li><li>${itemColors}</li><li>${itemPrice}×${itemCount}</li><li>${itemSubTotalFee}</li></ul>`
    // );
  });
  // const itemContents = tmpItemContents.reduce((acc, itemText) => acc + itemText, "");
  const cartTotalFee = reloadCartItems()[0];
  const grandTotalFee = cartTotalFee + totalSendFee;
  const userName = inputFormInfo.name;
  const userEmail = inputFormInfo.email;
  const postalCode = inputFormInfo.postalCode;
  const address = inputFormInfo.prefecture + inputFormInfo.city + inputFormInfo.town;
  const tel =inputFormInfo.tel;
  const note = inputFormInfo.note && "";

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
      {itemContents.map((item, idx) => (
      <div key={idx}>
        <input type='text' name="itemName" readOnly value={`${item[0]}`} />

        {Object.keys(item[1]).map((key, idx) => (
          item[1][key]
          {/* <div key={idx}>
            <input type='text' name="itemTypeKey" readOnly value={`${key}`} />
            <input type='text' name="itemTypeValue" readOnly value={`${item[1][key]}`} />
          </div> */}
        ))}
        {Object.keys(item[2]).map((key, idx) => (
          <div key={idx}>
            <input type='text' name="itemColorKey" readOnly value={`${key}`} />
            <input type='text' name="itemColorValue" readOnly value={`${item[2][key]}`} />
          </div>
        ))}

        <input type='text' name="itemPrice" readOnly value={`${item[3]}`} />
        <input type='text' name="itemCount" readOnly value={`${item[4]}`} />
        <input type='text' name="itemSubTotalFee" readOnly value={`${item[5]}`} />
      </div>
      ))} 

      <input type="text" name="subTotalFee" readOnly value={`${reloadCartItems()[0]}円`} />
      <input type="text" name="totalSendFee" readOnly value={`${totalSendFee}円`} />
      <input type="text" name="grandTotalFee" readOnly value={`${grandTotalFee}円`} />
      <label>【申込者氏名】</label>
      <input type="text" name="userName" readOnly value={`${userName}`} />
      <label>【Email】</label>
      <input type="email" name="userEmail" readOnly value={`${userEmail}`} />
      <label>【郵便番号】</label>
      <input type="text" name="postalCode" readOnly value={`${postalCode}`} />
      <label>【住所】</label>
      <input type="text" name="address" readOnly value={`${address}`} />
      <label>【電話】</label>
      <input type="tel" name="tel" readOnly value={`${tel}`} />
      <label>【備考】</label>
      <textarea name="note" readOnly value={`${note}`} />

      <input type="submit" value="Send" />
    </form>
    </>
  );
};

export default MailForm;

// {parse(`${itemContents}`)}

          // {/* {<input type="text" name="itemName" readOnly value={`${item[0]}`} />} */}
          // {/* {<input type="text" name="itemName" readOnly value={`${item[0]}`} />}
          // {<input type="text" name="itemTypes" readOnly value={`${item[1]}円`} />}
          // {<input type="text" name="itemColors" readOnly value={`${item[2]}円`} />}
          // {<input type="text" name="itemPrice" readOnly value={`${item[3]}円`} />}
          // {<input type="text" name="itemCount" readOnly value={`${item[4]}円`} />}
          // {<input type="text" name="itemSubTotalFee" readOnly value={`${item[5]}円`} />} */}