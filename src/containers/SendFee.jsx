import { useEffect, useState } from "react";
import "../styles/containers/SendFee.sass";

const SendFee = ({ 
  totalWeight, 
  setTotalSendFee,
  prefectureSelected,
  cartItems,
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
  totalWeight = totalWeight + 48
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
      cartItems.forEach(item => {
        if (item.pid === "syuin_chou") {
          if (Object.keys(item.types).reduce((acc, key) => acc + parseInt(item.types[key]), 0) === 1) {
            sendFee = direction && fee[direction][201] - 640;
          } else {
            sendFee = direction && fee[direction][201];
          }
        }
      });
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

// return (
//   <>
//     <div className="location-selector">
//       <div className="send-fee-selector">
//         <p>発送先</p>
//         <select
//           value={prefectureSelected}
//           onChange={(e) => {
//             e.target.value === "---"
//               ? setPrefectureSelected("発送先の選択ボタンから都道府県を選択し、授与料合計を決定してください。")
//               : setPrefectureSelected(e.target.value)
//           }}
//           name=""
//           id=""
//         >
//         {
//           LOCATION.map(location => (
//             <option 
//               key={location} 
//               value={location}
//             >
//               {location}
//             </option>
//           ))
//         }
//         </select>
//       </div>
//       {
//         sendFee
//           ? <div className="send-fee">郵送料<span className="send-fee-note">（口座徴収通知料を含む）</span><span>{sendFee}</span>円</div>
//           : <div className="send-fee">郵送料<span className="send-fee-note">（口座徴収通知料を含む）</span><span>0</span>円</div>
//       }
//     </div>
//   </>
// );



// <!DOCTYPE HTML>
// <html lang="ja">
// <head>
// <meta charset="<?php bloginfo('charset'); ?>">
// <meta name="viewport" content="width=device-width,user-scalable=no,maximum-scale=1">
// <title>
// <?php if (function_exists('seo_title_tag')) { seo_title_tag(); } else { bloginfo('name'); wp_title();} ?>
// </title>
// <link rel="stylesheet" href="/common/css/common.css">
// <link rel="stylesheet" href="/common/css/wp.css">
// <link rel="stylesheet" href="/common/css/layout.css">
// <link rel="stylesheet" href="/common/css/responsive.css">
// <link rel="icon" href="http://shiraminejingu.or.jp/wp-content/uploads/2017/08/shiramine-icon-16x16.png" sizes="16x16" />
// <link rel="icon" href="http://shiraminejingu.or.jp/wp-content/uploads/2017/08/shiramine-icon-32x32.png" sizes="32x32" />
// <link rel="icon" href="http://shiraminejingu.or.jp/wp-content/uploads/2017/08/shiramine-icon-192x192.png" sizes="192x192" />
// <link rel="apple-touch-icon-precomposed" href="http://shiraminejingu.or.jp/wp-content/uploads/2017/08/shiramine-icon-180x180.png">
// <meta name="msapplication-TileImage" content="http://shiraminejingu.or.jp/wp-content/uploads/2017/08/shiramine-icon-270x270.png">
// <!--[if lt IE 9]>
// <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
// <script src="/common/js/respond.js"></script>
// <![endif]-->
// <?php wp_enqueue_script( 'jquery' ); ?>
// <?php if(is_page('fax')): ?>
// <?php wp_enqueue_script( 'jquery-1.7.1', '/common/js/jquery-1.7.1.min.js'); ?>
// <?php endif; ?>
// <?php wp_enqueue_script( 'setup', '/common/js/setup.js'); ?>
// <?php wp_enqueue_script( 'footerFixed', '/common/js/footerFixed.js'); ?>

// <?php if(is_mobile()): ?>
// <?php else: ?>
// <?php wp_enqueue_script( 'heightLine', '/common/js/heightLine.js'); ?>
// <?php endif; ?>

// <?php wp_head(); ?>
// <?php include_once("analyticstracking.php") ?>

// <?php if(is_page('fax')): ?>
// <script>
// $(function(){
// 	calc();
	
// 	$('.item_number input').change(function(){
// 		calc();
// 	});
// 	$('.item_number input').keyup(function(){
// 		calc();
// 	});
// 	$('#pref').change(function(){
// 		calc();
// 	});
// 	$('.btn_reset').click(function(e){	//type="reset" はブラウザによってe.preventDefault(); できないため buttonで
// 		e.preventDefault();
// 		$(this).closest('form').get(0).reset();
// 		calc();
// 	});
// 	$('#order_btn').click(function(){
		
// 		calc(); //20150304追加
		
// 		//errorクリア
// 		$('.errormessage').remove();
// 		$('.error').removeClass('error');
		
// 		//validation
// 		var isValid = true;
// 		if($('#tel').val()==''){
// 			isValid = false;
// 			$('#tel').addClass('error').after($('<div>').attr('class','errormessage').html('入力してください。'));
// 		}
// 		if($('#address').val()==''){
// 			isValid = false;
// 			$('#address').addClass('error').after($('<div>').attr('class','errormessage').html('入力してください。'));
// 		}
// 		if($('#pref').val()==''){
// 			isValid = false;
// 			$('#pref').addClass('error').after($('<div>').attr('class','errormessage').html('入力してください。'));
// 		}
// 		if($('#zipcode').val()==''){
// 			isValid = false;
// 			$('#zipcode').addClass('error').after($('<div>').attr('class','errormessage').html('入力してください。'));
// 		}
// 		if($('#name').val()==''){
// 			isValid = false;
// 			$('#name').addClass('error').after($('<div>').attr('class','errormessage').html('入力してください。'));
// 		}
		
// 		//印刷用ウィンドウを開く
// 		if(isValid) window.open('/fax-print/','_blank');
// 	});
// 	function getPostage(item_weight, selectedItems, goshuinNum){
		
// 		/*** 封筒分の重さを足しています 48グラム ***/
// 		var weight = item_weight + 48;	//
		
// 		var postage = null;
// 		/*** 20200106 御朱印帳１冊送料500円 ***//*** 郵便局通知手数料110円追加okn2020416 ***/
// 		if(goshuinNum == 1 && selectedItems == 1 ) {

// 			postage = 610;

// 		} else if(weight <= 0){
			
// 			postage = 0;

// 		}else if(0 < weight && weight <= 50){
			
// 			/*** 0～50 の送料 ***/
// 			postage = 230;	/*** 郵便局通知手数料110円追加okn2020416 ***/
			
// 		}else if(50 < weight && weight <= 100){
			
// 			/*** 51～100 の送料 ***/
// 			postage = 250;	/*** 郵便局通知手数料110円追加okn2020416 ***/
			
// 		}else if(100 < weight && weight <= 150){
			
// 			/*** 101～150 の送料 ***/
// 			postage = 320;	/*** 20191002 レターパック料金修正205=>210 okuno修正***//*** 郵便局通知手数料110円追加okn2020416 ***/
			
// 		}else if(150 < weight && weight <= 200){	/*** 20191108 送付する個数の調整のため重さ基準を250=>200へ変更 okuno修正 ***/
			
// 			/*** 151～200 の送料 ***/
// 			postage = 480;	/*** 20191002 レターパック料金修正360=>370 okuno修正***//*** 郵便局通知手数料110円追加okn2020416 ***/
			
// 		}else{
			
// 			/*** 201～ の送料 都道府県optionに記載しています data-postage="送料" ***/
// 			dataPostage = $('#pref option:selected').attr('data-postage');
// 			if(!(dataPostage=='' || dataPostage==undefined)) postage = parseInt(dataPostage);
// 		}
// 		return postage;
// 	}
	
// 	function calc(){
// 		var subtotal = 0;
// 		var weight = 0;
// 		/*** 20200106 御朱印帳１冊送料 ***/
// 		var goshuinNum = 0;
// 		var selectedItems = 0;
// 		$('.item_list tr').each(function(index,tr){
// 			var item_price = yen2num($(tr).find('.item_price').html());
// 			var item_weight = yen2num($(tr).find('.item_weight').html());
// 			var item_number = yen2num($(tr).find('.item_number input').val());
// 			var item_subtotal = item_price * item_number;
// 			/*** 20200106 御朱印帳１冊送料 ***/
// 			var item_name = $(tr).find('.item_name').html().trim();

// 			$(tr).find('.item_subtotal').html(num2yen(item_subtotal));
// 			subtotal += item_subtotal;
// 			weight += item_weight * item_number;
// 			selectedItems += item_number;
// 			/*** 20200106 御朱印帳１冊送料 ***/
// 			if((item_name  == '御朱印帳' || item_name  == '限定御朱印帳') && item_number == 1) {
// 				goshuinNum += item_number;
// 			} 
// 		});
		
// 		//小計
// 		$('.item_price_total .item_subtotal').html(num2yen(subtotal));
		
// 		//送料
// 		var postage = getPostage(weight, selectedItems, goshuinNum);
// 		if(postage == -1){
// 			$('.item_price_total .item_postage').html('お問い合わせください');
// 		}else if(postage != null && subtotal > 0){
// 			$('.item_price_total .item_postage').html(num2yen(postage));
// 		}else if(subtotal > 0){
// 			$('.item_price_total .item_postage').html('都道府県を選択してください');
// 		}else{
// 			$('.item_price_total .item_postage').html('');
// 		}
		
// 		//合計
// 		var total = subtotal + postage;
// 		if(postage != null && subtotal > 0){
// 			$('.item_price_total .item_total').html(num2yen(total));
// 		}else{
// 			$('.item_price_total .item_total').html('');
// 		}
// 	}
// });

// function yen2num(yen){
// 	if(yen==undefined) return 0;
// 	var val = yen.replace(/\D/g,'');
// 	if(val=='') val = '0';
// 	return parseInt(val);
// }
// function num2yen(num){
// 	var val = '';
// 	if(isFinite(num)){
// 		val = String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' ) + '円';
// 	}else{
// 		val = num;
// 	}
// 	return val;
// }

// </script>

// <?php endif; ?>
// </head>
// <?php include_once("body-id.php") ?>
// <div id="header">
//   <header id="header_inner">
//     <hgroup>
//       <h1 class="logo"><a href="<?php bloginfo("url"); ?>">
//         <?php bloginfo("name"); ?>
//         </a></h1>
//       <h2 class="read">
//         <?php bloginfo("description"); ?>
//       </h2>
//     </hgroup>
//     <div id="hdnav">
//       <ul>
//         <li class="hd_menu01"><a href="/english/">English</a></li>
//         <li class="hd_menu02"><a href="/access/">地図・交通</a></li>
//         <li class="hd_menu03"><a href="/contact/">お問い合わせ</a></li>
//       </ul>
//     </div>
// </header>
// <!--/header_inner -->
// </div>
// <!--/header -->
// <div id="globalnav">
//   <nav id="globalnav_inner">
//     <?php wp_nav_menu( array('menu' => 'global-navi')); ?>
//   </nav>
// </div>
// <!--/globalnav -->
// <?php if(is_front_page()): ?>
// <?php echo do_shortcode("[metaslider id=68]"); ?>
// <?php endif; ?>
// <?php if(is_front_page()): ?>
// <?php else: ?>
// <?php include_once("breadcrumb.php") ?>
// <?php include_once("drawer-menu.php") ?>
// <?php endif; ?></div>

{/* <th>ご住所</th><!--送料改訂okn20191002--><!--郵便局通知手数料110円追加okn2020416-->
<td><select name="pref" id="pref"><option selected="selected" value="">都道府県</option><option data-postage="1860">北海道</option><option data-postage="1420">青森県</option><option data-postage="1420">岩手県</option><option data-postage="1420">宮城県</option><option data-postage="1420">秋田県</option><option data-postage="1420">山形県</option><option data-postage="1420">福島県</option><option data-postage="1310">茨城県</option><option data-postage="1310">栃木県</option><option data-postage="1310">群馬県</option><option data-postage="1310">埼玉県</option><option data-postage="1310">千葉県</option><option data-postage="1310">東京都</option><option data-postage="1310">神奈川県</option><option data-postage="1310">新潟県</option><option data-postage="1210">富山県</option><option data-postage="1210">石川県</option><option data-postage="1210">福井県</option><option data-postage="1310">山梨県</option><option data-postage="1310">長野県</option><option data-postage="1210">岐阜県</option><option data-postage="1210">静岡県</option><option data-postage="1210">愛知県</option><option data-postage="1210">三重県</option><option data-postage="1210">滋賀県</option><option data-postage="1140">京都府</option><option data-postage="1210">大阪府</option><option data-postage="1210">兵庫県</option><option data-postage="1210">奈良県</option><option data-postage="1210">和歌山県</option><option data-postage="1210">鳥取県</option><option data-postage="1210">島根県</option><option data-postage="1210">岡山県</option><option data-postage="1210">広島県</option><option data-postage="1210">山口県</option><option data-postage="1210">徳島県</option><option data-postage="1210">香川県</option><option data-postage="1210">愛媛県</option><option data-postage="1210">高知県</option><option data-postage="1310">福岡県</option><option data-postage="1310">佐賀県</option><option data-postage="1310">長崎県</option><option data-postage="1310">熊本県</option><option data-postage="1310">大分県</option><option data-postage="1310">宮崎県</option><option data-postage="1310">鹿児島県</option><option data-postage="1740">沖縄県</option></select>
<p><input name="address" class="field" id="address" type="text" /></p></td> */}

// const fee = {
  //   "---": { 50: 0, 125: 0, 250: 0, 500: 0, 1000: 0, 2000: 0, 5000: 0, 10000: 0 },
  //   "北海道": { 50: 330, 125: 400, 250: 500, 500: 600, 1000: 850, 2000: 1350, 5000: 1850, 10000: 2350, 10001: 2450 },
  //   "東北": { 50: 260, 125: 330, 250: 430, 500: 530, 1000: 780, 2000: 1280, 5000: 1780, 10000: 2280, 10001: 2380 },
  //   "関東": { 50: 260, 125: 330, 250: 430, 500: 530, 1000: 780, 2000: 1280, 5000: 1780, 10000: 2280, 10001: 2380 },
  //   "北陸": { 50: 255, 125: 325, 250: 425, 500: 525, 1000: 775, 2000: 1275, 5000: 1775, 10000: 2275, 10001: 2375 },
  //   "中部": { 50: 250, 125: 320, 250: 420, 500: 520, 1000: 770, 2000: 1270, 5000: 1770, 10000: 2270, 10001: 2370 },
  //   "近畿": { 50: 230, 125: 300, 250: 400, 500: 500, 1000: 750, 2000: 1250, 5000: 1750, 10000: 2250, 10001: 2350 },
  //   "中国": { 50: 250, 125: 320, 250: 420, 500: 520, 1000: 770, 2000: 1270, 5000: 1770, 10000: 2270, 10001: 2370 },
  //   "四国": { 50: 255, 125: 325, 250: 425, 500: 525, 1000: 775, 2000: 1275, 5000: 1775, 10000: 2275, 10001: 2375 },
  //   "九州": { 50: 260, 125: 330, 250: 430, 500: 530, 1000: 780, 2000: 1280, 5000: 1780, 10000: 2280, 10001: 2380 },
  //   "沖縄": { 50: 330, 125: 400, 250: 500, 500: 600, 1000: 850, 2000: 1350, 5000: 1850, 10000: 2350, 10001: 2350 },
	// };