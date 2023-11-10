import { useState } from "react";
import "../styles/components/Basket.sass";

import OrderResult from "./OrderResult";

const Basket = ({ cartItems }) => {
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
      <OrderResult toggle={toggle} cartItems={cartItems} />
    </div>
  );
};

export default Basket;
