import { useEffect } from "react";
import "../styles/components/CartItem.sass";

const CartItem = ({ 
  cartItem: { pid, name, types, colors, price, weight, subTotalCount },
  totalFeeHash,
  setTotalFee,
  totalWeightHash, 
  setTotalWeight,
  nameValueZero,
  hasItem
  }) => {
  
  // nameのhashの値 = namenのカウント数
  const nameCount = parseInt((Object.keys(name).map((key) => name[key]).shift()));

  // // nameの値が0であれば真を返す。
  // const nameValueZero = Object.keys(name).map((key) => name[key]).shift() === 0;

  // // 対象が空配列かを検証
  // const hasItem = (hash) => Object.keys(hash).length > 0;

  // 現在がtypesかcolorsかで扱うhashを切り替える。
  const pickArr = () => {
    if (hasItem(types) && nameValueZero) {
      return [types, "types"];
    } else if (hasItem(colors) && nameValueZero) {
      return [colors, "colors"];
    }
  }; 
  const switchItem = pickArr();

  // name, types, colorsのそれぞれカウント合計
  const whichItemSumCalcCount = () => {
    if ((hasItem(types) || hasItem(colors)) && nameValueZero) {
      const hash = hasItem(types) ? types : colors;
      return Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
    } else if (nameCount >= 0) {
      return Object.keys(name).reduce((acc, key) => acc + parseInt(name[key]), 0);
    }
  };
  
  // 商品ごとの小計、重量小計
  totalFeeHash[pid] = price * whichItemSumCalcCount();
  totalWeightHash[pid] = weight * whichItemSumCalcCount();

  useEffect(() => {
    setTotalFee(Object.values(totalFeeHash).reduce((acc, fee) => acc + fee, 0));
    setTotalWeight(Object.values(totalWeightHash).reduce((acc, wgt) => acc + wgt, 0));
  });

  return (
    <ul id={pid} className="item" key={pid}>
      {/* 商品名 */}
      {
        Object.keys(name).map((key, idx) => (
          (hasItem(types) || hasItem(colors)) ?
            <li className="quantity-state name" key={idx}>
              <h3>{key}</h3>
            </li>
            :
            <li className="quantity-state name" key={idx}>
              <h3>{key}</h3>
              <div className="quantity-count">{name[key]}</div>
            </li>
        ))        
      }
      {/* 種類・色 */}
      {
        (hasItem(types) || hasItem(colors)) && nameValueZero &&
          Object.keys(switchItem[0]).map((key, idx) => (
            <li className="quantity-state" key={idx}>
              <h3>{key}</h3>
              <div className="quantity-count">{switchItem[0][key]}</div>
            </li>
          ))        
      }

      <li className="sub-total">
        <span>{price}円&nbsp;×&nbsp;{whichItemSumCalcCount()}</span>
        <span>&nbsp;小計:&nbsp;{price*whichItemSumCalcCount()}円</span>
        {/* <span>&nbsp;重量:&nbsp;{weight*whichItemSumCalcCount()}g</span> */}
      </li>
    </ul>
  );
};

export default CartItem;