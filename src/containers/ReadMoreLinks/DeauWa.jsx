import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const DeauWa = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>出逢う輪</h1>
        <div className="photo-frame">
          <img src={Images.deau_wa} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>     
    </div>
  );
};

export default DeauWa;