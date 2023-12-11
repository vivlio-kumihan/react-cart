import "../../styles/containers/ReadMoreLinks.sass";

const OfudaSenRyu = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>御神札 潜龍大神</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default OfudaSenRyu;