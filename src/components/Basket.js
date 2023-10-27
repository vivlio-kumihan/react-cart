import { useState } from "react";
import "./Basket.css"

const Basket = (props) => {
  const { cartItems } = props;
  
  // org
  // const itemsPrice = cartItems.reduce((sum, cartItem) => {
  //   // this!
  //   const counter = {count};
  //   return sum + counter * cartItem.price;
  // },0);
  
  // const taxPrice = itemsPrice * 0.1;
  
  // const totalPrice = itemsPrice + taxPrice;

  const itemsPrice = cartItems.reduce((sum, cartItem) => {
    // this とりあえず0を代入
    const counter = 0;
    return sum + counter * cartItem.price;
  },0);
  
  const taxPrice = itemsPrice * 0.1;
  
  const totalPrice = itemsPrice + taxPrice;
  
  const [toggle, setToggle] = useState(false);
  const toggleAction = () => {
    setToggle(present => !present)
  }

  return (
    <div className="basket">
      <div className="cart-title-wrapper">
        <button className="cart-title" onClick={toggleAction}>
          <span>{cartItems.length}</span>
        </button>
        <div className="ami"></div>
      </div>
      <div className={`cart-wrapper ${toggle ? "active" : ""}`}>
        {cartItems.length === 0 && <div className="default-msg">登録された商品はありません。</div>}
        {cartItems.map((cartItem) => (
          <ul className="item" key={cartItem.pid}>
            {
              cartItem.type.length || cartItem.color.length
                ? <li className="name quantity-state">{cartItem.name}</li>
                : <li className="name quantity-state">
                    {cartItem.name}
                    <div className="wrapper">
                      {/* <button onClick={()=>countUp(cartItem.pid)} className="add"> */}
                      <button onClick="" className="add">
                        <div className="fa-solid fa-square-plus"></div>
                      </button>
                      {/* <button onClick={()=>countDown(cartItem.pid)} className="remove"> */}
                      <button onClick="" className="remove">
                        <div className="fa-solid fa-square-minus"></div>
                      </button>
                      {/* <button onClick={()=>countReset(cartItem.pid)} className="reset"> */}
                      <button onClick="" className="reset">
                        <div className="fa-solid fa-trash-can"></div>
                      </button>
                    </div>
                  </li>
            } 
            {
              cartItem.type 
                ? cartItem.type.map((ins, idx) => (
                  <li className="quantity-state" key={idx}>
                    <h3>{ins}</h3> 
                    <div className="wrapper">
                      {/* <button onClick={()=>countUp(cartItem.pid)} className="add"> */}
                      <button onClick="" className="add">
                        <div className="fa-solid fa-square-plus"></div>
                      </button>
                      <div className="quantity-count">変数必須</div>
                      {/* <button onClick={()=>countDown(cartItem.pid)} className="remove"> */}
                      <button onClick="" className="remove">
                        <div className="fa-solid fa-square-minus"></div>
                      </button>
                      {/* <button onClick={()=>countReset(cartItem.pid)} className="reset"> */}
                      <button onClick="" className="reset">
                        <div className="fa-solid fa-trash-can"></div>
                      </button>
                    </div>
                  </li>))
                : <li className="display-none"></li>
            }
            {/* <Count cartItem={cartItem} /> */}
            {/* { */}
              {/* cartItem.color  */}
                {/* ? cartItem.color.map((ins, idx) => ( */}
                  {/* <Count title={ins.name} key={idx} count={ins.count} setCount={ins.setCount} /> */}
                {/* )) */}
                {/* : <li className="display-none"></li> */}
            {/* } */}
            <li className="sub-total">
              {Math.round(cartItem.price)}円&nbsp;×&nbsp;変数必須
            </li>
          </ul>
        ))}
        {cartItems.length !== 0 && (
          <ul className="calc-amount">
            <li>商品小計<span>{Math.round(itemsPrice)}</span>円</li>
            <li>消費税 <span>{Math.round(taxPrice)}</span>円</li>
            <li>合計<span>{Math.round(totalPrice)}</span>円</li>
            <li>
              <button onClick={() => alert("Implement Checkout")}>用紙出力</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

// const Count = ({ cartItem, count, setCount }) => {
//   const countUp = () => {
//     setCount((count) => count + 1);
//   };
//   const countDown = () => {
//     if (count === 0) setCount(count - 1);
//   };
//   const countReset = () => {
//     setCount(count = 0);
//   }

//   return (
//     <></>
//   );
//   // return cartItem.color (
//   //   <>
//   //     ? cartItem.color.map((ins, idx) => (
//   //       <li className="quantity-state" key={idx}>
//   //             <h3>{ins}</h3>
//   //             <div className="wrapper">
//   //               <button onClick={countUp} className="add">
//   //                 <div className="fa-solid fa-square-plus"></div>
//   //               </button>
//   //               <div className="quantity-count">{count}</div>
//   //               <button onClick={countDown} className="remove">
//   //                 <div className="fa-solid fa-square-minus"></div>
//   //               </button>
//   //               <button onClick={countReset} className="reset">
//   //                 <div className="fa-solid fa-trash-can"></div>
//   //               </button>
//   //             </div>
//   //           </li>
//   //         ))
//   //         : <li className="display-none"></li>
//   //   </>
//   // );
// };

export default Basket;