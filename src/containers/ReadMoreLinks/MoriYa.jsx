import "../../styles/containers/ReadMoreLinks.sass";

const MoriYa = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>守り矢</h1>
      守り矢

      『守り矢』（自立式）
      初穂料：各1,500円
      「破魔矢」とも言われ、邪気を払い「願意」を叶えるものです。
      「必勝祈願」「スポーツ上達」「心願成就」「開運厄除」「家内安全」「社運隆昌」

      選手達とともに部室や遠征先試合のベンチ等に添えて、より一層の好いプレーをお祈り申し上げます。
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default MoriYa;