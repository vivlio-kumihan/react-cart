import "../../styles/containers/ReadMoreLinks.sass";

const ThokonTukusuMamori = ({ selectedItemId, handleBackClick }) => {
  return (
    <main 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>御守 闘魂尽す守（マグネット式）</h1>
      <button onClick={handleBackClick}>戻る</button>
    </main>
  );
};

export default ThokonTukusuMamori;