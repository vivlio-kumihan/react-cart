import image from "./img/image";

// 画像についてimg/image.jsで定義している。
// pidを属性（メソッド）にして管理する方針

const data = {
  products: [
    {
      pid: "thokon_tukusu_mamori",
      image: image.dummy,
      category: "御守",
      name: "闘魂尽す守（マグネット式）",
      type: [],    
      color: ["赤", "黒"],
      price: 800
    },
    {
      pid: "kyugi_thokon_mamori",
      image: image.dummy,
      category: "御守",
      name: "球技闘魂守（角）",
      type: [],    
      color: ["青", "赤", "白"],
      price: 700
    },
    {
      pid: "thokon_mamori_kado",
      image: image.dummy,
      category: "御守",
      name: "闘魂守（角）",
      type: [],    
      color: ["青", "赤", "白"],
      price: 700
    },
  ]
};

export default data;