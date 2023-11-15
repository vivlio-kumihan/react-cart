import { useEffect } from "react";
import ItemCounter from "../containers/ItemCounter";

const CartItem = ({ 
  cartItem: { pid, name, types, colors, price, weight },
  // totalFeeHash, setTotalFeeHash,
  // totalWeightHash, setTotalWeightHash
  }) => {


  const nameTotalCount = (hash) => {
    return Object.keys(hash).map((key) => hash[key])
  };

  const itemTotalCount = (hash) => {
    return Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
  };

  // useEffect(() => {
  //   if (nameTotalCount(name) > 0) {
  //     setTotalFeeHash((prevTotalFeeHash) => ({
  //       ...prevTotalFeeHash,
  //       [pid]: nameTotalCount(name) * price,
  //     }));
  //   }

  //   if (itemTotalCount(types) > 0) {
  //     setTotalFeeHash((prevTotalFeeHash) => ({
  //       ...prevTotalFeeHash,
  //       [pid]: itemTotalCount(types) * price,
  //     }));
  //   }

  //   if (itemTotalCount(colors) > 0) {
  //     setTotalFeeHash((prevTotalFeeHash) => ({
  //       ...prevTotalFeeHash,
  //       [pid]: itemTotalCount(colors) * price,
  //     }));
  //   }
  // }, [name, types, colors, pid, price]);

  // useEffect(() => {
  //   nameTotalCount(name) && 
  //     setTotalFeeHash({ ...totalFeeHash, [pid]: nameTotalCount(name) * price })

  //   itemTotalCount(types) &&
  //     setTotalFeeHash({ ...totalFeeHash, [pid]: itemTotalCount(types) * price })
      
  //   itemTotalCount(colors) && 
  //     setTotalFeeHash({ ...totalFeeHash, [pid]: itemTotalCount(types) * price })
  // });
    

  
  
  // 対象が空配列かを検証
  const hasItems = (hash) => Object.keys(hash).length > 0;

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
        { nameTotalCount(name) > 0 && 
          <span>{price}円&nbsp;×&nbsp;{nameTotalCount(name)}</span> }
        { nameTotalCount(name) > 0 && 
          <span>&nbsp;小計:&nbsp;{price*nameTotalCount(name)}円</span> }
        { nameTotalCount(name) > 0 && 
          <span>&nbsp;重量:&nbsp;{weight*nameTotalCount(name)}g</span> }

        { itemTotalCount(types) > 0 && 
          <span>{price}円&nbsp;×&nbsp;{itemTotalCount(types)}</span> }
        { itemTotalCount(types) > 0 && 
          <span>&nbsp;小計:&nbsp;{price*itemTotalCount(types)}円</span> }
        { itemTotalCount(types) > 0 && 
          <span>&nbsp;重量:&nbsp;{weight*itemTotalCount(types)}g</span> }

        { itemTotalCount(colors) > 0 && 
          <span>{price}円&nbsp;×&nbsp;{itemTotalCount(colors)}</span> }
        { itemTotalCount(colors) > 0 && 
          <span>&nbsp;小計:&nbsp;{price*itemTotalCount(colors)}円</span> }
        { itemTotalCount(colors) > 0 && 
          <span>&nbsp;重量:&nbsp;{weight*itemTotalCount(colors)}g</span> }
      </li>
    </ul>
  );
};

export default CartItem;