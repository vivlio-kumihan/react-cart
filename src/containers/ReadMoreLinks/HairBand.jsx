import "../../styles/containers/ReadMoreLinks.sass";

const HairBand = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>ヘアバンド</h1>
      ヘアバンド

      ※色に関しては社務所迄お尋ねください。
      初穂料：各800円

      『健闘必勝祈願』もお受けいたします。
      <a href="">健闘必勝祈願のお申し込み</a>

      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default HairBand;