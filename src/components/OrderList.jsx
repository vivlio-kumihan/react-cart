import { useState } from "react";
import OrderResult from "./OrderResult";
import "../styles/components/OrderList.sass";

const OrderList = ({ 
  dataList, 
  cartItems,
  totalFeeHash, setTotalFeeHash,
  totalFee, setTotalFee,
  totalWeightHash, setTotalWeightHash, 
  totalWeight, setTotalWeight,
  totalSendFee, setTotalSendFee,
  nameValueZero,
  hasItem,
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
        totalFeeHash={totalFeeHash}
        setTotalFeeHash={setTotalFeeHash}
        totalFee={totalFee}
        setTotalFee={setTotalFee}
        totalWeightHash={totalWeightHash}
        setTotalWeightHash={setTotalWeightHash}
        totalWeight={totalWeight}
        setTotalWeight={setTotalWeight}
        totalSendFee={totalSendFee}
        setTotalSendFee={setTotalSendFee}
        nameValueZero={nameValueZero}  
        hasItem={hasItem}              
      />
    </div>
  );
};

export default OrderList;
