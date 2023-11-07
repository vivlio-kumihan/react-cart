import { useState } from "react";

const ItemCounter = ({ count, setCount}) => {
  const [state, setState] = useState(0);

  const resetCount = () => {
    setCount(count - state);
    setState(0);
  };

  // 引数の値によって増減を決める
  const handleCounter = (num) => {
    setState(state + num);
    setCount(count + num);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          handleCounter(1);
        }}
        className="add"
      >
        <div className="fa-solid fa-square-plus"></div>
      </button>

      <div className="quantity-count">{state}</div>

      <button
        onClick={() => {
          handleCounter(-1);
        }}
        disabled={state === 0}
        className="remove"
      >
        <div className="fa-solid fa-square-minus"></div>
      </button>

      <button 
        onClick={resetCount} 
        className="reset"
      >
        <div className="fa-solid fa-trash-can"></div>
      </button>
    </div>
  );
};

export default ItemCounter;


// 注意
  // try01
  // 子コンポーネントからstateの状態を変更しようとしてエラー
  // setOrder(order => ({order, name: setName}));

  // react-dom.development.js:86 Warning:
  // Cannot update a component (`OrderResult`) while rendering a different component (`ItemCounter`).
  // To locate the bad setState() call inside `ItemCounter`, follow the stack trace as described in
  // https://reactjs.org/link/setstate-in-render

  // try02
  // 何もわからずuseEffectを使ってみるがカウント数字が出てこない。
  // コードは動いている模様。
  // useEffect(() => {
  //   setOrder(order => ({order, name: setName}));
  // });

  // 質問
  // try03
  // 親コンポーネントからとってきたsetNameを
  // setOrderに仕込んでcartItem.name, type, colorsそれぞれ個別のstateを作りたい。
  // handleChange関数を作りonClickイベントの度に個別のstateへアクセスして
  // と考えたがうまくいってない。
  // 根本的にstateが理解できていないとは思われますが、
  // 何が理解できていないかがわかっていない状態です。
  // 申し訳ありませんがご教示お願いできませんでしょうか？

  // const handleChange = (newVal) => {
  //   handleNameChange(newVal);
  // };

  // const countUp = () => {
  //   setOrder({ ...order, count: order.count + 1 });
  // };

  // const countDown = () => {
  //   if (order.count > 0) {
  //     setOrder({ ...order, count: order.count - 1 });
  //   }
  // };