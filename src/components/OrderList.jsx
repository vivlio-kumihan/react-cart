import { useState } from "react";
import OrderResult from "./OrderResult";
import "../styles/components/OrderList.sass";

const OrderList = ({ 
  // dataList, 
  cartItems,
  totalFeeHash, setTotalFeeHash,
  // totalFee, 
  setTotalFee,
  totalWeightHash, setTotalWeightHash, 
  // totalWeight, 
  setTotalWeight,
  totalSendFee, setTotalSendFee,
  nameValueZero,
  hasItem,
  toggle,
  toggleAction,
  reloadCartItems,
  }) => {

  const openShut = () => {
    return !toggle ? "開く" : "閉じる"
  };

  // 送信完了のトグルスイッチ
  const [sendComplete, setSendComplete] = useState(false);
  const sendCompleteToggle = () => {
    setSendComplete(!sendComplete);
  }; 
  const cloceSendCompleteModal = () => {
    setSendComplete(false);
  };

  return (
    <div className="order-list">
      <div className={`cart-title-wrapper ${sendComplete ? 'hide' : ''}`}>
        <button
          className="cart-title"
          onClick={() => {
              reloadCartItems()
              toggleAction()
            }}
        >
          <span className="title">一覧</span>
          <span className="open-shut">{openShut()}</span>
          {/* className={`menu-toggle-btn ${flag ? "flag" : ""}`} */}

        </button>
        <div className="ami"></div>
      </div>
      <OrderResult
        className="order-result"
        toggle={toggle}
        toggleAction={toggleAction}
        cartItems={cartItems} 
        totalFeeHash={totalFeeHash}
        setTotalFeeHash={setTotalFeeHash}
        setTotalFee={setTotalFee}
        totalWeightHash={totalWeightHash}
        setTotalWeightHash={setTotalWeightHash}
        setTotalWeight={setTotalWeight}
        totalSendFee={totalSendFee}
        setTotalSendFee={setTotalSendFee}
        nameValueZero={nameValueZero}  
        hasItem={hasItem} 
        reloadCartItems={reloadCartItems} 
        sendComplete={sendComplete}
        sendCompleteToggle={sendCompleteToggle}
        clocesendCompleteModal={cloceSendCompleteModal}
      />
    </div>
  );
};

export default OrderList;
