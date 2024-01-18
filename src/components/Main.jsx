import { useState, useEffect, useRef } from "react";
import Product from "./Product";
import AccordionMenu from "../containers/AccordionMenu";
import "../styles/components/Main.sass";

import OfudaFamilySafety from "../containers/ReadMoreLinks/OfudaFamilySafety"
import OfudaYakuYoke from "../containers/ReadMoreLinks/OfudaYakuYoke"
import OfudaSenRyu from "../containers/ReadMoreLinks/OfudaSenRyu"
import ThokonTukusuMamori from "../containers/ReadMoreLinks/ThokonTukusuMamori"
import KyugiThokonMamori from "../containers/ReadMoreLinks/KyugiThokonMamori"
import ThokonMamoriKado from "../containers/ReadMoreLinks/ThokonMamoriKado"
import ThokonMamoriMaru from "../containers/ReadMoreLinks/ThokonMamoriMaru"
import KiseiMamori from "../containers/ReadMoreLinks/KiseiMamori"
import DeauWa from "../containers/ReadMoreLinks/DeauWa"
import MoriYa from "../containers/ReadMoreLinks/MoriYa"
import HamaYa from "../containers/ReadMoreLinks/HamaYa"
import TrafficSafetySticker from "../containers/ReadMoreLinks/TrafficSafetySticker"
import TrafficSafetyCarMamori from "../containers/ReadMoreLinks/TrafficSafetyCarMamori"
import KanauWaGosyoku from "../containers/ReadMoreLinks/KanauWaGosyoku"
import KanauWaSoccer from "../containers/ReadMoreLinks/KanauWaSoccer"
import KanauWaBaseball from "../containers/ReadMoreLinks/KanauWaBaseball"
import KanauWaVolley from "../containers/ReadMoreLinks/KanauWaVolley"
import KanauWaBasket from "../containers/ReadMoreLinks/KanauWaBasket"
import KanauWaTennis from "../containers/ReadMoreLinks/KanauWaTennis"
import KanauWaBadminton from "../containers/ReadMoreLinks/KanauWaBadminton"
import KanauWaTableTennis from "../containers/ReadMoreLinks/KanauWaTableTennis"
import KanauWaAll from "../containers/ReadMoreLinks/KanauWaAll"
import HairBand from "../containers/ReadMoreLinks/HairBand"
import WristBand from "../containers/ReadMoreLinks/WristBand"
import Towel from "../containers/ReadMoreLinks/Towel"
import TowelLong from "../containers/ReadMoreLinks/TowelLong"
import EmaSky from "../containers/ReadMoreLinks/EmaSky"
import Ema from "../containers/ReadMoreLinks/Ema"
import KanauWaHashi from "../containers/ReadMoreLinks/KanauWaHashi"
import SyuinChou from "../containers/ReadMoreLinks/SyuinChou"
import MariDorei from "../containers/ReadMoreLinks/MariDorei"
import BaTei from "../containers/ReadMoreLinks/BaTei"
import YuiSyo from "../containers/ReadMoreLinks/YuiSyo"

const Main = ({ 
  dataList, 
  cartItems, 
  setCartItems, 
  onAddCart, 
  onRemoveCart,
  nameValueZero, 
  hasItem,
  }) => {

  const [selectedItemId, setSelectedItemId] = useState(null);
  const handleItemId = (itemPid) => {
    setSelectedItemId(itemPid);
  };
  const handleBackClick = () => {
    setSelectedItemId(null);
  }

  // スクロール・アニメーション　ふわっと現れる
  const [isGraduallyAppearActive, setGraduallyAppearActive] = useState(false);
  const targetElemRef = useRef(null);
  useEffect(() => {
    const handleScrollAppear = () => {
      const targetElem = targetElemRef.current;
      if (targetElem) {
        const windowHight = window.innerHeight;
        const setHight = Math.abs(windowHight - (targetElem.clientHeight / 1.5));
        const getElemDistance = targetElem.getBoundingClientRect().top;
        setGraduallyAppearActive(setHight > getElemDistance);
      }
    };
    document.addEventListener("scroll", handleScrollAppear);
    return () => {
      document.removeEventListener("scroll", handleScrollAppear);
    };
  }, []);

  return (
    <>
    {/* <div className="wrapper" ref={targetElemRef}> */}
    <div className={`wrapper ${isGraduallyAppearActive ? "active" : ""}`} ref={targetElemRef}>
      <h3>お守り・授与品の<br className="smp-br" />ご案内</h3>
      <div className="head-line">
        <div className="copy">
          <p>御神札やお守り・授与品は神社に参拝いただき御社頭でお受けいただくのが本来ですが、<br className="line-break" />どうしても諸事情や遠方で直接御参りできない方は下記よりお求めください。<br />お求めの数量を入れ、『一覧に追加』ボタンを押してください。最後に画面右上の『一覧<span className="fa-solid fa-rectangle-list"></span>開く』でお申込み画面へ進みます。</p>
        </div>
      </div>
      
      <ul className="data-wrapper">
        {
          dataList.map((data) => (
            <li key={data.pid}>
              <Product 
                data={data}
                {...data}
                cartItems={cartItems}
                setCartItems={setCartItems}
                onAddCart={onAddCart}
                onRemoveCart={onRemoveCart}
                nameValueZero={nameValueZero}
                hasItem={hasItem}
                handleItemId={handleItemId}
              />
            </li>
          ))
        }
      </ul>
    </div>

    <div className="read-more-links">
      <OfudaFamilySafety 
        selectedItemId={selectedItemId === "ofuda_family_safety" ? "ofuda_family_safety" : null} 
        handleBackClick={handleBackClick}
      />
      <OfudaYakuYoke 
        selectedItemId={selectedItemId === "ofuda_yaku_yoke" ? "ofuda_yaku_yoke" : null} 
        handleBackClick={handleBackClick}
      />
      <OfudaSenRyu 
        selectedItemId={selectedItemId === "ofuda_sen_ryu" ? "ofuda_sen_ryu" : null} 
        handleBackClick={handleBackClick}
      />
      <ThokonTukusuMamori 
        selectedItemId={selectedItemId === "thokon_tukusu_mamori" ? "thokon_tukusu_mamori" : null} 
        handleBackClick={handleBackClick}
      />
      <KyugiThokonMamori 
        selectedItemId={selectedItemId === "kyugi_thokon_mamori" ? "kyugi_thokon_mamori" : null} 
        handleBackClick={handleBackClick}
      />
      <ThokonMamoriKado 
        selectedItemId={selectedItemId === "thokon_mamori_kado" ? "thokon_mamori_kado" : null} 
        handleBackClick={handleBackClick}
      />
      <ThokonMamoriMaru 
        selectedItemId={selectedItemId === "thokon_mamori_maru" ? "thokon_mamori_maru" : null} 
        handleBackClick={handleBackClick}
      />
      <KiseiMamori 
        selectedItemId={selectedItemId === "kisei_mamori" ? "kisei_mamori" : null} 
        handleBackClick={handleBackClick}
      />
      <DeauWa 
        selectedItemId={selectedItemId === "deau_wa" ? "deau_wa" : null} 
        handleBackClick={handleBackClick}
      />
      <MoriYa 
        selectedItemId={selectedItemId === "mori_ya" ? "mori_ya" : null} 
        handleBackClick={handleBackClick}
      />
      <HamaYa 
        selectedItemId={selectedItemId === "hama_ya" ? "hama_ya" : null} 
        handleBackClick={handleBackClick}
      />
      <TrafficSafetySticker 
        selectedItemId={selectedItemId === "traffic_safety_sticker" ? "traffic_safety_sticker" : null} 
        handleBackClick={handleBackClick}
      />
      <TrafficSafetyCarMamori 
        selectedItemId={selectedItemId === "traffic_safety_car_mamori" ? "traffic_safety_car_mamori" : null} 
        handleBackClick={handleBackClick}
      />
      <KanauWaGosyoku 
        selectedItemId={selectedItemId === "kanau_wa_gosyoku" ? "kanau_wa_gosyoku" : null} 
        handleBackClick={handleBackClick}
      />
      <KanauWaSoccer 
        selectedItemId={selectedItemId === "kanau_wa_soccer" ? "kanau_wa_soccer" : null} 
        handleBackClick={handleBackClick}
      />
      <KanauWaBaseball 
        selectedItemId={selectedItemId === "kanau_wa_baseball" ? "kanau_wa_baseball" : null} 
        handleBackClick={handleBackClick}
      />
      <KanauWaVolley 
        selectedItemId={selectedItemId === "kanau_wa_volley" ? "kanau_wa_volley" : null} 
        handleBackClick={handleBackClick}
      />
      <KanauWaBasket 
        selectedItemId={selectedItemId === "kanau_wa_basket" ? "kanau_wa_basket" : null} 
        handleBackClick={handleBackClick}
      />
      <KanauWaTennis 
        selectedItemId={selectedItemId === "kanau_wa_tennis" ? "kanau_wa_tennis" : null} 
        handleBackClick={handleBackClick}
      />
      <KanauWaBadminton 
        selectedItemId={selectedItemId === "kanau_wa_badminton" ? "kanau_wa_badminton" : null} 
        handleBackClick={handleBackClick}
      />
      <KanauWaTableTennis 
        selectedItemId={selectedItemId === "kanau_wa_table_tennis" ? "kanau_wa_table_tennis" : null} 
        handleBackClick={handleBackClick}
      />
      <KanauWaAll 
        selectedItemId={selectedItemId === "kanau_wa_all" ? "kanau_wa_all" : null} 
        handleBackClick={handleBackClick}
      />
      <HairBand 
        selectedItemId={selectedItemId === "hair_band" ? "hair_band" : null} 
        handleBackClick={handleBackClick}
      />
      <WristBand 
        selectedItemId={selectedItemId === "wrist_band" ? "wrist_band" : null} 
        handleBackClick={handleBackClick}
      />
      <Towel 
        selectedItemId={selectedItemId === "towel" ? "towel" : null} 
        handleBackClick={handleBackClick}
      />
      <TowelLong 
        selectedItemId={selectedItemId === "towel_long" ? "towel_long" : null} 
        handleBackClick={handleBackClick}
      />
      <EmaSky 
        selectedItemId={selectedItemId === "ema_sky" ? "ema_sky" : null} 
        handleBackClick={handleBackClick}
      />
      <Ema 
        selectedItemId={selectedItemId === "ema" ? "ema" : null} 
        handleBackClick={handleBackClick}
      />
      <KanauWaHashi 
        selectedItemId={selectedItemId === "kanau_wa_hashi" ? "kanau_wa_hashi" : null} 
        handleBackClick={handleBackClick}
      />
      <SyuinChou 
        selectedItemId={selectedItemId === "syuin_chou" ? "syuin_chou" : null} 
        handleBackClick={handleBackClick}
      />
      <MariDorei 
        selectedItemId={selectedItemId === "mari_dorei" ? "mari_dorei" : null} 
        handleBackClick={handleBackClick}
      />
      <BaTei 
        selectedItemId={selectedItemId === "ba_tei" ? "ba_tei" : null} 
        handleBackClick={handleBackClick}
      />
      <YuiSyo 
        selectedItemId={selectedItemId === "yui_syo" ? "yui_syo" : null} 
        handleBackClick={handleBackClick}
      />
    </div>
    </>
  );
};

export default Main;