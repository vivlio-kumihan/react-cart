import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/components/CartItem.sass";
import "../styles/components/OrderResult.sass";
import "../styles/containers/MailForm.sass";

const MailForm = ({ 
  cartItems,
  reloadCartItems,
  totalSendFee,
  nameValueZero,
  hasItem,
  senderName,
  postalCode,
  address,
  email,
  tel,
  note,
  prefectureSelected
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
    
    // リファクタリング　個数0の行をなくしたい。
    // // 種類
    // const tmpItemTypes = Object.keys(item.types).reduce((arr, key) => {
    //   if (item.types[key] !== 0) {
    //     arr.push(`${key}: ${item.types[key]}`);
    //   }
    //   return arr;
    // }, []);
    // const itemTypes = tmpItemTypes.reduce((acc, itemText) => acc + "\n" + itemText, "");
    // // 色
    // const tmpItemColors = Object.keys(item.colors).reduce((arr, key) => {
    //   if (item.colors[key] !== 0) {
    //     arr.push(`${key}: ${item.colors[key]}`);
    //   }
    //   return arr;
    // }, []);
    // const itemColors = tmpItemColors.reduce((acc, itemText) => acc + "\n" + itemText, "");    
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
  const userName = senderName;
  const userEmail = email;
  const userPostalCode = postalCode;
  const userAddress = prefectureSelected + address;
  const userTel = tel;
  const userNote = note;
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
      <input type="text" name="userPostalCode" readOnly value={`${userPostalCode}`} />
      <label>【住所】</label>
      <input type="text" name="userAddress" readOnly value={`${userAddress}`} />
      <label>【電話】</label>
      <input type="tel" name="tel" readOnly value={`${tel}`} />
      <label>【備考】</label>
      <textarea name="note" readOnly value={`${note}`} />
      <button className='to-send-form' type="submit" value="メール申し込みを送信">メール申し込みを送信</button>
      <div className="note">FAXでのお申込みができない方は、こちらをお選びください。ご記入いただいたメールアドレスにEメールが届きますので、撮影した郵便振込用紙を添付のうえご返信ください。<span>（※メールが届かない場合、迷惑メールフィルターなどご確認ください。）</span></div>
    </form>
    </>
  );
};

export default MailForm;