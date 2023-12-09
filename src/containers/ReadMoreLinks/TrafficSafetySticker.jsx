import "../../styles/containers/ReadMoreLinks.sass";

const TrafficSafetySticker = ({ selectedItemId, handleBackClick }) => {
  return (
    <main 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>交通安全ステッカー</h1>
      <button onClick={handleBackClick}>戻る</button>
    </main>
  );
};

export default TrafficSafetySticker;