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
        <a className="logo-space" href="<?php echo esc_url(home_url()); ?>">
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
            <ul>
              <li>交通（アクセス）</li>
              <li>|</li>
              <li>お問い合わせ</li>
            </ul>
            <ul>
              <li><a href="" className="icon-instagram"></a></li>
              <li><a href="" className="icon-twitter"><img src={XtwitterIcon} alt="" /></a></li>
            </ul>
          </div>

          <div className="footer-center-links">
            <ul>
              <li>
                <h2>白峯神宮について</h2>
                <div><a href="">白峯神宮 由緒</a></div>
                <div><a href="">御祭神と御聖徳崇敬の意義</a></div>
                <div><a href="">崇徳天皇御廟所</a></div>
                <div><a href="">略年表</a></div>
              </li>
              <li>
                <h2>境内のご案内</h2>
                <div><a href="">地主社</a></div>
                <div><a href="">潜龍社</a></div>
                <div><a href="">伴緒社</a></div>
                <div><a href="">蹴鞠碑</a></div>
                <div><a href="">手水舎</a></div>
                <div><a href="">霊木</a></div>
              </li>
              <li>
                <h2><a href="">ご祈祷</a></h2>
              </li>
              <li>
                <h2>お守り・授与品</h2>
                <div><a href="">一覧</a></div>
              </li>
            </ul>
            <ul>
              <li>
                <h2>年中行事・祭事</h2>
                <div><a href="">春季例大祭&emsp;淳仁天皇祭</a></div>
                <div><a href="">蹴鞠奉納</a></div>
                <div><a href="">子供の日<br />祭武道繁栄祭・古武道奉納奉告祭</a></div>
                <div><a href="">茅の輪くぐり神事</a></div>
                <div><a href="">精大明神例祭「七夕祭」</a></div>
                <div><a href="">小町をどり</a></div>
                <div><a href="">春季例大祭&emsp;崇徳天皇祭</a></div>
                <div><a href="">薪能</a></div>
                <div><a href="">観月祭（献燈講祭）</a></div>
                <div><a href="">七五三詣</a></div>
                <div><a href="">献茶祭</a></div>
                <div><a href="">御火焚祭</a></div>
              </li>
              <li>
                <h2>お知らせ／トピックス</h2>
                <div><a href="">一覧</a></div>
              </li>
            </ul>
          </div>

          <div className="footer-right-links">
            <ul className="banner">
              <li><a href=""><img src={BannerImg01} alt="" /></a></li>
              <li><a href=""><img src={BannerImg02} alt="" /></a></li>
              <li><a href=""><img src={BannerImg03} alt="" /></a></li>
              <li><a href=""><img src={BannerImg04} alt="" /></a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">Copyright &#169; SHIRAMINE JINGU SHRINE All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;