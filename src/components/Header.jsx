import Logo from "../images/logo.png"
import "../styles/components/Header.sass";

const Header = () => {
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
        <nav id="global-menu" className="global-menu">
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
            {/* <?php
            wp_nav_menu(array(
              'theme_location' => 'global-menu',
              'container'      => '',
              'depth'          => 2,
            ));
            ?> */}
          </div>
        </nav>
        <button id="menu-toggle-btn" className="menu-toggle-btn">
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