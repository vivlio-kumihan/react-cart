import { useState } from "react";
// // 注意
// import { useState, useTransition, useDeferredValue } from "react";
import Main from "./containers/Main";
import Basket from "./containers/Basket";
import Test from "./containers/Test";
import data from "./data";
import "./styles/App.sass";

const App = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAddCart = (product) => {
    const exist = cartItems.find((cartItem) => cartItem.pid === product.pid);
    if (!exist) {
      const newCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCartItems);
      // 注意
      // localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  // 商品をカートから取る関数の定義
  const onRemoveCart = (product) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.pid !== product.pid
    );
    setCartItems(newCartItems);
    // 注意
    // localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  // // 注意
  // // ローカル・ストレージにキャッシュを保存できる。
  // useEffect(() => {
  //   setCartItems(localStorage.getItem("cartItems")
  //     ? JSON.parse(localStorage.getItem("cartItems"))
  //     : []
  //   );
  // }, []);

  // // useTransition
  // // startTransitionという関数を提供していて、
  // // このstartTransitionに渡した関数内で状態を更新された場合、
  // // その状態更新でのレンダリングはノンブロッキングになる。
  // // デフォルトでは、isPending => false
  // // 延滞が発生するとtrueになる。
  // const [isPending, startTransition] = useTransition();
  // // ローカル・ストレージにキャッシュを保存できる。
  // useEffect(() => {
  //   startTransition(() => {
  //     setCartItems(localStorage.getItem("cartItems")
  //       ? JSON.parse(localStorage.getItem("cartItems"))
  //       : []
  //     );
  //   })
  // }, []);

  // // useDeferredValue
  // // 変更対象の値をマークしていて、その値を使ってレンダリングが発生したときに
  // // レンダリング完了まで画面表示を遅延させてくれる。
  // const cartItemsCount = useDeferredValue(cartItems.length);

  // 問題 useTransitionを戻したらここも戻す
  // return false ? (
  //   // 質問 言われたとおりにしているだけ、
  //   // 実際にローディングさせる方法がわかったない。
  //   // return isPending
  //   <div>Loading...</div>
  // ) : (
  return (
    <div className="container">
      {/* 注意 */}
      {/* <Test /> */}
      <Main
        products={products}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
        cartItems={cartItems}
      />
      <Basket
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
  // );
};

export default App;