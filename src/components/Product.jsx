import { useState } from "react";
import NameAndSetCount from "../containers/NameAndSetCount";
import TypesColorsAndSetCount from "../containers/TypesColorsAndSetCount";
import "../styles/components/Product.sass";

const Product = ({ 
  data,
  pid, image, name, types, colors, price, weight, 
  cartItems, 
  setCartItems,
  onAddCart, 
  onRemoveCart 
  }) => {

  // nameのhashの値 = namenのカウント数
  const nameCount = (Object.keys(name).map((key) => name[key]).shift());

  // nameの値が0であれば真を返す。
  const nameValueZero = Object.keys(name).map((key) => name[key]).shift() === 0;

  // 対象が空配列かを検証
  const hasItem = (hash) => Object.keys(hash).length > 0;

  // 現在がtypesかcolorsかで扱うhashを切り替える。
  const pickHash = () => {
    if (hasItem(types) && nameValueZero) {
      return types;
    } else if (hasItem(colors) && nameValueZero) {
      return colors;
    }
  }; 
  // そのための関数の実行を変数に格納
  const switchHash = pickHash();

  // -------- これは削除予定 -------- 
    // nameのitemごとのカウント
  const [eachCount, setEachCount] = useState(0);
  // typesとcolorsのitemごとのカウント
  const [itemCount, setItemCount] = useState(0);
  // -------- これは削除予定 -------- 

  const [itemTotalCount, setItemTotalCount] = useState(0);
  
  // name, types, colorsのそれぞれカウント合計
  const whichItemSumCalcCount = (hash) => {
    if (nameCount > 0) {
      return nameCount;
    } else if ((hasItem(types) || hasItem(colors)) && nameValueZero) {
      const hash = hasItem(types) ? types : colors
      return Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
    }
  };

  // -------- これは削除予定 -------- 
  const whichSumCount = (hash) => {
    const sumCalcCount = Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0)
    return setItemCount(parseInt(sumCalcCount));
  };
  // -------- これは削除予定 -------- 
    
  return (
    <div className="card" key={pid}>
      <div className="image_frame-info">
        <div className="image-frame">
          <img className="image" src={image} alt={name} />
        </div>

        <div className="item-info">
          
          <NameAndSetCount 
            name={name}
            types={types}
            colors={colors} 
            hasItem={hasItem}
            whichItemSumCalcCount={whichItemSumCalcCount}
          />

          <TypesColorsAndSetCount 
            types={types}
            colors={colors} 
            setEachCount={setEachCount}

            // 削除予定---
            whichSumCount={whichSumCount}
            // 削除予定---

            nameCount={nameCount}
            nameValueZero={nameValueZero}
            hasItem={hasItem}
            pickHash={pickHash}
            switchHash={switchHash}
            whichItemSumCalcCount={whichItemSumCalcCount}            
          />

          <div className="price">
            {price}
            <span>円</span>
            &nbsp;|&nbsp;
            <span>小計</span>
            {
              Object.keys(types).length || Object.keys(colors).length > 0
                ? price * itemCount
                : price * eachCount
            }            
            <span>円</span>
          </div>
        </div>
      </div>
      
      <div className="btn-wrapper">
        {/* 詳細へのボタン */}
        <button className="mask-btn details">詳細を見る</button>
        {/* 追加と削除のボタン */}
        {cartItems.find((cartItem) => cartItem.pid === pid) ? (
          <button
            className="mask-btn remove-btn"
            onClick={() => {
              Object.keys(types).map((key) => {
                types[key] = 0
                setEachCount({...types, [key]: 0})
                })
            }}
          >リストから削除</button>
        ) : (
          <button className="mask-btn" onClick={() => {
            onAddCart(data)
          }}
          >リストに追加</button>
        )}
      </div>
    </div>
  );
};

export default Product;