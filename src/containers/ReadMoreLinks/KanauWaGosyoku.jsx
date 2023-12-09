import "../../styles/containers/ReadMoreLinks.sass";

const KanauWaGosyoku = ({ selectedItemId, handleBackClick }) => {
  return (
    <main 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>『五色版』叶う輪</h1>
      <button onClick={handleBackClick}>戻る</button>
    </main>
  );
};

export default KanauWaGosyoku;