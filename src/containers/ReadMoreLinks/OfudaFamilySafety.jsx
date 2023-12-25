import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const OfudaFamilySafety = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>御神札 家内安全</h1>
        <div className="photo-frame">
          <img src={Images.ofuda_family_safety} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>
    </div>
  );
};

export default OfudaFamilySafety;
