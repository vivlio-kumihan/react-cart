import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const KanauWaAll = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>叶う輪―スポーツ全般</h1>
        <div className="photo-frame kanau_wa_all">
          <img src={Images.kanau_wa_all} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>      
    </div>
  );
};

export default KanauWaAll;