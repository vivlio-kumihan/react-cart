import { useEffect, useState } from "react";
import "../styles/containers/SendFee.sass";

const SendFee = ({ totalWeight, setTotalSendFee }) => {
  const [selected, setSelected] = useState("");

	// 都道府県
	const LOCATION = [
    "---",
    "北海道",
    "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
    "東京都", "茨城県",	"神奈川県", "栃木県", "千葉県", "群馬県", "山梨県", "埼玉県",
    "新潟県", "長野県", "富山県", "石川県", "福井県",
    "静岡県", "岐阜県", "愛知県", "三重県",
    "滋賀県", "京都府", "兵庫県", "大阪府", "奈良県", "和歌山県",
    "鳥取県", "島根県", "岡山県", "広島県", "山口県",
    "香川県", "愛媛県", "徳島県", "高知県",
    "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県",
    "沖縄県",
	];

	// 方面
	const AREA = {
    "---": ["---"],
    "北海道": ["北海道"],
    "東北": ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
    "関東": ["東京都", "茨城県",	"神奈川県", "栃木県", "千葉県", "群馬県", "山梨県", "埼玉県"],
    "北陸": ["新潟県", "長野県", "富山県", "石川県", "福井県"],
    "中部": ["静岡県", "岐阜県", "愛知県", "三重県"],
    "近畿": ["滋賀県", "京都府", "兵庫県", "大阪府", "奈良県", "和歌山県"],
    "中国": ["鳥取県", "島根県", "岡山県", "広島県", "山口県"],
    "四国": ["香川県", "愛媛県", "徳島県", "高知県"],
    "九州": ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県"],
    "沖縄": ["沖縄県"]
	};

	// 方面別送料
	// フォームで選択された都道府県のpropsが入る。とりあえず今は大阪府を入れている。
	const direction = Object.keys(AREA).find(key => AREA[key].includes(selected));
	const fee = {
    "---": { 50: 0, 125: 0, 250: 0, 500: 0, 1000: 0, 2000: 0, 5000: 0, 10000: 0 },
    "北海道": { 50: 330, 125: 400, 250: 500, 500: 600, 1000: 850, 2000: 1350, 5000: 1850, 10000: 2350, 10001: 2450 },
    "東北": { 50: 260, 125: 330, 250: 430, 500: 530, 1000: 780, 2000: 1280, 5000: 1780, 10000: 2280, 10001: 2380 },
    "関東": { 50: 260, 125: 330, 250: 430, 500: 530, 1000: 780, 2000: 1280, 5000: 1780, 10000: 2280, 10001: 2380 },
    "北陸": { 50: 255, 125: 325, 250: 425, 500: 525, 1000: 775, 2000: 1275, 5000: 1775, 10000: 2275, 10001: 2375 },
    "中部": { 50: 250, 125: 320, 250: 420, 500: 520, 1000: 770, 2000: 1270, 5000: 1770, 10000: 2270, 10001: 2370 },
    "近畿": { 50: 230, 125: 300, 250: 400, 500: 500, 1000: 750, 2000: 1250, 5000: 1750, 10000: 2250, 10001: 2350 },
    "中国": { 50: 250, 125: 320, 250: 420, 500: 520, 1000: 770, 2000: 1270, 5000: 1770, 10000: 2270, 10001: 2370 },
    "四国": { 50: 255, 125: 325, 250: 425, 500: 525, 1000: 775, 2000: 1275, 5000: 1775, 10000: 2275, 10001: 2375 },
    "九州": { 50: 260, 125: 330, 250: 430, 500: 530, 1000: 780, 2000: 1280, 5000: 1780, 10000: 2280, 10001: 2380 },
    "沖縄": { 50: 330, 125: 400, 250: 500, 500: 600, 1000: 850, 2000: 1350, 5000: 1850, 10000: 2350, 10001: 2350 },
	};

  // 送料の計算
  // fee[{ propsで方面 }][{ propsでグラム数 }]
  // 条件分岐で回さないとエラーになる。
  
  let sendFee = 0;
  switch (true) {
    case totalWeight < 51:
      sendFee = direction && fee[direction][50];
      break;
    case totalWeight < 126:
      sendFee = direction && fee[direction][125];
      break;
    case totalWeight < 251:
      sendFee = direction && fee[direction][250];
      break;
    case totalWeight < 501:
      sendFee = direction && fee[direction][500];
      break;
    case totalWeight < 1001:
      sendFee = direction && fee[direction][1000];
      break;
    case totalWeight < 2001:
      sendFee = direction && fee[direction][2000];
      break;
    case totalWeight < 5001:
      sendFee = direction && fee[direction][5000];
      break;
    case totalWeight < 10001:
      sendFee = direction && fee[direction][10000];
      break;
    case totalWeight >= 10001:
      sendFee = direction && fee[direction][10001];
      break;
  }

  useEffect(() => {
    setTotalSendFee(sendFee);
  });

  return (
    <>
      <div className="location-selector">
        <div className="send-fee-selector">
          <p>発送先の選択</p>
          <select 
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            name=""
            id=""
          >
          {
            LOCATION.map(location => (
              <option 
                key={location} 
                value={location}
              >
                {location}
              </option>
            ))
          }
          </select>
        </div>
        {
          sendFee
            ? <div className="send-fee">郵送料（口座徴収通知料を含む）: <span>{sendFee}</span>円</div>
            : <div className="send-fee">郵送料（口座徴収通知料を含む）: <span>0</span>円</div>
        }
      </div>
    </>
  );
};
	
export default SendFee;