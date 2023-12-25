import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const KanauWaTennis = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>叶う輪―テニス、スカッシュ</h1>
        <div className="photo-frame kanau_wa_tennis">
          <img src={Images.kanau_wa_tennis} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>      
    </div>
  );
};

export default KanauWaTennis;