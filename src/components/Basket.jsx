import { useState } from "react";
import "../styles/components/Basket.sass";

import OrderResult from "./OrderResult";
const Basket = ({ cartItems, totalFeeHash, setTotalFeeHash, removeCartPid }) => {
  const [toggle, setToggle] = useState(false);
  const toggleAction = () => {
    setToggle(!toggle);
  };
  // カートを削除したら出てくるログ
  console.log(removeCartPid)
  
  return (
    <div className="basket">
      <div className="cart-title-wrapper">
        <button className="cart-title" onClick={toggleAction}>
          <span>{cartItems.length}</span>
        </button>
        <div className="ami"></div>
      </div>
      <OrderResult
        toggle={toggle}
        cartItems={cartItems} 
        totalFeeHash={totalFeeHash}
        setTotalFeeHash={setTotalFeeHash}
        removeCartPid={removeCartPid}
      />
    </div>
  );
};

export default Basket;
