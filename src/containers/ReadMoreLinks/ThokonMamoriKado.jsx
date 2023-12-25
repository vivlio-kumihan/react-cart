import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const ThokonMamoriKado = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>御守 闘魂守（角）</h1>
        <div className="photo-frame">
          <img src={Images.thokon_mamori_kado} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>      
    </div>
  );
};

export default ThokonMamoriKado;