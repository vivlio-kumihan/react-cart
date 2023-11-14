import { useState } from "react";
import TypesColors from "../containers/TypesColors";
import "../styles/components/Product.sass";

const Product = ({ pid, image, name, types, colors, price, weight, data, setEachCount, cartItems, onAddCart, onRemoveCart }) => {
  const [itemCount, setItemCount] = useState(0);

  const sumCount = (hash) => {
    const sumCalcCount = Object.values(hash).reduce((acc, current) => acc + parseInt(current), 0)
    setItemCount(parseInt(sumCalcCount));
  };

  return (
    <div className="card" key={pid}>
      <div className="image_frame-info">
        <div className="image-frame">
          <img className="image" src={image} alt={name} />
        </div>

        <div className="item-info">
          <div className="name">{name}</div>

          <TypesColors 
            types={types}
            colors={colors} 
            setEachCount={setEachCount}
            sumCount={sumCount}
          />

          <div className="price">
            {price}
            <span>円</span>
            &nbsp;|&nbsp;
            {price * itemCount}
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

// --------------------------------------------
// import { useState } from "react";
// import "../styles/components/Product.sass";

// const Product = ({ item, cartItems, onAddCart, onRemoveCart }) => {
//   console.log(item);
//   console.log("hello");
//   // const [hoveredCard, setHoveredCard] = useState(null);
//   // const handleMouseEnter = (product) => {
//   //   setHoveredCard(item.pid);
//   // };
//   // const handleMouseLeave = () => {
//   //   setHoveredCard(null);
//   // };

//   return (
//     <>
//     <p>hello</p>


//     </>
//   );
// };

// export default Product;
