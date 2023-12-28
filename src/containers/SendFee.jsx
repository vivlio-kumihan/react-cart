import { useEffect, useState } from "react";
import "../styles/containers/SendFee.sass";

const SendFee = ({ 
  totalWeight, 
  setTotalSendFee,
  prefectureSelected,
}) => {

	// 方面
	const AREA = {
    "---": ["---"],
    "北海道": ["北海道"],
    "東北": ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
    "関東": ["東京都", "茨城県", "神奈川県", "栃木県", "千葉県", "群馬県", "山梨県", "埼玉県", "新潟県", "長野県"],
    "北陸": ["富山県", "石川県", "福井県"],
    "中部": ["静岡県", "岐阜県", "愛知県", "三重県"],
    "京都": ["京都府"],
    "近畿": ["滋賀県", "兵庫県", "大阪府", "奈良県", "和歌山県"],
    "中国": ["鳥取県", "島根県", "岡山県", "広島県", "山口県"],
    "四国": ["香川県", "愛媛県", "徳島県", "高知県"],
    "九州": ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県"],
    "沖縄": ["沖縄県"]
	};

	// 方面別送料
	// フォームで選択された都道府県のpropsが入る。とりあえず今は大阪府を入れている。
	const direction = Object.keys(AREA).find(key => AREA[key].includes(prefectureSelected));
	const fee = {
    "---": { 50: 0, 100: 0, 150: 0, 200: 0 },
    "北海道": { 50: 230, 100: 250, 150: 320, 200: 480, 201: 1860 },
    "東北": { 50: 230, 100: 250, 150: 320, 200: 480, 201: 1420 },
    "関東": { 50: 230, 100: 250, 150: 320, 200: 480, 201: 1310 },
    "北陸": { 50: 230, 100: 250, 150: 320, 200: 480, 201: 1210 },
    "中部": { 50: 230, 100: 250, 150: 320, 200: 480, 201: 1210 },
    "京都": { 50: 230, 100: 250, 150: 320, 200: 480, 201: 1140 },
    "近畿": { 50: 230, 100: 250, 150: 320, 200: 480, 201: 1210 },
    "中国": { 50: 230, 100: 250, 150: 320, 200: 480, 201: 1210 },
    "四国": { 50: 230, 100: 250, 150: 320, 200: 480, 201: 1210 },
    "九州": { 50: 230, 100: 250, 150: 320, 200: 480, 201: 1310 },
    "沖縄": { 50: 230, 100: 250, 150: 320, 200: 480, 201: 1740 },
	};

  // 送料の計算
  // fee[{ propsで方面 }][{ propsでグラム数 }]
  // 条件分岐で回さないとエラーになる。
  
  let sendFee = 0;
  

  switch (true) {
    case totalWeight < 51:
      sendFee = direction && fee[direction][50];
      break;
    case totalWeight < 101:
      sendFee = direction && fee[direction][100];
      break;
    case totalWeight < 151:
      sendFee = direction && fee[direction][150];
      break;
    case totalWeight < 201:
      sendFee = direction && fee[direction][200];
      break;
    case totalWeight >= 201:
      sendFee = direction && fee[direction][201];
      break;
  }

  useEffect(() => {
    setTotalSendFee(sendFee);
  });

  return (
    <>
      <div className="location-selector">
        {
          sendFee
            ? <div className="send-fee">郵送料<span className="send-fee-note">（口座徴収通知料を含む）</span><span>{sendFee}</span>円</div>
            : <div className="send-fee">郵送料<span className="send-fee-note">（口座徴収通知料を含む）</span><span>0</span>円</div>
        }
      </div>
    </>
  );
};

export default SendFee;

// // 都道府県
// const LOCATION = [
//   "---",
//   "北海道",
//   "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
//   "東京都", "茨城県",	"神奈川県", "栃木県", "千葉県", "群馬県", "山梨県", "埼玉県",
//   "新潟県", "長野県", "富山県", "石川県", "福井県",
//   "静岡県", "岐阜県", "愛知県", "三重県",
//   "滋賀県", "京都府", "兵庫県", "大阪府", "奈良県", "和歌山県",
//   "鳥取県", "島根県", "岡山県", "広島県", "山口県",
//   "香川県", "愛媛県", "徳島県", "高知県",
//   "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県",
//   "沖縄県",
// ];