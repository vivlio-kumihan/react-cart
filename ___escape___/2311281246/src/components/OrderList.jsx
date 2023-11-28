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
  toggle,
  setToggle,
  toggleAction,
  reloadCartItems,
  handleClick,
  }) => {

  return (
    <div className="order-list">
      <div className="cart-title-wrapper">
        <button 
          className="cart-title" 
          onClick={() => {
              reloadCartItems()
              toggleAction()
            }}
        >
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
        reloadCartItems={reloadCartItems}  
      />
    </div>
  );
};

export default OrderList;
