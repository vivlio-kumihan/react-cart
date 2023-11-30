import { useEffect, useState } from "react";
import Main from "./components/Main";
import OrderList from "./components/OrderList";
import dataList from "./dataList";
import "./styles/App.sass";

const App = () => {
  // カートに入れる商品の状態
  const [cartItems, setCartItems] = useState([]);
  // リストボタンに仕込んだイベントリスナーを合図に合計金額と重量のstateをリロード
  // リストボタンに仕込んだイベントリスナー関連
  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
  };
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
    return Object.keys(nameHash).map((key) => parseInt(nameHash[key])).shift() === 0 
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

  // ___リファクタリング___
  // 合計金額を計算する
  const calculateTotalFee = (arrArg) => {
    const tmpTotalFee = arrArg.reduce((acc, item) => {
      const fee = () => {
        if ((hasItem(item.types) || hasItem(item.colors)) && nameValueZero(item.name)) {
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
  // 総重量を計算する。
  const calculateTotalWeight = (arrArg) => {
    const tmpTotalWeight = arrArg.reduce((acc, item) => {
      const weight = () => {
        if ((hasItem(item.types) || hasItem(item.colors)) && nameValueZero(item.name)) {
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
  // ___リファクタリング___
  
  // 商品をカートから取る関数の定義
  const onRemoveCart = (product) => {
    // 削除したカート以外で構成を作り直す
    const updatedCartItems = cartItems.filter((cartItem) => {
      return cartItem.pid !== product.pid
    });
    // 削除した商品を除いた商品でリストを構成させる。
    setCartItems(updatedCartItems);
    setTotalFee((prevTotalFee) => {
      return calculateTotalFee(updatedCartItems);
    });  
    setTotalWeight((prevTotalWeight) => {
      return calculateTotalWeight(updatedCartItems);
    }); 
  };
  // トグルスイッチ
  const [toggle, setToggle] = useState(false);
  const toggleAction = () => {
    setToggle(!toggle);
  };  
  // リストボタンに仕込んだイベントリスナー関連
  const reloadCartItems = () => {
    return [calculateTotalFee(cartItems), calculateTotalWeight(cartItems)];
  };
  // リストボタンに仕込んだイベントリスナー関連
  const handleClick = () => {
    reloadCartItems();
    toggleAction();
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
        updateCartItems={updateCartItems}
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
        toggleAction={toggleAction }
        reloadCartItems={reloadCartItems}
        handleClick={handleClick}
        toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  );
};

export default App;