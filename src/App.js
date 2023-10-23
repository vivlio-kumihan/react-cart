import { useDeferredValue, useEffect, useState, useTransition } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";

const App = () => {
  // オブジェクトで格納されているdataのデータを（明示的に）ハッシュで受け取る。
  const { products } = data
  // カートの初期状態を生成する。ゲッターとセッター。
  const [cartItems, setCartItems] = useState([]);
  // 商品をカートに入れる関数の定義
  // 同一商品のカートがあるかどうかで処理を変える。
  const onAdd = (product) => {
    const exist = cartItems.find((cartItem) => cartItem.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((cartItem) => cartItem.id === product.id ? { ...exist, quantity: exist.quantity + 1} : cartItem);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, quantity: 1}]
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  // 商品をカートから取る関数の定義
  const onRemove = (product) => {
    const exist = cartItems.find((cartItem) => cartItem.id === product.id);
    if (exist.quantity === 1) {
      // 選択した商品以外を収集しろと命令している。
      const newCartItems = cartItems.filter((cartItem) => cartItem.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((cartItem) => cartItem.id === product.id ? { ...exist, quantity: exist.quantity - 1} : cartItem);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  // useTransition
  // startTransitionという関数を提供していて、
  // このstartTransitionに渡した関数内で状態を更新された場合、
  // その状態更新でのレンダリングはノンブロッキングになる。
  // デフォルトでは、isPending => false
  // 延滞が発生するとtrueになる。
  const [isPending, startTransition] = useTransition();
  // ローカル・ストレージにキャッシュを保存できる。
  useEffect(() => {
    startTransition(() => {
      setCartItems(localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
      );
    })
  }, []);

  // useDeferredValue
  // 変更対象の値をマークしていて、その値を使ってレンダリングが発生したときに
  // レンダリング完了まで画面表示を遅延させてくれる。
  const cartItemsCount = useDeferredValue(cartItems.length);

  return isPending 
    ? (
      <div>Loading...</div>
    ) : (
      <>
        <Header countCartItems={cartItemsCount} />
        <div className="row">
          {/* ハッシュをプロップスとして送信する。 */}
          <Main 
            products={products} 
            // 商品をカートへの出し入れを司る関数をプロップスで送信する。
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
          />
          <Basket 
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
          />
        </div>
      </>
    );
}

export default App;
