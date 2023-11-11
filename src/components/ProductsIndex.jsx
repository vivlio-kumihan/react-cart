import { useState } from "react";
import SelectNumber from "../containers/SelectNumber";

import "../styles/components/Product.sass";

const ProductsIndex = ({ products, cartItems, onAddCart, onRemoveCart }) => {
  const [item, setItem] = useState({});

  // products.map((item) => {
  //   setItem(() => {
  //   });
  //   console.log(item.pid);
  //   console.log(item.name);
  //   console.log(item.types);
  //   console.log(item.colors);
  //   console.log(item.price);
  //   console.log(item.weight);
  // });
  

  const [selectedNumber, setSelectedNumber] = useState(0);
  const [nameCount, setNameCount] = useState(0);
  const [typesCountHash, setTypesCountHash] = useState({});
  const [colorsCountHash, colorsTypeCountHash] = useState({});

  // console.log(products);
  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <div
          className="card"
          key={product.pid}
        >
          <div className="frame">
            <img className="image" src={product.image} alt={product.name} />
          </div>
          <div className="item-info">
            <div className="name">{product.name}</div>
            {Object.keys(product.types).length !== 0 &&
              <ul className="type" key={product.pid}>
                {Object.keys(product.types).map((type, idx) => (
                  <div key={idx}>
                  <li>
                    <label htmlFor={type} type={type}>{type}</label>
                    <SelectNumber
                      types={product.types}
                      typesCountHash={typesCountHash}
                      selectNumber={selectedNumber}
                      setSelectNumber={setSelectedNumber}
                    />
                  </li>
                  </div>
                ))}
              </ul>
            }
            {Object.keys(product.colors).length !== 0 &&
              <ul className="color" key={product.pid}>
                {Object.keys(product.colors).map((color, idx) => (
                  <li key={idx}>
                    <label htmlFor={color} type={color}>{color}</label>
                      <input className="select-number" type="number" id={color} name={color} />
                  </li>                  
                ))}
              </ul>
            }

            <div className="price">
              {product.price}
              <span>円／個</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsIndex;


// ---------------------------------- later revive ----------------------------------------
// ---------------------------------- add and remove carte --------------------------------
// <div className={`mask ${hoveredCard === product.pid && "appear"}`}>
//   <button className="mask-btn details">詳細を見る</button>
//   {cartItems.find((cartItem) => cartItem.pid === product.pid) ? (
//     <button
//       className="mask-btn remove-btn"
//       onClick={() => onRemoveCart(product)}
//     >
//       カートから削除
//     </button>
//   ) : (
//     <button className="mask-btn" onClick={() => onAddCart(product)}>
//       カートに追加
//     </button>
//   )}
// </div>