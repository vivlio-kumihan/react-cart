import { useState } from "react";

const ItemCounter = ({ 
  count, setCount, 
  weight, 
  setItemSubTotalWeight,
}) => {
  const [state, setState] = useState(0);

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