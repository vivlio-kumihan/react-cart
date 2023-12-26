import { useState, useEffect } from "react";
import "../styles/components/CartItem.sass";

const CartItem = ({ 
  pid, name, types, colors, price, weight,
  totalFeeHash,
  setTotalFee,
  totalWeightHash, 
  setTotalWeight,
  nameValueZero,
  hasItem,
  goSyuinChouAction,
  }) => {
  // nameのhashの値 = namenのカウント数
  const nameCount = parseInt((Object.keys(name).map((key) => name[key]).shift()));
  // 現在がtypesかcolorsかで扱うhashを切り替える。
  const switchItem = () => {
    if (hasItem(types) && nameValueZero) {
      return [types, "types"];
    } else if (hasItem(colors) && nameValueZero) {
      return [colors, "colors"];
    }
  };
  // ___リファクタリング___
  // 引数を持っている場合とない場合だけの違い　オプションの有無で統一する
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
  
  // 商品ごとの小計、重量小計
  totalFeeHash[pid] = price * whichItemSumCalcCount();
  
  totalWeightHash[pid] = weight * whichItemSumCalcCount();
  
  // useEffect(() => {
  //   setTotalFee(Object.values(totalFeeHash).reduce((acc, fee) => acc + fee, 0));
  //   setTotalWeight(Object.values(totalWeightHash).reduce((acc, wgt) => acc + wgt, 0));
  // }, [totalFeeHash, totalWeightHash]); // 依存リストを追加

  // if (pid === "syuin_chou") {
  //   Object.keys(types).reduce((acc, key) => acc + parseInt(types[key]), 0) === 1 &&
  //     // goSyuinChouAction();
  //     console.log(types);
  // }




  return (
    <ul id={pid} className="item" key={pid}>
      {/* 商品名 */}
      {
        Object.keys(name).map((key, idx) => (
          (hasItem(types) || hasItem(colors)) ?
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
      {/* 種類・色 */}
      {
        (hasItem(types) || hasItem(colors)) && nameValueZero &&
          Object.keys(switchItem()[0]).map((key, idx) => (
            switchItem()[0][key] > 0 &&
            <li className="quantity-state" key={idx}>
              <h3>{key}</h3>
              <div className="quantity-count">{switchItem()[0][key]}</div>
            </li>
          ))        
      }

      <li className="sub-total">
        <div><span>{price}</span>円&nbsp;×&nbsp;<span>{whichItemSumCalcCount()}</span></div>
        <div>&nbsp;小計:&nbsp;<span>{price*whichItemSumCalcCount()}</span>円</div>
        {/* <span>&nbsp;重量:&nbsp;{weight*whichItemSumCalcCount()}g</span> */}
      </li>
    </ul>
  );
};

export default CartItem;


// const [goSyuinChou, setGoSyuinChou] = useState(false);
  // const goSyuinChouAction = () => {
  //   setGoSyuinChou(prevState => !prevState);
  // };
  // useEffect(() => {
  //   cartItems.map((item) => {
  //     if (item.pid === "syuin_chou") {
  //       Object.keys(item.types).reduce((acc, key) => acc + parseInt(item.types[key]), 0) === 1 &&
  //         // goSyuinChouAction();
  //         console.log(item.types);
  //     }
  // });
  // }, [cartItems]);
  
  // console.log(goSyuinChou);

  // const [goSyuinChou, setGoSyuinChou] = useState(false);
  // const goSyuinChouAction = () => {
  //   setGoSyuinChou(prevState => !prevState);
  // };
  // useEffect(() => {
  // // マウント時に初期化
  //   setGoSyuinChou(false);

  //   cartItems.map((item) => {
  //     if (item.pid === "syuin_chou") {
  //       const typesCount = Object.values(item.types).reduce((acc, key) => acc + parseInt(item.types[key]), 0);

  //       if (typesCount === 1) {
  //         goSyuinChouAction();
  //       }
  //     }
  //   });
  // }, [cartItems]);

  // console.log(goSyuinChou);  

  // const [goSyuinChou, setGoSyuinChou] = useState(false);  
  // const goSyuinChouAction = () => {
  //   setGoSyuinChou(prevState => !prevState);
  // };

  // useEffect(() => {
  //   // マウント時に初期化
  //   setGoSyuinChou(false);

  //   cartItems.map((item) => {
  //     console.log(item.types);

  //     if (item.pid === "syuin_chou") {
  //       const typesCount = Object.values(item.types).reduce((acc, key) => acc + parseInt(item.types[key], 10), 0);
  //       console.log(typesCount);

  //       if (typesCount === 1) {
  //         console.log("hello");
  //         goSyuinChouAction();
  //       }
  //     }
  //   });
  // }, [cartItems]);

  // console.log(goSyuinChou); 