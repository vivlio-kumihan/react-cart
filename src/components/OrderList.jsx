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
  console.log(toggle);

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
          <span className="title">リスト</span>
          <span className="open-shut">{openShut()}</span>
          {/* className={`menu-toggle-btn ${flag ? "flag" : ""}`} */}

        </button>
        <div className="ami"></div>
      </div>
      <OrderResult
        className="order-result"
        toggle={toggle}
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
      />
    </div>
  );
};

export default OrderList;
