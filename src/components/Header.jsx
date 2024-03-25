import { useState } from "react";
import "../styles/components/Header.sass";
import Logo from "../images/logo.png"
import GlobePict from "../images/icon-global-middle.png"

const Header = () => {
  // headerのglobal-menu pull-down-list
  const pullDownList = document.querySelectorAll(".global-menu .lower > .menu > .menu-item");

  pullDownList.forEach(elem => {
    elem.addEventListener("mouseenter", () => {
      elem.classList.add("active");
    });
    elem.addEventListener("mouseleave", () => {
      elem.classList.remove("active");
    });
  });

  const [flag, setFlag] = useState(false);
  const handleSetFlag = () => {
    setFlag(present => !present);
  };

  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  // lang
  // HTMLバージョンから持ってきたもの　このままでは使えない。
  // とりあえずクラスの付け替えでかわす。
  // // メニューを開く関数
  // const slideDown = (el) => {
  //   console.log(el);
  //   el.style.height = 'auto'; //いったんautoに
  //   let h = el.offsetHeight; //autoにした要素から高さを取得
  //   el.style.height = h + 'px';
  //   el.animate([ //高さ0から取得した高さまでのアニメーション
  //     { height: 0 },
  //     { height: h + 'px' }
  //   ], {
  //     duration: 300, //アニメーションの時間（ms）
  //   });
  // };

  // // メニューを閉じる関数
  // const slideUp = (el) => {
  //   el.style.height = 0;
  // };

  // const langBtn = document.getElementById("language");
  // langBtn.addEventListener("click", (e) => {
  //   e.target.parentNode.classList.toggle("active");
  //   const getUl = langBtn.nextElementSibling;
  //   if (e.target.parentNode.classList.contains("active")) {
  //     slideDown (getUl)
  //   } else {
  //     slideUp(getUl);
  //   }
  // });

  // // ハンバーガー・メニュー
  // // ボタン
  // const menuToggleBtn = document.getElementById('menu-toggle-btn');
  // const globalMenu = document.getElementById('global-menu');
  // menuToggleBtn &&
  //   console.log(menuToggleBtn);
  //   console.log(globalMenu);
  //   menuToggleBtn.addEventListener('click', function() {
  //     // ボタンの表示を切り替える。
  //     this.classList.toggle('flag')
  //     // メニューを出現させる。
  //     globalMenu.classList.toggle('flag');
  //   });

  return (
    <header id="header">
      <div className="wrapper">
        <a className="logo-space" href="https://shiraminejingu.or.jp/">
          <img className="logo" src={Logo} alt="白峯神宮のロゴ" />
          <div>
            <p>スポーツの守護神<span>・</span><br />武道上達の神<span>・</span><br />上昇気運氣運の神</p>
            <p className="shrine-name">白峯神宮</p>
          </div>
        </a>
        <nav 
          id="global-menu" 
          className={`global-menu ${flag ? "flag" : ""}`}
        >
          <div className="upper">
            <ul>
              <li><a href="https://shiraminejingu.or.jp/access/">交通（アクセス）</a></li>
              <li>|</li>
              <li><a href="https://shiraminejingu.or.jp/contact/">お問い合わせ</a></li>
              {/* 
              <li className="language">
                <a href="https://shiraminejingu.or.jp/english/">
                  <span>
                    <img src={GlobePict} alt="" />
                  </span>
                  Language
                </a>
              </li> */}
              <li className={`language ${isActive ? 'active' : ''}`}>
                <button id="language" type="button" onClick={handleButtonClick}>
                  <span>
                    <img src={GlobePict} alt="グローバルなイメージを想起させるピクトグラム" />
                  </span>
                  Language
                </button>
                <ul>
                  <li><a href="https://shiraminejingu.or.jp">日本語</a></li>
                  <li><a href="https://shiraminejingu.or.jp/english/">English</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="lower">
            <ul className="menu">
              <li className="menu-item">
                白峯神宮について
                <ul className="sub-menu">
                  <li>
                    <a href="https://shiraminejingu.or.jp/about/history/">白峯神宮 由緒</a>
                  </li>
                  <li>
                    <a href="https://shiraminejingu.or.jp/about/gosaizin/">御祭神と御聖徳崇敬の意義</a>
                  </li>
                  <li>
                    <a href="https://shiraminejingu.or.jp/about/gobyo/">崇徳天皇御廟所</a>
                  </li>
                  <li>
                    <a href="https://shiraminejingu.or.jp/about/chronology/">略年表</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="https://shiraminejingu.or.jp/guide-shrine/">境内のご案内</a>
              </li>
              <li className="menu-item">
                <a href="https://shiraminejingu.or.jp/prayer/">ご祈祷</a>
              </li>
              <li className="menu-item">
                <a href="https://shiraminejingu.or.jp/omamori/">お守り・授与品</a>
              </li>
              <li className="menu-item">
                <a href="https://shiraminejingu.or.jp/annual-event/">年中行事・祭事</a>
              </li>
              <li className="menu-item">
                <a href="https://shiraminejingu.or.jp/information/">お知らせ</a>
              </li>
            </ul>
          </div>
        </nav>
        <button 
          id="menu-toggle-btn" 
          className={`menu-toggle-btn ${flag ? "flag" : ""}`}
          onClick={handleSetFlag}
        >
          <span></span><span></span><span></span>
        </button>
        <a href="#" className="to-page-top">
          <div className="page-top-arrow"></div>
        </a>
      </div>
    </header>
  );
};

export default Header;