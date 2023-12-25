import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const Ema = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>絵馬</h1>
        <div className="photo-frame">
          <img src={Images.ema} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>      
    </div>
  );
};

export default Ema;