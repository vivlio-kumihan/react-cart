import { useState, useEffect, useTransition, useDeferredValue } from "react";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import "./App.css"

const App = () => {
  // オブジェクトで格納されているdataのデータを（明示的に）ハッシュで受け取る。
  const { products } = data

  // カートの初期状態を生成する。ゲッターとセッター。
  const [cartItems, setCartItems] = useState([]);
  // 商品をカートに入れる関数の定義
  // 同一商品のカートがあるかどうかで処理を変える。
  const onAddCart = (product) => {
    const exist = cartItems.find((cartItem) => cartItem.pid === product.pid);
    if (exist) {
      const newCartItems = cartItems.map((cartItem) => 
        cartItem.pid === product.pid 
          ? { ...exist, quantity: exist.quantity + 1} 
          : cartItem
        );
      setCartItems(newCartItems);
      // 注意
      // localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, quantity: 1}]
      setCartItems(newCartItems);
      // 注意
      // localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  // 商品をカートから取る関数の定義
  const onRemoveCart = (product) => {
    const exist = cartItems.find((cartItem) => cartItem.pid === product.pid);
    if (exist.quantity === 1) {
      // 選択した商品以外を収集しろと命令している。
      const newCartItems = cartItems.filter((cartItem) => cartItem.pid !== product.pid);
      setCartItems(newCartItems);
      // 注意
      // localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((cartItem) => cartItem.pid === product.pid 
        ? { ...exist, quantity: exist.quantity - 1} 
        : cartItem
        );
      setCartItems(newCartItems);
      // 注意
      // localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const [thisType, setThisType] = useState({});
  
  // 問題　とりえあえず残しておく
  // name, type, colorで場合分けをしないといけないし、
  // それぞれにidをつけないといけなくなるはず。
  // // 動かない〜！！！！
  // const typeHash = (n, arr) => {
  //   const keys = [...Array(n)].map((_, i) => i);
  //   const hash = [keys, arr].slice(1).map((item) => {
  //     let obj = {};
  //     keys.forEach((key, idx) => (obj[key] = item[idx]));
  //     return obj;
  //   });
  // };

  // typeHash(5, ["apple", "banana"]);
  // setThisType(typeHash);
  
  const [ThisColor, setThisColor] = useState({});
  // const colorHash = (n, arr) => {
  //   const keyArr = [...Array(n)].map((_, i) => i);
  //   const keys = keyArr;
  //   const hash = arr.slice(1).map((item) => {
  //     let obj = {};
  //     keys.forEach((key, idx) => (obj[key] = item[idx]));
  //     return obj;
  //   });
  // };

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

  // 問題　useTransitionを戻したらここも戻す
  return false
  // return isPending
    ? (
      <div>Loading...</div>
    ) : (
      <>
        <div className="container">
          {/* ハッシュをプロップスとして送信する。 */}
          <Main 
            products={products} 
            // 商品をカートへの出し入れを司る関数をプロップスで送信する。
            onAddCart={onAddCart}
            onRemoveCart={onRemoveCart}
            cartItems={cartItems}
            thisType={thisType}
            ThisColor={ThisColor}
          />
          <Basket 
            onAddCart={onAddCart}
            onRemoveCart={onRemoveCart}
            cartItems={cartItems}
            thisType={thisType}
            ThisColor={ThisColor}
          />
        </div>
      </>
    );
}

export default App;
