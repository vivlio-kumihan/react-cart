import "../styles/components/Footer.sass";
import LogoShiramine from "../images/logo_siramine.png"
import Logo from "../images/logo.png"
import XtwitterIcon from "../images/x-twitter.svg"
import BannerImg01 from "../images/banner-01.png";
import BannerImg02 from "../images/banner-02.png";
import BannerImg03 from "../images/banner-03.png";
import BannerImg04 from "../images/banner-04.png";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <a className="logo-space" href="https://shiraminejingu.or.jp/">
          <img className="logo" src={Logo} alt="" />
          <p>スポーツの守護神・武道上達の神・上昇気運氣運の神<br /><span>白峯神宮</span></p>
        </a>
        <div className="wrapper-grid">
          <div className="footer-left-links">
            <ul>
              <li>【鎮座地】<br />〒602-0054 京都市上京区飛鳥井町261番地</li>
              <li className="access-tel-fax"><span>電話</span>：<a href="tel:075-441-3810">075-441-3810</a></li>
              <li className="access-tel-fax"><span className="en-tume01">FAX</span>：075-441-3820</li>
            </ul>
            <ul class="open-close-time">
              <li>参拝時間： 8時から17時</li>
              <li>授与所開所時間： 8時から16時30分</li>
            </ul>            
            <ul>
              <li><a href="https://shiraminejingu.or.jp/access/">交通（アクセス）</a></li>
              <li>|</li>
              <li><a href="https://shiraminejingu.or.jp/contact/">お問い合わせ</a></li>
            </ul>
            <ul>
              <li><a href="https://www.instagram.com/shiramine_jingu/" className="icon-instagram"></a></li>
              <li><a href="https://twitter.com/shiramine_jingu/" className="icon-twitter"><img src={XtwitterIcon} alt="" /></a></li>
            </ul>
          </div>

          <div className="footer-center-links">
            <ul>
              <li>
                <h2>白峯神宮について</h2>
                <div><a href="https://shiraminejingu.or.jp/about/history/">白峯神宮 由緒</a></div>
                <div><a href="https://shiraminejingu.or.jp/about/gosaizin/">御祭神と御聖徳崇敬の意義</a></div>
                <div><a href="https://shiraminejingu.or.jp/about/gobyo/">崇徳天皇御廟所</a></div>
                <div><a href="https://shiraminejingu.or.jp/about/chronology/">略年表</a></div>
              </li>
              <li>
                <h2><a href="https://shiraminejingu.or.jp/guide-shrine/">境内のご案内</a></h2>
                <div><a href="https://shiraminejingu.or.jp/guide-shrine/">地主社</a></div>
                <div><a href="https://shiraminejingu.or.jp/guide-shrine/">潜龍社</a></div>
                <div><a href="https://shiraminejingu.or.jp/guide-shrine/">伴緒社</a></div>
                <div><a href="https://shiraminejingu.or.jp/guide-shrine/">蹴鞠碑</a></div>
                <div><a href="https://shiraminejingu.or.jp/guide-shrine/">手水舎</a></div>
                <div><a href="https://shiraminejingu.or.jp/guide-shrine/">霊木</a></div>
              </li>
              <li>
                <h2><a href="https://shiraminejingu.or.jp/prayer/">ご祈祷</a></h2>
              </li>
              <li>
                <h2>お守り・授与品</h2>
                <div><a href="https://shiraminejingu.or.jp/omamori/">一覧</a></div>
              </li>
            </ul>
            <ul>
              <li>
                <h2>年中行事・祭事</h2>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">春季例大祭&emsp;淳仁天皇祭</a></div>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">蹴鞠奉納</a></div>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">子供の日<br />祭武道繁栄祭・古武道奉納奉告祭</a></div>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">茅の輪くぐり神事</a></div>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">精大明神例祭「七夕祭」</a></div>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">小町をどり</a></div>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">春季例大祭&emsp;崇徳天皇祭</a></div>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">薪能</a></div>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">観月祭（献燈講祭）</a></div>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">七五三詣</a></div>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">献茶祭</a></div>
                <div><a href="https://shiraminejingu.or.jp/annual-event/">御火焚祭</a></div>
              </li>
              <li>
                <h2>お知らせ／トピックス</h2>
                <div><a href="https://shiraminejingu.or.jp/information/">一覧</a></div>
              </li>
            </ul>
          </div>

          <div className="footer-right-links">
            <ul className="banner">
              <li><a href="http://www.arimura.tv/" target="_blank"><img src={BannerImg03} alt="" /></a></li>
              <li><a href="https://www.eonet.ne.jp/~hakamaya/" target="_blank"><img src={BannerImg01} alt="" /></a></li>
              <li><a href="https://www.oe-co.jp/" target="_blank"><img src={BannerImg02} alt="" /></a></li>
              <li><a href="https://www.kodama-sekizai.net/" target="_blank"><img src={BannerImg04} alt="" /></a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">Copyright &#169; SHIRAMINE JINGU SHRINE All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;