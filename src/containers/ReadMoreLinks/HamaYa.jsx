import "../../styles/containers/ReadMoreLinks.sass";

const HamaYa = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>破魔矢</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default HamaYa;