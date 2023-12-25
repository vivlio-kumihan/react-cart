import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const TrafficSafetySticker = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>交通安全ステッカー</h1>
        <div className="photo-frame">
          <img src={Images.traffic_safety_sticker} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>      
    </div>
  );
};

export default TrafficSafetySticker;