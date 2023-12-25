import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const ThokonTukusuMamori = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>御守 闘魂尽す守（マグネット式）</h1>
        <div className="photo-frame">
          <img src={Images.thokon_tukusu_mamori} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>     
    </div>
  );
};

export default ThokonTukusuMamori;