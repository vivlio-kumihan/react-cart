import "../../styles/containers/ReadMoreLinks.sass";

const KanauWaSoccer = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <h1>叶う輪―サッカー、フットサル</h1>
      叶う輪

      叶う輪【根性育成】（青、緑、赤、黄）
      手首や普段に使用するバッグ等好きな所につけてモチベーション、テンションを向上し、練習の成果を発揮し願いを「叶え」ていただくものです。
      初穂料：各800円

      各種ボールスタイルとワイヤーカラー

      競技に使用するボールに特徴があるサッカー、野球、バレー、バスケ、テニス、バドミントン、卓球を選抜しました。また、その他の球技や武道、陸上競技や水泳といったボールを使用しない競技には“スポーツ全般”がございます。

      “五色版叶う輪”
      <button onClick={handleBackClick}>戻る</button>
    </div>
  );
};

export default KanauWaSoccer;