import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const BaTei = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>馬蹄</h1>
        <div className="photo-frame">
          <img src={Images.ba_tei} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>    
    </div>
  );
};

export default BaTei;