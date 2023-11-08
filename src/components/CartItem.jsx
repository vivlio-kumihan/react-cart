import { useState } from "react";
import ItemCounter from "./ItemCounter";

// 新規で作ったコンポーネント名は適当なので適切な名称に変更してください
// const CartItem = ({ cartItem: { pid, name, types, colors, price, weight }, totalWeight, setTotalWeight }) => {
const CartItem = ({ cartItem: { pid, name, types, colors, price, weight } }) => {

  // アイテム毎のカウント数小計
  const [count, setCount] = useState(0);
  // アイテムの重量合計
  const [itemSubTotalWeight, setItemSubTotalWeight] = useState([]);
  // カートの重量合計
  // setTotalWeight(totalWeight + itemSubTotalWeight);
  // const totalWeight = price * count + totalWeight;
  // mapで展開できるように下準備
  const typesObj = Object.keys(types);
  const colorsObj = Object.keys(colors);

  // 対象が空配列かを検証
  const hasItems = (arr) => arr.length > 0;
  // false または、false => false このfalseに
  // false または、 true => trueの式を実行させる。
  // true かつ、 true => 右辺の式を実行させる。

  return (
    <ul className="item" key={pid}>
      <div className="quantity-state name" key={name}>
        {name}
        {(hasItems(typesObj) || hasItems(colorsObj)) ||
          <ItemCounter 
            count={count} 
            setCount={setCount}
            weight={weight}
            setItemSubTotalWeight={setItemSubTotalWeight}              
          />
        }
      </div>

      {hasItems(typesObj) &&
        typesObj.map((type, idx) => (
          <li className="quantity-state" key={idx}>
            <h3>{type}</h3>
            <ItemCounter 
              count={count} 
              setCount={setCount}
              weight={weight}
              setItemSubTotalWeight={setItemSubTotalWeight}              
            />              
          </li>
        ))}

      {hasItems(colorsObj) &&
        colorsObj.map((color, idx) => (
          <li className="quantity-state" key={idx}>
            <h3>{color}</h3>
            <ItemCounter 
              count={count} 
              setCount={setCount}
              weight={weight}
              setItemSubTotalWeight={setItemSubTotalWeight}               
            />            
          </li>
        ))}
      <li className="sub-total">
        <span>{price}円&nbsp;×&nbsp;{count}</span>
        <span>&nbsp;小計:&nbsp;{price*count}円</span>
        <span>&nbsp;重量:&nbsp;{itemSubTotalWeight}g</span>
      </li>
    </ul>
  );
};

export default CartItem;