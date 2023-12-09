import "../../styles/containers/ReadMoreLinks.sass";

const KanauWaBadminton = ({ selectedItemId, handleBackClick }) => {
  return (
    <main 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>叶う輪―バドミントン</h1>
      <button onClick={handleBackClick}>戻る</button>
    </main>
  );
};

export default KanauWaBadminton;