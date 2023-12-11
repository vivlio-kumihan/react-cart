import "../../styles/containers/ReadMoreLinks.sass";

const HairBand = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>ヘアバンド</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default HairBand;