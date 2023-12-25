import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const TrafficSafetyCarMamori = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>交通安全車体守</h1>
        <div className="photo-frame">
          <img src={Images.traffic_safety_car_mamori} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>     
    </div>
  );
};

export default TrafficSafetyCarMamori;