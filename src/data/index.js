import image from "./img";

// 画像についてimg/image.jsで定義している。
// pidを属性（メソッド）にして管理する方針

const data = {
  products: [
    {
      pid: "o-fuda_family_safety",
      image: image.dummy,
      category: "御神札",
      name: "御神札",
      types: ["家内安全"],
      colors: [],
      price: 800,
    },
    {
      pid: "o_fuda_yaku_yoke",
      image: image.dummy,
      category: "御神札",
      name: "御神札",
      types: ["方除・魔除・赤札"],
      colors: [],
      price: 500,
    },
    {
      pid: "o_fuda_sen_ryu",
      image: image.dummy,
      category: "御神札",
      name: "御神札",
      types: ["潜龍大神"],
      colors: [],
      price: 800,
    },
    {
      pid: "thokon_tukusu_mamori",
      image: image.dummy,
      category: "御守",
      name: "闘魂尽す守（マグネット式）",
      types: [],
      colors: ["赤", "黒"],
      price: 800,
    },
    {
      pid: "kyugi_thokon_mamori",
      image: image.dummy,
      category: "御守",
      name: "球技闘魂守（角）",
      types: [],
      colors: ["青", "赤", "白"],
      price: 700,
    },
    {
      pid: "thokon_mamori_kado",
      image: image.dummy,
      category: "御守",
      name: "闘魂守（角）",
      types: [],
      colors: ["青", "赤", "白"],
      price: 700,
    },
    {
      pid: "thokon_mamori_kuroji",
      image: image.dummy,
      category: "御守",
      name: "闘魂守（角）",
      types: [],
      colors: ["黒地・青文字", "黒地・赤文字", "黒地・金文字"],
      price: 700,
    },
    {
      pid: "thokon_mamori_maru",
      image: image.dummy,
      category: "御守",
      name: "闘魂守（丸）",
      types: [],
      colors: ["青", "赤", "白"],
      price: 700,
    },
    {
      pid: "kisei_mamori",
      image: image.dummy,
      category: "御守",
      name: "祈星守",
      types: [],
      colors: [
        "青地・紐白",
        "青地・紐橙",
        "白地・紐白",
        "白地・紐橙",
        "白地・紐青",
        "黒地・紐青",
        "黒地・紐橙",
      ],
      price: 800,
    },
    {
      pid: "deau_wa",
      image: image.dummy,
      category: "授与品",
      name: "出逢う輪",
      types: [],
      colors: [],
      price: 800,
    },
    {
      pid: "mori_ya",
      image: image.dummy,
      category: "授与品",
      name: "守り矢",
      types: ["必勝祈願", "開運厄除", "社運隆昌", "心願成就"],
      colors: [],
      price: 1500,
    },
    {
      pid: "hama_ya",
      image: image.dummy,
      category: "授与品",
      name: "破魔矢",
      types: [],
      colors: [],
      price: 700,
    },
    {
      pid: "traffic_safety_sticker",
      image: image.dummy,
      category: "授与品",
      name: "交通安全ステッカー",
      types: [],
      colors: [],
      price: 700,
    },
    {
      pid: "traffic_safety_car_mamori",
      image: image.dummy,
      category: "授与品",
      name: "交通安全車体守",
      types: [],
      colors: [],
      price: 700,
    },
    {
      pid: "kanau_wa_gosyoku",
      image: image.dummy,
      category: "授与品",
      name: "『五色版』叶う輪",
      types: ["台紙：白黒", "台紙：緑"],
      colors: [],
      price: 800,
    },
    {
      pid: "kanau_wa",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪",
      types: [],
      colors: ["赤", "青", "黄", "緑"],
      price: 800,
    },
    {
      pid: "kanau_wa_soccer",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―サッカー、フットサル",
      types: [],
      colors: ["赤", "青", "黄", "緑"],
      price: 800,
    },
    {
      pid: "kanau_wa_baseball",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―野球、ソフトボール",
      types: [],
      colors: ["赤", "青", "黄", "緑"],
      price: 800,
    },
    {
      pid: "kanau_wa_volley",
      image: image.dummy,
      category: "授与品―バレー、ビーチバレー",
      name: "叶う輪",
      types: [],
      colors: ["赤", "青", "黄", "緑"],
      price: 800,
    },
    {
      pid: "kanau_wa_basket",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―バスケットボール",
      types: [],
      colors: ["赤", "青", "黄", "緑"],
      price: 800,
    },
    {
      pid: "kanau_wa_tennis",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―テニス、スカッシュ",
      types: [],
      colors: ["赤", "青", "黄", "緑"],
      price: 800,
    },
    {
      pid: "kanau_wa_badminton",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―バドミントン",
      types: [],
      colors: ["赤", "青", "黄", "緑"],
      price: 800,
    },
    {
      pid: "kanau_wa_table_tennis",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―卓球",
      types: [],
      colors: ["赤", "青", "黄", "緑"],
      price: 800,
    },
    {
      pid: "hair_band",
      image: image.dummy,
      category: "授与品",
      name: "ヘアバンド",
      types: [],
      colors: [
        "白",
        "赤",
        "黄",
        "紫",
        "黒",
        "せいじ",
        "ピンク",
        "青",
        "橙",
        "グリーン",
        "濃紺",
        "緑",
      ],
      price: 800,
    },
    {
      pid: "wrist_band",
      image: image.dummy,
      category: "授与品",
      name: "リストバンド",
      types: [],
      colors: ["青", "赤", "黒", "白", "黄"],
      price: 800,
    },
    {
      pid: "towel",
      image: image.dummy,
      category: "授与品",
      name: "タオル（赤・青 1組）",
      types: ["サイズ：タテ約30cm×ヨコ約40cm"],
      colors: [],
      price: 500,
    },
    {
      pid: "towel_long",
      image: image.dummy,
      category: "授与品",
      name: "ロングタオル",
      types: ["サイズ：タテ約36cm×ヨコ約84cm"],
      colors: [],
      price: 500,
    },
    {
      pid: "e_ma_sky",
      image: image.dummy,
      category: "授与品",
      name: "絵馬（心願成就）",
      types: ["銀河・黒", "宵の明星・青", "明の明星・茜"],
      colors: [],
      price: 800,
    },
    {
      pid: "e_ma",
      image: image.dummy,
      category: "授与品",
      name: "絵馬",
      types: ["スポーツ系", "恋愛成就", "文化系"],
      colors: [],
      price: 800,
    },
    {
      pid: "kanau_wa_hashi",
      image: image.dummy,
      category: "授与品",
      name: "叶う和箸",
      types: ["心願成就・黄", "除災招福・赤"],
      colors: [],
      price: 800,
    },
    {
      pid: "syuin_tyou",
      image: image.dummy,
      category: "授与品",
      name: "御朱印帳",
      types: ["御朱印帳", "限定御朱印帳"],
      colors: [],
      price: 2000,
    },
    {
      pid: "mari_dorei",
      image: image.dummy,
      category: "授与品",
      name: "まり土鈴",
      types: [],
      colors: [],
      price: 1500,
    },
    {
      pid: "ba_tei",
      image: image.dummy,
      category: "授与品",
      name: "馬蹄",
      types: [],
      colors: ["金", "銀"],
      price: 700,
    },
    {
      pid: "yui_syo",
      image: image.dummy,
      category: "授与品",
      name: "由緒（朱印付き）",
      types: [],
      colors: [],
      price: 300,
    },
  ],
};

export default data;