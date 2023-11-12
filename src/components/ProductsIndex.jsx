import { useState } from "react";
import SelectNumber from "../containers/SelectNumber";

import "../styles/components/Product.sass";

const ProductsIndex = ({ products, cartItems, onAddCart, onRemoveCart }) => {
  

  const [typesCountHash, setTypesCountHash] = useState({});


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
                  <li key={idx}>
                    <label htmlFor={type} type={type}>{type}</label>
                    <SelectNumber
                    />
                  </li>
                ))}
              </ul>
            }
            {Object.keys(product.colors).length !== 0 &&
              <ul className="color" key={product.pid}>
                {Object.keys(product.colors).map((color, idx) => (
                  <li key={idx}>
                    <label htmlFor={color} type={color}>{color}</label>
                    <SelectNumber
                      // types={product.colors}
                      // typesCountHash={colorsCountHash}
                      // selectNumber={selectedNumber}
                      // setSelectNumber={setSelectedNumber}
                    />
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

  // products.map((item) => {
  //   const itemHash = item.types;
  //   Object.keys(item.types).length !== 0 &&
  //     setTypesCountHash({ ...typesCountHash, itemHash });
  //   Object.keys(item.colors).length !== 0 &&
  //     colorsTypeCountHash(item.colors);
  // });

  // console.log(item.pid);
  // console.log(item.name);
  // console.log(item.types);
  // console.log(item.colors);
  // console.log(item.price);
  // console.log(item.weight);

                        // types={product.types}
                      // typesCountHash={typesCountHash}
                      // selectNumber={selectedNumber}
                      // setSelectNumber={setSelectedNumber}


  // const [selectedNumber, setSelectedNumber] = useState(0);
  // const [nameCount, setNameCount] = useState(0);
  // const [typesCountHash, setTypesCountHash] = useState({});
  // const [colorsCountHash, colorsTypeCountHash] = useState({});
