import "../../styles/containers/ReadMoreLinks.sass";

const KanauWaHashi = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>叶う和箸</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default KanauWaHashi;