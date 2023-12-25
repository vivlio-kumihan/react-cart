import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const MariDorei = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>まり土鈴</h1>
        <div className="photo-frame mari_dorei">
          <img src={Images.mari_dorei} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>      
    </div>
  );
};

export default MariDorei;