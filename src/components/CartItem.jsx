import { useState } from "react";
import ItemCounter from "./ItemCounter";
// 新規で作ったコンポーネント名は適当なので適切な名称に変更してください
const CartItem = ({ cartItem: { pid, name, types, colors, price, weight } }) => {

  const [count, setCount] = useState(0);

  const [itemWeight, setItemWeight] = useState(weight);

  const [typeCount, setTypeCount] = useState({});
  
  const hash = {};
  types.map((type, idx) => {
    hash[type] = 0;
  });
  console.log(hash);
  // setTypeCount(...typeCount, hash);
  // setTypeCount(hash);


  // setTypeCount({ ...typeCount, hash})
  // console.log(typeCount);
  
  // 対象が空配列かを検証
  const hasItems = (arr) => arr.length > 0;

  // false または、false => false このfalseに
  // false または、 true => trueの式を実行させる。
  // true かつ、 true => 右辺の式を実行させる。

  return (
    <ul className="item" key={pid}>
      <div className="quantity-state name" key={name}>
        {name}
        {(hasItems(types) || hasItems(colors)) ||
          <ItemCounter 
            count={count} 
            setCount={setCount}
            weight={weight}
            setItemWeight={setItemWeight}
          />
        }
        
      </div>

      {hasItems(types) &&
        types.map((type, idx) => (
          <li className="quantity-state" key={idx}>
            <h3>{type}</h3>
            <ItemCounter 
              count={count} 
              setCount={setCount}
              weight={weight}
              setItemWeight={setItemWeight}              
            />              
          </li>
        ))}
      {hasItems(colors) &&
        colors.map((color, idx) => (
          <li className="quantity-state" key={idx}>
            <h3>{color}</h3>
            <ItemCounter 
              count={count} 
              setCount={setCount}
              weight={weight}
              setItemWeight={setItemWeight}              
            />            
          </li>
        ))}
      <li className="sub-total">
        <span>{Math.round(price)}円&nbsp;×&nbsp;{count}</span>
        <span>&nbsp;小計:&nbsp;{Math.round(price) * count}円</span>
        <span>&nbsp;重量:&nbsp;{weight * count}g</span>
      </li>
    </ul>
  );
};

export default CartItem;
