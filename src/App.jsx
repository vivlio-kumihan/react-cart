import { useEffect, useState } from "react";
import Main from "./components/Main";
import OrderList from "./components/OrderList";
import dataList from "./dataList";
import "./styles/App.sass";

const App = () => {
  // カートに入れる商品の状態
  const [cartItems, setCartItems] = useState([]);

  // アイテム毎の金額
  const [totalFeeHash, setTotalFeeHash] = useState({});

  // カート内で注文する商品の小計
  const [totalFee, setTotalFee] = useState(0);
  
  // アイテム毎の重量
  const [totalWeightHash, setTotalWeightHash] = useState({});

  // カート内で注文する商品の重量
  const [totalWeight, setTotalWeight] = useState(0);  

  // カート内で注文する商品の送料
  const [totalSendFee, setTotalSendFee] = useState(0);  

  // nameの値が0であれば真を返す。
  const nameValueZero = (nameHash) => {
    return Object.keys(nameHash).map((key) => nameHash[key]).shift() === 0 
  };  

  // 対象が空配列かを検証
  const hasItem = (hash) => Object.keys(hash).length > 0; 

  // 商品をカートに追加する関数の定義
  const onAddCart = (product) => {
    const exist = cartItems.find((cartItem) => cartItem.pid === product.pid);
    if (!exist) {
      const newCartItems = [...cartItems, product];
      setCartItems(newCartItems);
    }
  };

  // 商品をカートから取る関数の定義
  const onRemoveCart = (product) => {
    const updatedCartItems = cartItems.filter((cartItem) => {
      return cartItem.pid !== product.pid
    });

    const calculateTotalFee = (arrArg) => {
      const tmpTotalFee = arrArg.reduce((acc, item) => {
        const fee = () => {
          if ((hasItem(item.types) || hasItem(item.colors)) && (item.name === 0)) {
            const hash = hasItem(item.types) ? item.types : item.colors;
            const count = Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
            return item.price * count;
          } else {
            const count = parseInt(item.name[Object.keys(item.name)[0]]);
            return item.price * count;
          }
        };
        return acc + parseInt(fee());
      }, 0);
      return tmpTotalFee;
    };    
    const calculateTotalWeight = (arrArg) => {
      const tmpTotalWeight = arrArg.reduce((acc, item) => {
        const weight = () => {
          if ((hasItem(item.types) || hasItem(item.colors)) && (item.name === 0)) {
            const hash = hasItem(item.types) ? item.types : item.colors;
            const count = Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
            return item.weight * count;
          } else {
            const count = parseInt(item.name[Object.keys(item.name)[0]]);
            return item.weight * count;
          }
        };
        return acc + parseInt(weight());
      }, 0);
      return tmpTotalWeight;
    };    

    setCartItems(updatedCartItems);
    setTotalFee(calculateTotalFee(updatedCartItems));
    setTotalWeight(calculateTotalWeight(updatedCartItems));
    console.log(calculateTotalFee(updatedCartItems), "<= App");
    console.log(calculateTotalWeight(updatedCartItems), "<= App");
  };

  return (
    <div className="container">
      <Main
        dataList={dataList}
        cartItems={cartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
        nameValueZero={nameValueZero}
        hasItem={hasItem}
      />
      <OrderList
        dataList={dataList}
        cartItems={cartItems}
        setCartItems={setCartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart} 
        totalFeeHash={totalFeeHash}
        setTotalFeeHash={setTotalFeeHash}
        totalFee={totalFee}
        setTotalFee={setTotalFee}
        totalWeightHash={totalWeightHash}
        setTotalWeightHash={setTotalWeightHash}
        totalWeight={totalWeight}
        setTotalWeight={setTotalWeight}
        totalSendFee={totalSendFee}
        setTotalSendFee={setTotalSendFee}
        nameValueZero={nameValueZero}
        hasItem={hasItem}
      />
    </div>
  );
};

export default App;