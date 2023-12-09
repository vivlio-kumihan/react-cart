import { useState } from "react";
import NameAndSetCount from "../containers/NameAndSetCount";
import TypesColorsAndSetCount from "../containers/TypesColorsAndSetCount";
import "../styles/components/Product.sass";

const Product = ({ 
  data,
  pid, image, name, types, colors, price,
  cartItems, 
  onAddCart, 
  onRemoveCart,
  nameValueZero,
  hasItem,
  handleItemId
  }) => {

  // nameのhashの値 = nameのカウント数
  const nameCount = parseInt((Object.keys(name).map((key) => name[key]).shift()));
  // name, types, colorsごとのカウントのstate
  const [eachCount, setEachCount] = useState({});
  
  // ___リファクタリング___
  // 他にもある。Appコンポーネントで統合するべき。
  // name, types, colorsのそれぞれカウント合計
  const whichItemSumCalcCount = () => {
    if ((hasItem(types) || hasItem(colors)) && nameValueZero) {
      const hash = hasItem(types) ? types : colors;
      return Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
    } else if (nameCount >= 0) {
      return Object.keys(name).reduce((acc, key) => acc + parseInt(name[key]), 0);
    }
  };
  // ___リファクタリング___

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
            eachCount={eachCount}
            setEachCount={setEachCount}
            whichItemSumCalcCount={whichItemSumCalcCount}
          />

          <TypesColorsAndSetCount 
            types={types}
            colors={colors} 
            hasItem={hasItem}
            eachCount={eachCount}
            setEachCount={setEachCount}
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
        <button 
          className="mask-btn details"
          onClick={() => handleItemId(data.pid)}
        >
          詳細を見る
        </button>
        
        {/* 追加と削除のボタン */}
        {cartItems.find((cartItem) => cartItem.pid === pid) ? (
          <button
            className="mask-btn remove-btn"
            onClick={() => {
              [name, types, colors].forEach(hash => {
                Object.keys(hash).map((key) => {
                  // ___リファクタリング___
                  // 値をリセットする時に必要だが、よく理解できていない。
                  hash[key] = 0
                  setEachCount({...hash, [key]: 0})
                  // ___リファクタリング___
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