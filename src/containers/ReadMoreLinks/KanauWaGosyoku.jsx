import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const KanauWaGosyoku = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>『五色版』叶う輪</h1>
        <div className="photo-frame kanau_wa_gosyoku">
          <img src={Images.kanau_wa_gosyoku} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>    
    </div>
  );
};

export default KanauWaGosyoku;