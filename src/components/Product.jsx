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
  onRemoveCart,
  setEachCount
  // nameValueZero,
  // nameCount,
  // hasItem
  }) => {

  // nameの値が0であれば真を返す。
  const nameValueZero = Object.keys(name).map((key) => name[key]).shift() === 0;

  // nameのhashの値 = namenのカウント数
  const nameCount = parseInt((Object.keys(name).map((key) => name[key]).shift()));

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

  // itemごとのカウント
  // const [eachCount, setEachCount] = useState({});

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
            hasItem={hasItem}
            setEachCount={setEachCount}
            whichItemSumCalcCount={whichItemSumCalcCount}
          />

          <TypesColorsAndSetCount 
            types={types}
            colors={colors} 
            setEachCount={setEachCount}
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
              onRemoveCart(data)
              // Object.keys(name).map((key) => {
              //   name[key] = 0
              //   setEachCount({...name, [key]: 0})
              //   })
              // Object.keys(types).map((key) => {
              //   types[key] = 0
              //   setEachCount({...types, [key]: 0})
              //   })
              // Object.keys(colors).map((key) => {
              //   colors[key] = 0
              //   setEachCount({...colors, [key]: 0})
              //   })
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

