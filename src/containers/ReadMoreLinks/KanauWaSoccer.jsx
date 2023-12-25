import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const KanauWaSoccer = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>叶う輪―サッカー、フットサル</h1>
        <div className="product-introduction">
          <dl>
            <dt>叶う輪【根性育成】（青、緑、赤、黄）</dt>
            <dd>手首や普段に使用するバッグ等好きな所につけてモチベーション、テンションを向上し、練習の成果を発揮し願いを「叶え」ていただくものです。</dd>
            <dd><div className="price">初穂料：各800円</div></dd>
          </dl>
          <div className="photo-frame mori_ya">
            <img src={Images.toukon_img02} alt="" />
          </div>          
          <figure className="photo-frame mori_ya">
            <figcaption>各種ボールスタイルとワイヤーカラー</figcaption>
            <img src={Images.toukon_img03} alt="" />
          </figure>          
          <p>競技に使用するボールに特徴があるサッカー、野球、バレー、バスケ、テニス、バドミントン、卓球を選抜しました。また、その他の球技や武道、陸上競技や水泳といったボールを使用しない競技には“スポーツ全般”がございます。</p>
          <h2 className="first-but-middle-paragraph text-align-center">“五色版叶う輪”</h2>
          <div className="photo-frame mori_ya">
            <img src={Images.kanau_wa_all} alt="" />
          </div>          
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>
    </div>
  );
};

export default KanauWaSoccer;