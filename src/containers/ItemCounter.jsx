import { useState, useEffect } from "react";

const ItemCounter = ({ 
  count, setCount, 
  weight, 
  setItemSubTotalWeight,
  pid,
  removeCartPid
}) => {
  const [state, setState] = useState(0);

  // カウント・リセットの関数
  const resetCount = () => {
    setCount(count - state);
    setState(0);
    setItemSubTotalWeight(weight * (count - state));
  };

  // 引数の値によって増減を決める
  const handleCounter = (num) => {
    setCount(count + num);
    setState(state + num);
    setItemSubTotalWeight(weight * (count + num));
  };

  // カートを削除した時点で処理が終了してここまで来ない。
  useEffect(() => {
    // pid と removeCartPid が等しい場合に resetCount 関数を呼び出す
    if (pid === removeCartPid) {
      // カートを削除すると途中で処理は中断してここまで来ない。
      resetCount();
    }
  }, [pid, removeCartPid]);  
  
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          handleCounter(1);
        }}
        className="add"
      >
        {/* プラスの記号 */}
        <div className="fa-solid fa-square-plus"></div>
      </button>
      {/* カウントの状態 */}
      <div className="quantity-count">{state}</div>

      <button
        onClick={() => {
          handleCounter(-1);
        }}
        disabled={state === 0}
        className="remove"
      >
        {/* マイナスの記号 */}
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