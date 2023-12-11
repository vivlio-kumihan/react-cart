import "../../styles/containers/ReadMoreLinks.sass";

const KanauWaAll = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>叶う輪―全般</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default KanauWaAll;