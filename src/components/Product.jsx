import { useState } from "react";
import NameAndSetCount from "../containers/NameAndSetCount";
import TypesColorsAndSetCount from "../containers/TypesColorsAndSetCount";
import "../styles/components/Product.sass";

const Product = ({ 
        pid, image, name, types, colors, price, weight, 
        data,
        cartItems, 
        onAddCart, 
        onRemoveCart 
  }) => {

  // nameのitemごとのカウント
  const [eachCount, setEachCount] = useState(0);
  // typesとcolorsのitemごとのカウント
  const [itemCount, setItemCount] = useState(0);
  const whichSumCount = (hash) => {
    const sumCalcCount = Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0)
    return setItemCount(parseInt(sumCalcCount));
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
            setEachCount={setEachCount}
          />

          <TypesColorsAndSetCount 
            types={types}
            colors={colors} 
            setEachCount={setEachCount}
            whichSumCount={whichSumCount}
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
              onRemoveCart(data)
            }}
          >リストから削除</button>
        ) : (
          <button className="mask-btn" onClick={() => {
            onAddCart(data)
          }}
          >購入リストに追加</button>
        )}
      </div>
    </div>
  );
};

export default Product;