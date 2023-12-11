import "../../styles/containers/ReadMoreLinks.sass";

const KanauWaGosyoku = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>『五色版』叶う輪</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default KanauWaGosyoku;