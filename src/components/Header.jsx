import { useState } from "react";
import Logo from "../images/logo.png"
import "../styles/components/Header.sass";

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
        <a className="logo-space" href="<?php echo esc_url(home_url()); ?>">
          <img className="logo" src={Logo} alt="" />

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
              <li><a href="">交通（アクセス）</a></li>
              <li>|</li>
              <li><a href="<?php echo esc_url(home_url('/contact/')); ?>">お問い合わせ</a></li>
              <li className="language">
                <a href="">
                  <span>
                    {/* <img src="<?php echo get_template_directory_uri(); ?>/img/icon-global-middle.png" alt=""> */}
                  </span>
                  Language
                </a>
              </li>
            </ul>
          </div>
          <div className="lower">
            <ul className="menu">
              <li className="menu-item">
                白峯神宮について
                <ul className="sub-menu">
                  <li>
                    <a href="">白峯神宮 由緒</a>
                  </li>
                  <li>
                    <a href="">御祭神と御聖徳崇敬の意義</a>
                  </li>
                  <li>
                    <a href="">崇徳天皇御廟所</a>
                  </li>
                  <li>
                    <a href="">略年表</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                境内のご案内
                <ul className="sub-menu">
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                ご祈祷
                <ul className="sub-menu">
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                お守り・授与品
                <ul className="sub-menu">
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                年中行事・祭事
                <ul className="sub-menu">
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                お知らせ
                <ul className="sub-menu">
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <?php
            wp_nav_menu(array(
              'theme_location' => 'global-menu',
              'container'      => '',
              'depth'          => 2,
            ));
            ?> */}
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