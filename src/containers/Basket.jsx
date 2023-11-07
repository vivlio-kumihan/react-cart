import { useState } from "react";
import "../styles/containers/Basket.sass";

import OrderResult from "../components/OrderResult";
import TotalFee from "../components/TotalFee";

const Basket = ({ cartItems }) => {
  const [toggle, setToggle] = useState(false);
  const toggleAction = () => {
    setToggle(!toggle);
  };

  const [totalFee, setTotalFee] = useState(0);

  return (
    <div className="basket">
      <div className="cart-title-wrapper">
        <button className="cart-title" onClick={toggleAction}>
          <span>{cartItems.length}</span>
        </button>
        <div className="ami"></div>
      </div>
      <OrderResult toggle={toggle} cartItems={cartItems} />
      <TotalFee totalFee={totalFee} setTotalFee={setTotalFee} />
    </div>
  );
};

export default Basket;
