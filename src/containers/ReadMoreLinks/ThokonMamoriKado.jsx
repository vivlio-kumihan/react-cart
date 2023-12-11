import "../../styles/containers/ReadMoreLinks.sass";

const ThokonMamoriKado = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>御守 闘魂守（角）</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default ThokonMamoriKado;