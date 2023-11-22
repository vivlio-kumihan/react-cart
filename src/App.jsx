import { useEffect, useState } from "react";
import Main from "./components/Main";
import OrderList from "./components/OrderList";
import dataList from "./dataList";
import "./styles/App.sass";

const App = () => {
  // カートに入れる商品の状態
  const [cartItems, setCartItems] = useState([]);

  const [minusFee, setMinusFee] = useState(0);

  // const handleMinusFee = () => {
  //   setMinusFee(100);
  // };

  console.log(minusFee);

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
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
        minusFee={minusFee}
        setMinusFee={setMinusFee}
      />
      <OrderList
        dataList={dataList}
        cartItems={cartItems}
        setCartItems={setCartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
        // minusFee={minusFee}
        // setMinusFee={setMinusFee}        
      />
    </div>
  );
};

export default App;