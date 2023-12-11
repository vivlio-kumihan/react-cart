import "../../styles/containers/ReadMoreLinks.sass";

const KanauWaBaseball = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>叶う輪―野球、ソフトボール</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default KanauWaBaseball;