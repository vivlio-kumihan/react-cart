import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const KanauWaBaseball = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>叶う輪―野球、ソフトボール</h1>
        <div className="photo-frame kanau_wa_baseball">
          <img src={Images.kanau_wa_baseball} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>    
    </div>
  );
};

export default KanauWaBaseball;