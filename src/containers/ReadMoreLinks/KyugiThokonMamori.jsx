import "../../styles/containers/ReadMoreLinks.sass";

const KyugiThokonMamori = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>御守 球技闘魂守（角）</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default KyugiThokonMamori;