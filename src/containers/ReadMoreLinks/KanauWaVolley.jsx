import "../../styles/containers/ReadMoreLinks.sass";

const KanauWaVolley = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>叶う輪―バレー、ビーチバレー</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default KanauWaVolley;