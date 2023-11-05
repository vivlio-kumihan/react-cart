import { useState } from "react";
import "../styles/containers/Basket.sass";

import OrderResult from "../components/OrderResult";

// 分割代入でpropsからcartItemsを取得 useContextなりで状態管理したほうが良い？
const Basket = ({ cartItems }) => {
  // const { cartItems } = props;

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
