const ItemCounter = ({ counter, setCounter }) => {
  const countUp = () => {
    setCounter(counter + 1)
  };
  const countDown = () => {
    counter && setCounter(counter - 1)
  };
  const resetCount = () => {
    setCounter(0)
  };

  return (
    <div className="wrapper">
      <button onClick={countUp} className="add">
        <div className="fa-solid fa-square-plus"></div>
      </button>
      <div className="quantity-count">{counter}</div>
      <button onClick={countDown} className="remove">
        <div className="fa-solid fa-square-minus"></div>
      </button>
      <button onClick={resetCount} className="reset">
        <div className="fa-solid fa-trash-can"></div>
      </button>
    </div>
  );
};

export default ItemCounter;


// const Counter = ({ title, counter, setCounter }) => {
//   const countUp = () => {
//     setCounter(counter + 1)
//   };
//   const countDown = () => {
//     setCounter(counter - 1)
//   };
// };
// // カウンター
// const [count, setCount] = useState(0);
// const countUp = () => { setCount(count + 1) };
// const countDown = () => { setCount(count - 1) };
// const resetCount = () => { setCount(0) };