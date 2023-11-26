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
      const newCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCartItems);
    }
  };

  // 商品をカートから取る関数の定義
  const onRemoveCart = (product) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.pid !== product.pid
    );
    setCartItems(newCartItems);
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