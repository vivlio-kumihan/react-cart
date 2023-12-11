import "../../styles/containers/ReadMoreLinks.sass";

const OfudaFamilySafety = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>御神札 家内安全</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default OfudaFamilySafety;