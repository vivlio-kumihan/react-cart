import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const TowelLong = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>ロングタオル</h1>
        <div className="photo-frame">
          <img src={Images.towel_long} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>     
    </div>
  );
};

export default TowelLong;