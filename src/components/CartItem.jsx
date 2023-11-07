import { useState } from "react";
import ItemCounter from "./ItemCounter";
// 新規で作ったコンポーネント名は適当なので適切な名称に変更してください
const CartItem = ({ cartItem: { pid, types, colors, name, price } }) => {
  const [count, setCount] = useState(0);

  // 対象が空配列じゃないか検証
  const hasItems = (arr) => arr.length > 0;

  return (
    <ul className="item" key={pid}>
      <div className="quantity-state name" key={name}>
        {name}
        {/* {count}
        {console.log(hasItems(types))}
        {console.log(hasItems(colors))} */}
        <>
          {/* {
            {/* 問題点　訂正中 */}
            if (hasItems(types) && hasItems(colors)) {
            {/* if (hasItems(types) && hasItems(colors)) { */}
              {count}
            } else {
              <ItemCounter count={count} setCount={setCount} />
            }
          } */}

        </>
      </div>
      {hasItems(types) &&
        types.map((type, idx) => (
          <li className="quantity-state" key={idx}>
            <h3>{type}</h3>
            <ItemCounter count={count} setCount={setCount} />
          </li>
        ))}
      {hasItems(colors) &&
        colors.map((color, idx) => (
          <li className="quantity-state" key={idx}>
            <h3>{color}</h3>
            <ItemCounter count={count} setCount={setCount} />
          </li>
        ))}
      <li className="sub-total">
        <span>{Math.round(price)}円&nbsp;×&nbsp;{count}</span>
        <span>&nbsp;小計:&nbsp;{Math.round(price) * count}円</span>
      </li>
    </ul>
  );
};

export default CartItem;
