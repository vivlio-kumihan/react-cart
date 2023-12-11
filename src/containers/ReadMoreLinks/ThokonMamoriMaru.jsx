import "../../styles/containers/ReadMoreLinks.sass";

const ThokonMamoriMaru = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>御守 闘魂守（丸）</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default ThokonMamoriMaru;