nameTotalCount(name)
itemTotalCount(types)
itemTotalCount(colors)




// {
//   Object.keys(types).length && Object.keys(colors).length === 0
//     ? price * itemCount : price * eachCount
// }



import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import SendFee from "../containers/SendFee";

const OrderResult = ({ toggle, dataList, cartItems }) => {
  // カートに商品が入っているか否か条件分岐で使う。
  const isEmpty = (arr) => arr.length < 1;
  // カート内で注文する商品の合計金額を出すためのstateを設定する。
  const [totalFeeHash, setTotalFeeHash] = useState({});
  // カート内で注文する商品の合計金額
  const [totalFee, setTotalFee] = useState(0);
  // カートの総重量合計のstateを生成させる。
  const [totalWeightHash, setTotalWeightHash] = useState({});
  // カート内で注文する商品の合計重量
  const [totalWeight, setTotalWeight] = useState(0);
  // 送料
  const [totalSendFee, setTotalSendFee] = useState(0);
  // 総合計　
  const [grandTotalFee, setGrandTotalFee] = useState(0);
  // stateを設定しようとすると無限ループになったのでuseEffectで対応。多数出てくる。意味分かってない。
  useEffect(() => {
    setGrandTotalFee(totalFee * 1.1 + totalSendFee);
  });

  // アイテム毎の重量合計
  const [itemTotalWeight, setItemTotalWeight] = useState(0);

  return (
    <div className={`cart-wrapper ${toggle && "active"}`}>
      {isEmpty(cartItems) && (
        <div className="default-msg">登録された商品はありません。</div>
      )}

      {cartItems.map((cartItem, idx) => (
        <div className={idx} key={idx}>
          <CartItem
            key={idx} 
            cartItem={cartItem} 
            setItemTotalWeigh={setItemTotalWeight}
            // propsで子コンポーネントに渡す。
            // to CartItem.js => 
            totalFeeHash={totalFeeHash}
            setTotalFeeHash={setTotalFeeHash}
            totalWeightHash={totalWeightHash}
            totalFee={totalFee}
            setTotalFee={setTotalFee}
            setTotalWeightHash={setTotalWeightHash}
            totalWeight={totalWeight}
            setTotalWeight={setTotalWeight}
          />
        </div>
      ))}

      <ul className="calc-amount">
        <li>商品小計<span>{totalFee}</span>円</li>
        <li>消費税<span>{Math.round(totalFee * 0.1)}</span>円</li>
        <li>
          <SendFee 
            totalWeight={totalWeight} 
            totalSendFee={totalSendFee}
            setTotalSendFee={setTotalSendFee}
          />
        </li>
        <li>カートの重量合計<span>{totalWeight}</span>g</li>
        <li className="total-fee">合計<span>{isNaN(grandTotalFee) ? 0 : Math.round(grandTotalFee)}</span>円</li>
      </ul>
    </div>
  );
};

export default OrderResult;





<li>
  <button onClick={() => alert("Implement Checkout")}>用紙出力</button>
</li>


import { useState, useEffect } from "react";
import ItemCounter from "../containers/ItemCounter";

const CartItem = ({ 
  cartItem: { pid, name, types, colors, price, weight },
  // => from OrderResult.js 
  // 親コンポーネントからpropsを受け取る。
  setItemTotalWeight,
  totalFeeHash,
  setTotalFeeHash,
  setTotalFee,
  totalWeightHash,
  setTotalWeightHash,
  setTotalWeight,
  }) => {
  // アイテム毎のカウント数小計
  const [count, setCount] = useState(0);

  const handleItemTotalWeight = (hash) => {
    setItemTotalWeight(() => {
      return Object.keys(hash).reduce((acc, key) => acc + hash[key], 0);
    });  
  };



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
  
  // // カートの総重量合計
  // totalWeightHash[pid] = itemSubTotalWeight;
  
  // // 総合計をOrderResult.jsxへ渡す。
  // useEffect(() => {
  //   setTotalFee(totalFeeResult);
  //   setTotalWeight(totalWeightResult);
  // });   

  // 対象が空配列かを検証
  const hasItems = (hash) => Object.keys(hash).length > 0;
  // false または、false => false このfalseに
  // false または、 true => trueの式を実行させる。
  // true かつ、 true => 右辺の式を実行させる。

  return (
    <ul className="item" key={pid}>
      {/* 商品名 */}
      {
        Object.keys(name).map((key, idx) => (
          (hasItems(types) || hasItems(colors)) ?
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
      {/* 種類 */}
      {
        hasItems(types) &&
        Object.keys(types).map((key, idx) => (
          <li className="quantity-state" key={idx}>
            <h3>{key}</h3>
            <div className="quantity-count">{types[key]}</div>
          </li>
        ))        
      }
      {/* 色 */}
      {
        hasItems(colors) &&
        Object.keys(colors).map((key, idx) => (
          <li className="quantity-state" key={idx}>
            <h3>{key}</h3>
            <div className="quantity-count">{colors[key]}</div>
          </li>
        ))
      }

      <li className="sub-total">
        <span>{price}円&nbsp;×&nbsp;{count}</span>
        <span>&nbsp;小計:&nbsp;{price*count}円</span>
        <span>&nbsp;重量:&nbsp;{handleItemTotalWeight(types)}g</span>
      </li>
    </ul>
  );
};

export default CartItem;

// {hasItems(typesObj) &&
//   typesObj.map((type, idx) => (
//     <li className="quantity-state" key={idx}>
//       <h3>{type}</h3>
//       <ItemCounter 
//         count={count} 
//         setCount={setCount}
//         weight={weight}
//         setItemSubTotalWeight={setItemSubTotalWeight} 
//         pid={pid}
//       />
//     </li>
//   ))}

// {hasItems(colorsObj) &&
//   colorsObj.map((color, idx) => (
//     <li className="quantity-state" key={idx}>
//       <h3>{color}</h3>
//       <ItemCounter 
//         count={count} 
//         setCount={setCount}
//         weight={weight}
//         setItemSubTotalWeight={setItemSubTotalWeight} 
//         pid={pid}
//       />            
//     </li>
//   ))}