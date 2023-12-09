import "../../styles/containers/ReadMoreLinks.sass";

const EmaSky = ({ selectedItemId, handleBackClick }) => {
  return (
    <main 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>絵馬（心願成就）</h1>
      <button onClick={handleBackClick}>戻る</button>
    </main>
  );
};

export default EmaSky;