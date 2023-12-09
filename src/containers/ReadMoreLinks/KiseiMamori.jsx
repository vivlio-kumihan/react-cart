import "../../styles/containers/ReadMoreLinks.sass";

const KiseiMamori = ({ selectedItemId, handleBackClick }) => {
  return (
    <main 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>御守 祈星守</h1>
      <button onClick={handleBackClick}>戻る</button>
    </main>
  );
};

export default KiseiMamori;