import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const EmaSky = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>絵馬（心願成就）</h1>
        <div className="photo-frame">
          <img src={Images.ema_sky} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>     
    </div>
  );
};

export default EmaSky;