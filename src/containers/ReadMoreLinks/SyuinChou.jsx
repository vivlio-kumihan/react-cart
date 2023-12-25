import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const SyuinChou = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>御朱印帳</h1>
        <div className="photo-frame">
          <img src={Images.syuin_chou} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>     
    </div>
  );
};

export default SyuinChou;