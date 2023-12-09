import "../../styles/containers/ReadMoreLinks.sass";

const KanauWaTableTennis = ({ selectedItemId, handleBackClick }) => {
  return (
    <main 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>叶う輪―卓球</h1>
      <button onClick={handleBackClick}>戻る</button>
    </main>
  );
};

export default KanauWaTableTennis;