import "../../styles/containers/ReadMoreLinks.sass";

const DeauWa = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>出逢う輪</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default DeauWa;