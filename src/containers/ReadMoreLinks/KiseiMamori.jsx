import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const KiseiMamori = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>御守 祈星守</h1>
        <div className="photo-frame kisei_mamori">
          <img src={Images.kisei_mamori} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>     
    </div>
  );
};

export default KiseiMamori;