import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const SyuinChou = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container syuin-chou">
        <h1>御朱印帳</h1>
        <div className="photo-frame">
        </div>
          <figure className="photo-frame">
            <img src={Images.syuin_chou_regular} alt="" />
            <figcaption>御朱印帳</figcaption>
          </figure>
          <figure className="photo-frame">
            <img src={Images.syuin_chou_limited} alt="" />
            <figcaption>限定御朱印帳</figcaption>
          </figure>
        <button onClick={handleBackClick}>戻る</button>
      </div>     
    </div>
  );
};


export default SyuinChou;