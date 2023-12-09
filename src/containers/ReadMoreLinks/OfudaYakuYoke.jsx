import "../../styles/containers/ReadMoreLinks.sass";

const OfudaYakuYoke = ({ selectedItemId, handleBackClick }) => {
  return (
    <main 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>御神札 方除・魔除・赤札</h1>
      <button onClick={handleBackClick}>戻る</button>
    </main>
  );
};

export default OfudaYakuYoke;