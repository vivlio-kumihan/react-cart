import image from "./img/image";

// 画像についてimg/image.jsで定義している。
// pidを属性（メソッド）にして管理する方針

const data = {
  products: [
    {
      pid: "o-fuda_family_safety",
      image: image.dummy,
      category: "御神札",
      name: "御神札",
      type: ["家内安全"],
      color: [],
      price: 800
    },
    {
      pid: "o_fuda_yaku_yoke",
      image: image.dummy,
      category: "御神札",
      name: "御神札",
      type: ["方除・魔除・赤札"],
      color: [],
      price: 500
    },
    {
      pid: "o_fuda_sen_ryu",
      image: image.dummy,
      category: "御神札",
      name: "御神札",
      type: ["潜龍大神"],    
      color: [],
      price: 800
    },
    {
      pid: "thokon_tukusu_mamori",
      image: image.dummy,
      category: "御守",
      name: "闘魂尽す守（マグネット式）",
      type: [],  
      color: [
        { name: "赤", count: "count1", setCount: "setCount1" },
        { name: "黒", count: "count2", setCount: "setCount2" },
      ],  
      price: 800
    },
    {
      pid: "kyugi_thokon_mamori",
      image: image.dummy,
      category: "御守",
      name: "球技闘魂守（角）",
      type: [],    
      color: [
        { name: "青", count: "count1", setCount: "setCount1" },
        { name: "赤", count: "count2", setCount: "setCount2" },
        { name: "白", count: "count3", setCount: "setCount3" },
      ],
      price: 700
    },
    {
      pid: "thokon_mamori_kado",
      image: image.dummy,
      category: "御守",
      name: "闘魂守（角）",
      type: [],    
      color: [
        { name: "青", count: "count1", setCount: "setCount1" },
        { name: "赤", count: "count2", setCount: "setCount2" },
        { name: "白", count: "count3", setCount: "setCount3" },
      ],
      price: 700
    },
    {
      pid: "thokon_mamori_kuroji",
      image: image.dummy,
      category: "御守",
      name: "闘魂守（角）",
      type: [],
      color: [
        { name: "黒地・青文字", count: "count1", setCount: "setCount1" },
        { name: "黒地・赤文字", count: "count2", setCount: "setCount2" },
        { name: "黒地・金文字", count: "count3", setCount: "setCount3" },
      ],
      price: 700
    },
    {
      pid: "thokon_mamori_maru",
      image: image.dummy,
      category: "御守",
      name: "闘魂守（丸）",
      type: [],
      color: [
        { name: "青", count: "count1", setCount: "setCount1" },
        { name: "赤", count: "count2", setCount: "setCount2" },
        { name: "白", count: "count3", setCount: "setCount3" },
      ],    
      price: 700
    },
    {
      pid: "kisei_mamori",
      image: image.dummy,
      category: "御守",
      name: "祈星守",
      type: [],
      color: [
        { name: "青地・紐白", count: "count1", setCount: "setCount1" },
        { name: "青地・紐橙", count: "count2", setCount: "setCount2" },
        { name: "白地・紐白", count: "count3", setCount: "setCount3" },
        { name: "白地・紐橙", count: "count4", setCount: "setCount4" },
        { name: "白地・紐青", count: "count5", setCount: "setCount5" },
        { name: "黒地・紐青", count: "count6", setCount: "setCount6" },
        { name: "黒地・紐橙", count: "count7", setCount: "setCount7" },
      ],   
      price: 800
    },
    {
      pid: "deau_wa",
      image: image.dummy,
      category: "授与品",
      name: "出逢う輪",
      type: [],    
      color: [],
      price: 800
    },
    {
      pid: "mori_ya",
      image: image.dummy,
      category: "授与品",
      name: "守り矢",
      type: ["必勝祈願", "開運厄除", "社運隆昌", "心願成就"],    
      color: [],
      price: 1500
    },
    {
      pid: "hama_ya",
      image: image.dummy,
      category: "授与品",
      name: "破魔矢",
      type: [],    
      color: [],
      price: 700
    },
    {
      pid: "traffic_safety_sticker",
      image: image.dummy,
      category: "授与品",
      name: "交通安全ステッカー",
      type: [],    
      color: [],
      price:700 
    },
    {
      pid: "traffic_safety_car_mamori",
      image: image.dummy,
      category: "授与品",
      name: "交通安全車体守",
      type: [],    
      color: [],
      price: 700
    },
    {
      pid: "kanau_wa_gosyoku",
      image: image.dummy,
      category: "授与品",
      name: "『五色版』叶う輪",
      type: ["台紙：白黒", "台紙：緑"],    
      color: [],
      price: 800
    },
    {
      pid: "kanau_wa",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪",
      type: [],   
      color: [
        { name: "赤", count: "count1", setCount: "setCount1" },
        { name: "青", count: "count2", setCount: "setCount2" },
        { name: "黄", count: "count3", setCount: "setCount3" },
        { name: "緑", count: "count4", setCount: "setCount4" },
      ],    
      price: 800
    },
    {
      pid: "kanau_wa_soccer",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―サッカー、フットサル",
      type: [],   
      color: [
        { name: "青地・紐白", count: "count1", setCount: "setCount1" },
        { name: "青地・紐橙", count: "count2", setCount: "setCount2" },
        { name: "白地・紐白", count: "count3", setCount: "setCount3" },
        { name: "白地・紐橙", count: "count4", setCount: "setCount4" },
        { name: "白地・紐青", count: "count5", setCount: "setCount5" },
        { name: "黒地・紐青", count: "count6", setCount: "setCount6" },
        { name: "黒地・紐橙", count: "count7", setCount: "setCount7" },
      ],   
      color: ["赤", "青", "黄", "緑"],
      price: 800
    },
    {
      pid: "kanau_wa_baseball",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―野球、ソフトボール",
      type: [], 
      color: [
        { name: "赤", count: "count1", setCount: "setCount1" },
        { name: "青", count: "count2", setCount: "setCount2" },
        { name: "黄", count: "count3", setCount: "setCount3" },
        { name: "緑", count: "count4", setCount: "setCount4" },
      ],     
      price: 800
    },
    {
      pid: "kanau_wa_volley",
      image: image.dummy,
      category: "授与品―バレー、ビーチバレー",
      name: "叶う輪",
      type: [],    
      color: [
        { name: "赤", count: "count1", setCount: "setCount1" },
        { name: "青", count: "count2", setCount: "setCount2" },
        { name: "黄", count: "count3", setCount: "setCount3" },
        { name: "緑", count: "count4", setCount: "setCount4" },
      ], 
      price: 800
    },
    {
      pid: "kanau_wa_basket",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―バスケットボール",
      type: [],    
      color: [
        { name: "赤", count: "count1", setCount: "setCount1" },
        { name: "青", count: "count2", setCount: "setCount2" },
        { name: "黄", count: "count3", setCount: "setCount3" },
        { name: "緑", count: "count4", setCount: "setCount4" },
      ], 
      price: 800
    },
    {
      pid: "kanau_wa_tennis",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―テニス、スカッシュ",
      type: [],    
      color: [
        { name: "赤", count: "count1", setCount: "setCount1" },
        { name: "青", count: "count2", setCount: "setCount2" },
        { name: "黄", count: "count3", setCount: "setCount3" },
        { name: "緑", count: "count4", setCount: "setCount4" },
      ], 
      price: 800
    },
    {
      pid: "kanau_wa_badminton",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―バドミントン",
      type: [],    
      color: [
        { name: "赤", count: "count1", setCount: "setCount1" },
        { name: "青", count: "count2", setCount: "setCount2" },
        { name: "黄", count: "count3", setCount: "setCount3" },
        { name: "緑", count: "count4", setCount: "setCount4" },
      ], 
      price: 800
    },
    {
      pid: "kanau_wa_table_tennis",
      image: image.dummy,
      category: "授与品",
      name: "叶う輪―卓球",
      type: [],    
      color: [
        { name: "赤", count: "count1", setCount: "setCount1" },
        { name: "青", count: "count2", setCount: "setCount2" },
        { name: "黄", count: "count3", setCount: "setCount3" },
        { name: "緑", count: "count4", setCount: "setCount4" },
      ], 
      price: 800
    },
    {
      pid: "hair_band",
      image: image.dummy,
      category: "授与品",
      name: "ヘアバンド",
      type: [],  
      color: [
        { name: "白", count: "count1", setCount: "setCount1" },
        { name: "赤", count: "count2", setCount: "setCount2" },
        { name: "黄", count: "count3", setCount: "setCount3" },
        { name: "紫", count: "count4", setCount: "setCount4" },
        { name: "黒", count: "count5", setCount: "setCount5" },
        { name: "せいじ", count: "count6", setCount: "setCount6" },
        { name: "ピンク", count: "count7", setCount: "setCount7" },
        { name: "青", count: "count8", setCount: "setCount8" },
        { name: "橙", count: "count9", setCount: "setCount9" },
        { name:"グリーン", count: "count10", setCount: "setCount10" },
        { name:"濃紺", count: "count11", setCount: "setCount11" },
        { name:"緑", count: "count12", setCount: "setCount12" },
      ],    
      price: 800
    },
    {
      pid: "wrist_band",
      image: image.dummy,
      category: "授与品",
      name: "リストバンド",
      type: [],  
      color: [
        { name: "青", count: "count1", setCount: "setCount1" },
        { name: "赤", count: "count2", setCount: "setCount2" },
        { name: "黒", count: "count3", setCount: "setCount3" },
        { name: "白", count: "count4", setCount: "setCount4" },
        { name: "黄", count: "count5", setCount: "setCount5" },
      ],   
      price: 800
    },
    {
      pid: "towel",
      image: image.dummy,
      category: "授与品",
      name: "タオル（赤・青 1組）",
      type: ["サイズ：タテ約30cm×ヨコ約40cm"],    
      color: [],
      price: 500
    },
    {
      pid: "towel_long",
      image: image.dummy,
      category: "授与品",
      name: "ロングタオル",
      type: ["サイズ：タテ約36cm×ヨコ約84cm"],    
      color: [],
      price: 500
    },
    {
      pid: "e_ma_sky",
      image: image.dummy,
      category: "授与品",
      name: "絵馬（心願成就）",
      type: ["銀河・黒", "宵の明星・青", "明の明星・茜"],    
      color: [],
      price: 800
    },
    {
      pid: "e_ma",
      image: image.dummy,
      category: "授与品",
      name: "絵馬",
      type: ["スポーツ系", "恋愛成就", "文化系"],    
      color: [],
      price: 800
    },
    {
      pid: "kanau_wa_hashi",
      image: image.dummy,
      category: "授与品",
      name: "叶う和箸",
      type: ["心願成就・黄", "除災招福・赤"],    
      color: [],
      price: 800
    },
    {
      pid: "syuin_tyou",
      image: image.dummy,
      category: "授与品",
      name: "御朱印帳",
      type: ["御朱印帳", "限定御朱印帳"],    
      color: [],
      price: 2000
    },
    {
      pid: "mari_dorei",
      image: image.dummy,
      category: "授与品",
      name: "まり土鈴",
      type: [],    
      color: [],
      price: 1500
    },
    {
      pid: "ba_tei",
      image: image.dummy,
      category: "授与品",
      name: "馬蹄",
      type: [],    
      color: [
        { name: "金", count: "count1", setCount: "setCount1" },
        { name: "銀", count: "count2", setCount: "setCount2" },
      ], 
      price: 700
    },
    {
      pid: "yui_syo",
      image: image.dummy,
      category: "授与品",
      name: "由緒（朱印付き）",
      type: [],    
      color: [],
      price: 300
    }
  ]
};

export default data;