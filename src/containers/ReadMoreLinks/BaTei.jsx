import "../../styles/containers/ReadMoreLinks.sass";

const BaTei = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>馬蹄</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default BaTei;