import { useState } from "react";
import "../styles/containers/Basket.sass";

import OrderResult from "./OrderResult";

const Basket = ({ cartItems, totalFeeHash, setTotalFeeHash }) => {
  const [toggle, setToggle] = useState(false);
  const toggleAction = () => {
    setToggle(!toggle);
  };

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
      />
    </div>
  );
};

export default Basket;
