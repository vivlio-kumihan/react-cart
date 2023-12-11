import "../../styles/containers/ReadMoreLinks.sass";

const MoriYa = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>守り矢</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default MoriYa;