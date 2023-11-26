import { useState, useEffect } from "react";
import NameAndSetCount from "../containers/NameAndSetCount";
import TypesColorsAndSetCount from "../containers/TypesColorsAndSetCount";
import "../styles/components/Product.sass";

const Product = ({ 
  data,
  pid, image, name, types, colors, price, subTotalCount,
  cartItems, 
  onAddCart, 
  onRemoveCart,
  nameValueZero,
  hasItem,
  }) => {

  // nameのhashの値 = namenのカウント数
  const nameCount = parseInt((Object.keys(name).map((key) => name[key]).shift()));

  // // nameの値が0であれば真を返す。
  // const nameValueZero = () => {
  //   return Object.keys(name).map((key) => name[key]).shift() === 0 
  // };

  // // 対象が空配列かを検証
  // const hasItem = (hash) => Object.keys(hash).length > 0;

  // name, types, colorsごとのカウント
  const [eachCount, setEachCount] = useState({});

  // name, types, colorsのそれぞれカウント合計
  const whichItemSumCalcCount = () => {
    if ((hasItem(types) || hasItem(colors)) && nameValueZero) {
      const hash = hasItem(types) ? types : colors;
      return Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
    } else if (nameCount >= 0) {
      return Object.keys(name).reduce((acc, key) => acc + parseInt(name[key]), 0);
    }
  };

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
            subTotalCount={subTotalCount}
            hasItem={hasItem}
            eachCount={eachCount}
            setEachCount={setEachCount}
            whichItemSumCalcCount={whichItemSumCalcCount}
            nameValueZero={nameValueZero}
          />

          <TypesColorsAndSetCount 
            name={name}
            types={types}
            colors={colors} 
            hasItem={hasItem}
            subTotalCount={subTotalCount}        
            eachCount={eachCount}
            setEachCount={setEachCount}
            whichItemSumCalcCount={whichItemSumCalcCount}  
            nameValueZero={nameValueZero}
          />

          <div className="price">
            {price}
            <span>円</span>
            &nbsp;|&nbsp;
            <span>小計</span>
            {price * whichItemSumCalcCount()}
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
              [name, types, colors].forEach(hash => {
                Object.keys(hash).map((key) => {
                  // リスト内の値をリセットする場合に必要
                  hash[key] = 0
                  // Mainの商品一覧内の値をリセットするのに必要
                  setEachCount({...hash, [key]: 0})
                })
              })
              onRemoveCart(data)
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