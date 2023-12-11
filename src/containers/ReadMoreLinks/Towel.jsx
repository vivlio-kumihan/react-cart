import "../../styles/containers/ReadMoreLinks.sass";

const Towel = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>タオル（赤・青 1組）</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default Towel;