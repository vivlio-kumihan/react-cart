import { useState } from "react";
import OrderResult from "./OrderResult";
import "../styles/components/OrderList.sass";

const OrderList = ({ dataList, cartItems, totalFeeHash, setTotalFeeHash }) => {
  const [toggle, setToggle] = useState(false);
  const toggleAction = () => {
    setToggle(!toggle);
  };

  return (
    <div className="order-list">
      <div className="cart-title-wrapper">
        <button className="cart-title" onClick={toggleAction}>
          <span>{cartItems.length}</span>
        </button>
        <div className="ami"></div>
      </div>
      <OrderResult
        toggle={toggle}
        dataList={dataList}
        cartItems={cartItems} 
        totalFeeHash={totalFeeHash}
        setTotalFeeHash={setTotalFeeHash}
      />
    </div>
  );
};

export default OrderList;