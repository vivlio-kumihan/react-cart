import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const Towel = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>タオル（赤・青 1組）</h1>
        <div className="photo-frame">
          <img src={Images.towel} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>     
    </div>
  );
};

export default Towel;