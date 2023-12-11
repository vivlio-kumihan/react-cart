import "../../styles/containers/ReadMoreLinks.sass";

const TowelLong = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>ロングタオル</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default TowelLong;