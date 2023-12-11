import "../../styles/containers/ReadMoreLinks.sass";

const KanauWaSoccer = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>叶う輪―サッカー、フットサル</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default KanauWaSoccer;