import { useState, useEffect } from "react";
import ItemCounter from "./ItemCounter";

const CartItem = ({ 
  cartItem: { pid, name, types, colors, price, weight },
              // => from OrderResult.js 
              // 親コンポーネントからpropsを受け取る。
              totalFeeHash,
              setTotalFeeHash,
              setTotalFee,
              totalWeightHash,
              setTotalWeightHash,
              setTotalWeight,
              removeCartPid
            }) => {

  // アイテム毎のカウント数小計
  const [count, setCount] = useState(0);

  // カート内合計金額を出すための
  // オブジェクトを生成する関数を設定。
  // 無限ループするのでuseEffect()関数で対応。
  useEffect(() => {
    setTotalFeeHash({ ...totalFeeHash, [pid]: 0});
    setTotalWeightHash({ ...totalWeightHash, [pid]: 0});
  }, []);

  // <Main>にある商品の一覧から『カートに追加』する。
  // 選択した順番にkey『商品ID』と値『初期値の0』の
  // オブジェクトが生成されることを確認。
  // 3つともカートに入れる。意図通りのオブジェクトを生成。
  // => {deau_wa: 0, mori_ya: 0, thokon_mamori_kado: 0}
  // <= to OrderResult.js 

  // 単価に個数をかける。
  // それぞれのアイテムの合計重量を算出。
  totalFeeHash[pid] = price * count;
  const totalFeeResult = Object.values(totalFeeHash).reduce((acc, fee) => acc + fee, 0);   
  
  // アイテム毎の重量合計
  const [itemSubTotalWeight, setItemSubTotalWeight] = useState(0);
  
  // カートの総重量合計
  totalWeightHash[pid] = itemSubTotalWeight;
  const totalWeightResult = Object.values(totalWeightHash).reduce((acc, weight) => acc + weight, 0);
  
  // 総合計をOrderResult.jsxへ渡す。
  useEffect(() => {
    setTotalFee(totalFeeResult);
    setTotalWeight(totalWeightResult);
  });   

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
            pid={pid}
            removeCartPid={removeCartPid}
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
              pid={pid}
              removeCartPid={removeCartPid}
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
              pid={pid}
              removeCartPid={removeCartPid}
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