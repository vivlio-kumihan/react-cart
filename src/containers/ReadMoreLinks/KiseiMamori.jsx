import "../../styles/containers/ReadMoreLinks.sass";

const KiseiMamori = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>御守 祈星守</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default KiseiMamori;