import "../../styles/containers/ReadMoreLinks.sass";

const KanauWaTennis = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>叶う輪―テニス、スカッシュ</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default KanauWaTennis;