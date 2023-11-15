import { useEffect } from "react";
import ItemCounter from "../containers/ItemCounter";

const CartItem = ({ 
  cartItem: { pid, name, types, colors, price, weight },
  // totalFeeHash, setTotalFeeHash,
  // setTotalFee
  // totalWeightHash, setTotalWeightHash
  }) => {

  // 対象が空配列かを検証
  const hasItem = (hash) => Object.keys(hash).length > 0;
  // nameの値が0であれば真を返す。
  const nameValueZero = Object.keys(name).map((key) => name[key]).shift() === 0;
  // 現在がtypesかcolorsかで扱うhashを切り替える。
  const packTypesColors = () => {
    if (hasItem(types) && nameValueZero) {
      return types;
    } else if (hasItem(colors) && nameValueZero) {
      return colors;
    }
  }; 
  const itemHash = packTypesColors();

  const calcCountHashVal = (...arr) => {
    // console.log(arr);
    // if (hasItem(types) && hasItem(colors)) {
    //   return (Object.keys(hash).map((key) => hash[key])).shift();
    // } else if ((hasItem(types) || hasItem(colors)) && nameValueZero) {
    //   return Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
    // }
  };
  
  calcCountHashVal(name, types, colors);

  // const count = calcCountHashVal(name, types, colors);
  // console.log(count);
  
  const nameTotalCount = (hash) => {
    return Object.keys(hash).map((key) => hash[key])
  };

  const itemTotalCount = (hash) => {
    return Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
  };

  // useEffect(() => {
  //   setTotalFeeHash({ ...totalFeeHash, [pid]: 0});
  //   // setTotalWeightHash({ ...totalWeightHash, [pid]: 0});
  // }, []);

  // totalFeeHash[pid] = price * count;
  // const totalFeeResult = Object.values(totalFeeHash).reduce((acc, fee) => acc + fee, 0);
  // useEffect(() => {
  //   setTotalFee(totalFeeResult);
  // })
  

  // console.log(hasItem(types));
  // const hasItem = (hash) => Object.keys(hash).length > 0;
  // console.log(hasItem(types));

  return (
    <ul className="item" key={pid}>
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
          Object.keys(itemHash).map((key, idx) => (
            <li className="quantity-state" key={idx}>
              <h3>{key}</h3>
              <div className="quantity-count">{itemHash[key]}</div>
            </li>
          ))        
      }

      <li className="sub-total">
        { nameTotalCount(name) > 0 && 
          <span>{price}円&nbsp;×&nbsp;{nameTotalCount(name)}</span> }
        { nameTotalCount(name) > 0 && 
          <span>&nbsp;小計:&nbsp;{price*nameTotalCount(name)}円</span> }
        { nameTotalCount(name) > 0 && 
          <span>&nbsp;重量:&nbsp;{weight*nameTotalCount(name)}g</span> }

        { itemTotalCount(types) > 0 && 
          <span>{price}円&nbsp;×&nbsp;{itemTotalCount(types)}</span> }
        { itemTotalCount(types) > 0 && 
          <span>&nbsp;小計:&nbsp;{price*itemTotalCount(types)}円</span> }
        { itemTotalCount(types) > 0 && 
          <span>&nbsp;重量:&nbsp;{weight*itemTotalCount(types)}g</span> }

        { itemTotalCount(colors) > 0 && 
          <span>{price}円&nbsp;×&nbsp;{itemTotalCount(colors)}</span> }
        { itemTotalCount(colors) > 0 && 
          <span>&nbsp;小計:&nbsp;{price*itemTotalCount(colors)}円</span> }
        { itemTotalCount(colors) > 0 && 
          <span>&nbsp;重量:&nbsp;{weight*itemTotalCount(colors)}g</span> }
      </li>
    </ul>
  );
};

export default CartItem;