import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const HairBand = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>ヘアバンド</h1>
        <div className="product-introduction">
          <dl>
            <dt>ヘアバンド</dt>
            <dd><div className="price">初穂料：各800円</div></dd>
            <dd><cite>※色に関しては社務所迄お尋ねください。</cite></dd>
          </dl>
          <div className="photo-frame hair_band">
            <img src={Images.hair_band} alt="" />
          </div>                   
          <h2 className="first-but-middle-paragraph text-align-center">『健闘必勝祈願』もお受けいたします。</h2>
          <a href="" className="attention text-align-center">健闘必勝祈願のお申し込みはこちらから</a>      
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>    
    </div>
  );
};

export default HairBand;