import "../../styles/containers/ReadMoreLinks.sass";

const MariDorei = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>まり土鈴</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default MariDorei;