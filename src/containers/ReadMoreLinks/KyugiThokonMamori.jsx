import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const KyugiThokonMamori = ({ selectedItemId, handleBackClick }) => {
  return (
    <div 
      id={selectedItemId}
      className={`modal ${selectedItemId ? 'active' : ''}`}
    >
      <div className="container">
        <h1>闘魂守り（スポーツ守り）の由来</h1>
        <div className="product-introduction">
          <h2>『闘魂守』上達と安全の御神威を［スポーツの神様］からお受け下さい。</h2>
          <p>平安朝の昔から鞠の守護神として境内社の「精大明神」を蹴鞠道と和歌の宗家である公卿の飛鳥井家が、鎮守神として邸内に祀って代々尊崇されていました。</p>
          <p>この神様は球技を始め様々なスポーツの守護神でありまして、我が国唯一の「闘魂守」をご祈念申し上げて、お受けいただいています。プロ選手からクラブや学校の選手まで、多くの選手がお参りになった折りにはお求めになり、その御威光を身に付けて一層の励みとして活躍しておられます。</p>
          <p>この「闘魂守」は、角形□球技・一般（青・赤・白・黒）向けと同様に丸形○があります。チーム・カラーやユニフォーム色に合わせたり、好みの色・形を選んでいただけます。</p>
          <p>あなたご自身の『お守り』ですので大切にして、試合はもちろん、練習の時も肌に近い身に付けて、常にその御威光をお受けになり、怪我のない練習と悔いのない試合に臨んでくださいますれば、神様もお喜びになり、いっそうのご守護をいただけます。</p>
          <dl>
            <dt>『闘魂守』</dt>
            <dd><cite>※色、形に関しては社務所迄お尋ね下さい。</cite></dd>
            <dd><div className="price">初穂料：各700円</div></dd>
          </dl>
          <dl>
            <dt>スポーツ守 「青色」「白色」「赤色」</dt>
            <dd>サッカー・野球・ラクビー・バレーボール・ソフトボール・ゴルフ・テニス・ソフトテニス ・卓球・水球・バドミントン・ハンドボール・スカッシュ・ラクロス・ホッケー・ビリアード・陸上・水泳・柔道・剣道・空手・弓道・合気道・相撲・古武道・登山・スキー・フェンシング・カヌー・ボート・射撃・体操・セーリング・バトントワイリング・自転車 等々 スポーツ全般</dd>
          </dl>
          
          <h2>御守 球技闘魂守（角）</h2>
          <div className="photo-frame kyugi_thokon_mamori">
            <img src={Images.toukon_img01} alt="" />
          </div>
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>
    </div>
  );
};

export default KyugiThokonMamori;