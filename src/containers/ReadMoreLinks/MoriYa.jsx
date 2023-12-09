import "../../styles/containers/ReadMoreLinks.sass";

const MoriYa = ({ selectedItemId, handleBackClick }) => {
  return (
    <main 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>守り矢</h1>
      <button onClick={handleBackClick}>戻る</button>
    </main>
  );
};

export default MoriYa;