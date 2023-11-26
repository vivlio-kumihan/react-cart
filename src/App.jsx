import { useEffect, useState } from "react";
import Main from "./components/Main";
import OrderList from "./components/OrderList";
import dataList from "./dataList";
import "./styles/App.sass";

const App = () => {
  // カートに入れる商品の状態
  const [cartItems, setCartItems] = useState([]);

  // nameの値が0であれば真を返す。
  const nameValueZero = (hash) => {
    return Object.keys(hash.name).map((key) => hash.name[key]).shift() === 0 
  };

  // 対象が空配列かを検証
  const hasItem = (hash) => Object.keys(hash).length > 0;

  // name, types, colorsのカウント数　key名はsubTotal
  const [calcSubTotalCount, setCalcSubTotalCount] = useState(0);
  // カウント数を割り出すための関数
  const handleCalcSubTotalCount = (hash) => {
    if ((hasItem(hash.types) || hasItem(hash.colors)) && nameValueZero(hash.name)) {
      const thisHash = hasItem(hash.types) ? hash.types : hash.colors;
      const tmpCount = Object.keys(thisHash).reduce((acc, key) => acc + parseInt(thisHash[key]), 0);
      return setCalcSubTotalCount(tmpCount);
    } else {
      Object.keys(hash.name).map((key) => {
        return setCalcSubTotalCount(parseInt(hash.name[key]));
      });
    }
  };    
  
  console.log(calcSubTotalCount, "hello");
  
  // return setCalcSubTotalCount(hash.subTotalCount = tmpCount);
  // setEachCount({...switchItem()[0], [key]: e.target.value})
  // return setCalcSubTotalCount(hash.subTotalCount = parseInt(hash.name[key]));

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
        setCartItems={setCartItems}
        setCalcSubTotalCount={setCalcSubTotalCount}
        calcSubTotalCount={calcSubTotalCount}
        handleCalcSubTotalCount={handleCalcSubTotalCount}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
      />
      <OrderList
        dataList={dataList}
        cartItems={cartItems}
        setCartItems={setCartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}      
      />
    </div>
  );
};

export default App;