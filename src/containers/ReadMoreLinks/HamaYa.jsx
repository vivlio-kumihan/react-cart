import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const HamaYa = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>破魔矢</h1>
        <div className="photo-frame">
          <img src={Images.hama_ya} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>      
    </div>
  );
};

export default HamaYa;