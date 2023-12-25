import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const MoriYa = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>守り矢</h1>
        <div className="product-introduction">
          <dl>
            <dt>『守り矢』（自立式）</dt>
            <dd><div className="price">初穂料：各1,500円</div></dd>
            <dd>
              <cite>※「破魔矢」とも言われ、邪気を払い「願意」を叶えるものです。</cite><br />
              <cite>※<strong>「必勝祈願」「スポーツ上達」「心願成就」「開運厄除」「家内安全」「社運隆昌」</strong></cite>
            </dd>
          </dl>
          <div className="photo-frame mori_ya">
            <img src={Images.mori_ya} alt="" />
          </div>          
          <p>選手達とともに部室や遠征先試合のベンチ等に添えて、より一層の好いプレーをお祈り申し上げます。</p>
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>
    </div>
  );
};

export default MoriYa;