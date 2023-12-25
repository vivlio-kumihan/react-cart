import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const OfudaYakuYoke = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>御神札 方除・魔除・赤札</h1>
        <div className="photo-frame">
          <img src={Images.ofuda_yaku_yoke} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>
    </div>
  );
};

export default OfudaYakuYoke;