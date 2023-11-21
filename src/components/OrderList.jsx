import { useState } from "react";
import OrderResult from "./OrderResult";
import "../styles/components/OrderList.sass";

const OrderList = ({ 
  dataList, 
  cartItems, 
  }) => {

  const [toggle, setToggle] = useState(false);
  const toggleAction = () => {
    setToggle(!toggle);
  };

  return (
    <div className="order-list">
      <div className="cart-title-wrapper">
        <button className="cart-title" onClick={toggleAction}>
          <span></span>
        </button>
        <div className="ami"></div>
      </div>
      <OrderResult
        className="order-result"
        toggle={toggle}
        dataList={dataList}
        cartItems={cartItems}      
      />
    </div>
  );
};

export default OrderList;
