import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const OfudaSenRyu = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>御神札 潜龍大神</h1>
        <div className="photo-frame">
          <img src={Images.ofuda_sen_ryu} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>    
    </div>
  );
};

export default OfudaSenRyu;