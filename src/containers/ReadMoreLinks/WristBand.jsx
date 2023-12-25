import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const WristBand = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>リストバンド</h1>
        <div className="photo-frame">
          <img src={Images.wrist_band} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>     
    </div>
  );
};

export default WristBand;