import "../../styles/containers/ReadMoreLinks.sass";

const WristBand = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>リストバンド</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default WristBand;