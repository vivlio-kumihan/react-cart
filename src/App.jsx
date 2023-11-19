import { useState } from "react";
import Main from "./components/Main";
import OrderList from "./components/OrderList";
import dataList from "./dataList";
import "./styles/App.sass";

const App = () => {
  // カートに入れる商品の状態
  const [cartItems, setCartItems] = useState([]);

  // 商品をカートに追加する関数の定義
  const onAddCart = (product) => {
    const exist = cartItems.find((cartItem) => cartItem.pid === product.pid);
    if (!exist) {
      const newCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCartItems);
    }
  };

  const [eachCount, setEachCount] = useState({});

  // 商品をカートから取る関数の定義
  const onRemoveCart = (product) => {
    cartItems.map((cartItem) => {
      cartItem.pid === product.pid &&
        Object.keys(cartItem.name).map((key) => {
          cartItem.name[key] = 0
          setEachCount({...cartItem.name, [key]: 0})
          })
        Object.keys(cartItem.types).map((key) => {
          cartItem.types[key] = 0
          setEachCount({...cartItem.types, [key]: 0})
          })
        Object.keys(cartItem.colors).map((key) => {
          cartItem.colors[key] = 0
          setEachCount({...cartItem.colors, [key]: 0})
          })      
        // Object.keys(cartItem.name).map((key) => { cartItem.name[key] = 0 });
        // Object.keys(cartItem.types).map((key) => { cartItem.types[key] = 0 });
        // Object.keys(cartItem.colors).map((key) => { cartItem.colors[key] = 0 });
    }); 

    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.pid !== product.pid
    );
    setCartItems(newCartItems);
  };

  // // nameの値が0であれば真を返す。
  // const nameValueZero = (nameHash) => {
  //   return Object.keys(nameHash).map((key) => nameHash[key]).shift() === 0;
  // };

  // // nameのhashの値 = namenのカウント数
  // const nameCount = (nameHash) => {
  //   return parseInt((Object.keys(nameHash).map((key) => nameHash[key]).shift()));
  // };

  // // 対象が空配列かを検証
  // const hasItem = (hash) => Object.keys(hash).length > 0;

  // App > Main > Product で定義している関数を移動する意味があるか？
  // // 現在がtypesかcolorsかで扱うhashを切り替える。
  // const pickHash = () => {
  //   if (hasItem(types) && nameValueZero) {
  //     return types;
  //   } else if (hasItem(colors) && nameValueZero) {
  //     return colors;
  //   }
  // }; 
  // // そのための関数の実行を変数に格納
  // const switchHash = pickHash();

  // // itemごとのカウント
  // const [eachCount, setEachCount] = useState({});
  
  // // name, types, colorsのそれぞれカウント合計
  // const whichItemSumCalcCount = (nameHash, typesHash, colorsHash) => {
  //   if ((hasItem(typesHash) || hasItem(colorsHash)) && nameValueZero(nameHash)) {
  //     const hash = hasItem(typesHash) ? typesHash : colorsHash;
  //     return Object.keys(hash).reduce((acc, key) => acc + parseInt(hash[key]), 0);
  //   } else if (nameCount(nameHash) >= 0) {
  //     return Object.keys(nameHash).reduce((acc, key) => acc + parseInt(nameHash[key]), 0);
  //   }
  // };  

  return (
    <div className="container">   
      <Main
        dataList={dataList}
        cartItems={cartItems}
        setCartItems={setCartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
        setEachCount={setEachCount}
        // nameValueZero={nameValueZero}
        // nameCount={nameCount}
        // hasItem={hasItem}
        // whichItemSumCalcCount={whichItemSumCalcCount}
      />
      <OrderList
        dataList={dataList}
        cartItems={cartItems}
        setCartItems={setCartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
        
        // nameValueZero={nameValueZero}
        // nameCount={nameCount}
        // hasItem={hasItem}  
        // whichItemSumCalcCount={whichItemSumCalcCount}      
      />
    </div>
  );
};

export default App;

// --------------------------------------------------------------
// import { useEffect, useState } from "react";
// // // 注意
// // import { useState, useTransition, useDeferredValue } from "react";
// import Main from "./components/Main";
// import OrderList from "./components/OrderList";
// import data from "./data";
// import "./styles/App.sass";

// const App = () => {
//   // カートに入れる商品の状態
//   const [cartItems, setCartItems] = useState([]);
//   // 商品をカートに追加する関数の定義
//   const onAddCart = (product) => {
//     const exist = cartItems.find((cartItem) => cartItem.pid === product.pid);
//     if (!exist) {
//       const newCartItems = [...cartItems, { ...product, quantity: 1 }];
//       setCartItems(newCartItems);
//       // 注意
//       // localStorage.setItem("cartItems", JSON.stringify(newCartItems));
//     }
//   };
//   // 商品をカートから取る関数の定義
//   const onRemoveCart = (product) => {
//     const newCartItems = cartItems.filter(
//       (cartItem) => cartItem.pid !== product.pid
//     );
//     setCartItems(newCartItems);
//     // // 注意
//     // localStorage.setItem("cartItems", JSON.stringify(newCartItems));
//   };

//   // // 注意
//   // // ローカル・ストレージにキャッシュを保存できる。
//   // useEffect(() => {
//   //   setCartItems(localStorage.getItem("cartItems")
//   //     ? JSON.parse(localStorage.getItem("cartItems"))
//   //     : []
//   //   );
//   // }, []);

//   // // useTransition
//   // // startTransitionという関数を提供していて、
//   // // このstartTransitionに渡した関数内で状態を更新された場合、
//   // // その状態更新でのレンダリングはノンブロッキングになる。
//   // // デフォルトでは、isPending => false
//   // // 延滞が発生するとtrueになる。
//   // const [isPending, startTransition] = useTransition();
//   // // ローカル・ストレージにキャッシュを保存できる。
//   // useEffect(() => {
//   //   startTransition(() => {
//   //     setCartItems(localStorage.getItem("cartItems")
//   //       ? JSON.parse(localStorage.getItem("cartItems"))
//   //       : []
//   //     );
//   //   })
//   // }, []);

//   // // useDeferredValue
//   // // 変更対象の値をマークしていて、その値を使ってレンダリングが発生したときに
//   // // レンダリング完了まで画面表示を遅延させてくれる。
//   // const cartItemsCount = useDeferredValue(cartItems.length);

//   // 問題 useTransitionを戻したらここも戻す
//   // return false ? (
//   //   // 問題 言われたとおりにしているだけ、
//   //   // 実際にローディングさせる方法がわかったない。
//   //   // return isPending
//   //   <div>Loading...</div>
//   // ) : (
//   return (
//     <div className="container">
//       {/* 注意 */}
//       {/* <Test /> */}
//       <Main
//         data={data}
//         onAddCart={onAddCart}
//         onRemoveCart={onRemoveCart}
//         cartItems={cartItems}
//       />
//       <OrderList
//         onAddCart={onAddCart}
//         onRemoveCart={onRemoveCart}
//         cartItems={cartItems}
//         setCartItems={setCartItems}
//       />
//     </div>
//   );
// };

// export default App;