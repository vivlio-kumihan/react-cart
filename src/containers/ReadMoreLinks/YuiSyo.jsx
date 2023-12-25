import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const YuiSyo = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>由緒（朱印付き）</h1>
        <div className="photo-frame">
          <img src={Images.yui_syo} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>     
    </div>
  );
};

export default YuiSyo;