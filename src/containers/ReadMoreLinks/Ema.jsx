import "../../styles/containers/ReadMoreLinks.sass";

const Ema = ({ selectedItemId, handleBackClick }) => {
  return (
    <main 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>絵馬</h1>
      <button onClick={handleBackClick}>戻る</button>
    </main>
  );
};

export default Ema;