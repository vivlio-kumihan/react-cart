// 画像フェード

jQuery(document).ready(
  function(){
    jQuery("a img").hover(function(){
       jQuery(this).fadeTo("normal", 0.6); // マウスオーバー時にmormal速度で、透明度を60%にする
    },function(){
       jQuery(this).fadeTo("normal", 1.0); // マウスアウト時にmormal速度で、透明度を100%に戻す
    });
  });
 
 jQuery(document).ready(function(){
	jQuery(function() { 
		jQuery(".headBt a").css("opacity","0");
		jQuery(".headBt a").hover(
			function () {
				jQuery(this).stop().animate({opacity: 0.6}, 'slow');},
			function () {
				jQuery(this).stop().animate({opacity: 0}, 'slow');}
		);
	});
});

// スクロールトップアニメーション
jQuery(function() {
	var topBtn = jQuery('#pagetop');	
	topBtn.hide();
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
});

//スムーススクロール

jQuery(function(){
   // #で始まるアンカーをクリックした場合に処理
   jQuery('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= jQuery(this).attr("href");
      // 移動先を取得
      var target = jQuery(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});