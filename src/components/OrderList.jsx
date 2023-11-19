import { useState } from "react";
import OrderResult from "./OrderResult";
import "../styles/components/OrderList.sass";
import OrderForm from "./OrderForm";



const OrderList = ({ 
  dataList, 
  cartItems, 
  totalFeeHash, 
  setTotalFeeHash, 
  // nameValueZero, 
  // nameCount, 
  // hasItem 
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
        toggle={toggle}
        dataList={dataList}
        cartItems={cartItems} 
        totalFeeHash={totalFeeHash}
        setTotalFeeHash={setTotalFeeHash}
        // nameValueZero={nameValueZero}
        // nameCount={nameCount}
        // hasItem={hasItem}        
      />
    </div>
  );
};

export default OrderList;
