import "../styles/components/CartItem.sass";
import parse from 'html-react-parser';

const ContactForm = ({ 
  cartItems,
  totalFee,
  totalFeeHash,
  setTotalFeeHash,
  totalSendFee,
  totalWeightHash,
  setTotalWeightHash,
  setTotalWeight,
  reloadCartItems,
  nameValueZero,
  hasItem,
  }) => {

  const itemText = cartItems.map((item) => {
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
    const tmpItemTypes = Object.keys(item.types).map((key, idx) => {
      return `<dl><dt>${key}</dt><dd>${item.types[key]}</dd></dl>`
    });
    const itemTypes = Object.keys(tmpItemTypes).reduce((acc, itemText) => acc + itemText, "");
    // 色
    const tmpItemColors = Object.keys(item.colors).map((key, idx) => {
      return `<dl><dt>${key}</dt><dd>${item.colors[key]}</dd></dl>`
    });
    const itemColors = tmpItemColors.reduce((acc, itemText) => acc + itemText, "");
    // 単価
    const itemPrice = item.price;
    // 注文数
    const itemCount = whichItemSumCalcCount();
    // 商品小計
    const itemSubTotalFee = item.price * whichItemSumCalcCount();

    return (
      `<ul><li>${itemName}</li><li>${itemTypes}</li><li>${itemColors}</li><li>${itemPrice}×${itemCount}</li><li>${itemSubTotalFee}</li></ul>`
    );
  });

  return (
    <>
    {parse(`${itemText}`)}
    <p>{reloadCartItems()[0]}円</p>
    <p>{totalSendFee}円</p>
    </>


    // <ul id={pid} className="item" key={pid}>
    //   {/* 商品名 */}
    //   {
    //     Object.keys(name).map((key, idx) => (
    //       (hasItem(types) || hasItem(colors)) ?
    //         <li className="quantity-state name" key={idx}>
    //           <h3>{key}</h3>
    //         </li>
    //         :
    //         <li className="quantity-state name" key={idx}>
    //           <h3>{key}</h3>
    //           <div className="quantity-count">{name[key]}</div>
    //         </li>
    //     ))        
    //   }
    //   {/* 種類・色 */}
    //   {
    //     (hasItem(types) || hasItem(colors)) && nameValueZero &&
    //       Object.keys(switchItem[0]).map((key, idx) => (
    //         <li className="quantity-state" key={idx}>
    //           <h3>{key}</h3>
    //           <div className="quantity-count">{switchItem[0][key]}</div>
    //         </li>
    //       ))        
    //   }

    //   <li className="sub-total">
    //     <span>{price}円&nbsp;×&nbsp;{whichItemSumCalcCount()}</span>
    //     <span>&nbsp;小計:&nbsp;{price*whichItemSumCalcCount()}円</span>
    //     {/* <span>&nbsp;重量:&nbsp;{weight*whichItemSumCalcCount()}g</span> */}
    //   </li>
    // </ul>
  );
};

export default ContactForm;

// const hash = { name: "takahiro", age: 58 };
// const htmlTests = Object.keys(hash).map((keys) => {
//   return `<h1>${hash[keys]}</h1>`
// });
// console.log(htmlTests);

  // const escape = () => {
    // 合計金額  
    // console.log(reloadCartItems()[0]);
    // // 商品ごとの小計、重量小計
    // totalFeeHash[pid] = price * whichItemSumCalcCount();
    
    // totalWeightHash[pid] = weight * whichItemSumCalcCount();
    
    // useEffect(() => {
    //   setTotalFee(Object.values(totalFeeHash).reduce((acc, fee) => acc + fee, 0));
    //   setTotalWeight(Object.values(totalWeightHash).reduce((acc, wgt) => acc + wgt, 0));
    // }, [totalFeeHash, totalWeightHash]); 
  
    // const htmlTexts = cartItems.map((cartItem, idx) => {
    //   if ((hasItem(cartItem.types) || hasItem(cartItem.colors)) && nameValueZero) {
    //     console.log(cartItem.types)
    //     // console.log(whichItemSumCalcCount())
    //     // whichItemSumCalcCount(cartItem.types) > 0
    //     //   ? console.log(cartItem.types)
    //     //   : console.log(cartItem.colors)
    //     // console.log(cartItem.name, totalFeeHash, whichItemSumCalcCount(cartItem))
    //   } else {
    //   }
    // });
    // console.log(htmlTexts); 
  
    
    // 注文内容を出力する
    // cartItemsに何が入っているか？
    // 状態に追従するか？
  // }