import "../../styles/containers/ReadMoreLinks.sass";

const YuiSyo = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>由緒（朱印付き）</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default YuiSyo;