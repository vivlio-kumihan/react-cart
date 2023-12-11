import "../../styles/containers/ReadMoreLinks.sass";

const TrafficSafetyCarMamori = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>交通安全車体守</h1>
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default TrafficSafetyCarMamori;