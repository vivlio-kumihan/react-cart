import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/components/CartItem.sass";
import "../styles/containers/MailForm.sass";

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
    const tmpItemTypes = Object.keys(item.types).map((key) => {
      return `${key}: ${item.types[key]}`
    });
    const itemTypes = tmpItemTypes.reduce((acc, itemText) => acc + "\n" + itemText, "");
    // 色
    const tmpItemColors = Object.keys(item.colors).map((key) => {
      return `${key}: ${item.colors[key]}`
    });
    const itemColors = tmpItemColors.reduce((acc, itemText) => acc + "\n" + itemText, "");
    // 単価
    const itemPrice = `${item.price}円`;
    // 注文数
    const itemCount = whichItemSumCalcCount();
    // 商品小計
    const itemSubTotalFee = `小計: ${item.price * whichItemSumCalcCount()}円`;
    return (
      hasItem(item.types)
        ? `${itemName}${itemTypes}\n${itemPrice}×${itemCount}\n${itemSubTotalFee}`
        : hasItem(item.colors)
          ? `${itemName}${itemColors}\n${itemPrice}×${itemCount}\n${itemSubTotalFee}`
          : `${itemName}\n${itemPrice}×${itemCount}\n${itemSubTotalFee}`
    );
  });

  const totalItemContents = itemContents.join("\n\n");
  const cartTotalFee = reloadCartItems()[0];
  const grandTotalFee = cartTotalFee + totalSendFee;
  const userName = inputFormInfo.name;
  const userEmail = inputFormInfo.email;
  const postalCode = inputFormInfo.postalCode;
  const address = inputFormInfo.prefecture + inputFormInfo.city + inputFormInfo.town;
  const tel =inputFormInfo.tel;
  const note = inputFormInfo.note;

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
      <textarea name="totalItemContents" readOnly value={`${totalItemContents}`} />
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
      <button className='to-send-form' type="submit" value="メールで送信">メールで送信</button>
    </form>
    </>
  );
};

export default MailForm;