import "../../styles/containers/ReadMoreLinks.sass";

const SyuinChou = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>御朱印帳</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default SyuinChou;