$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 900;
  if (winW <= devW) {
    //900px以下の時の処理
    $(function () {
      var glovalNav = $('#title'); // グローバルナビゲーションのセレクタ 
      var navHeight = glovalNav.outerHeight(true); // ナビゲーションのheight(marginやpadding,box-shadowも含む)
      var navOffset = glovalNav.offset().top; // ブラウザの一番上からナビゲーションまでの位置
      // スクロールした時 
      $(window).scroll(function () { // スクロールがナビゲーション位置に来たら 
          if ($(this).scrollTop() > navOffset + 100) { // ナビゲーションをfixedさせる
          glovalNav.css({
              'position': 'fixed',
              'top': 50,
              'z-index': 100,
              'width': '100%',
              'animation': 'loading 1s',
          }); // ここは重要な部分で、 fixedするとその分高さがなくなるので、 margin - topを高さ分つけてあげます。 
          $('#contents').css('margin-top', navHeight);
          } else { // ifのtrueでない場合、 つまり、 ナビゲーション位置に来ていない時は static で元に戻す。
          glovalNav.css('position', 'static');
          $('#contents').css('margin-top', 'auto');
          }
      });
      });
  } else {
    //900pxより大きい時の処理
    $(function () {
      var glovalNav = $('#title'); // グローバルナビゲーションのセレクタ 
      var navHeight = glovalNav.outerHeight(true); // ナビゲーションのheight(marginやpadding,box-shadowも含む)
      var navOffset = glovalNav.offset().top; // ブラウザの一番上からナビゲーションまでの位置
      // スクロールした時 
      $(window).scroll(function () { // スクロールがナビゲーション位置に来たら 
          if ($(this).scrollTop() > navOffset) { // ナビゲーションをfixedさせる
          glovalNav.css({
              'position': 'fixed',
              'top': 81,
              'z-index': 100,
              'width': '100%',
              'animation': 'loading 1s',
          }); // ここは重要な部分で、 fixedするとその分高さがなくなるので、 margin - topを高さ分つけてあげます。 
          $('#contents').css('margin-top', navHeight);
          } else { // ifのtrueでない場合、 つまり、 ナビゲーション位置に来ていない時は static で元に戻す。
          glovalNav.css('position', 'static');
          $('#contents').css('margin-top', 'auto');
          }
      });
      });
  }
});



/* ボタンがクリックされたとき */
function modalopen(num) {
  $(".modal").removeClass("active"); // activeクラスを消す
  $("#modal" + num).addClass("active"); // 指定したモーダルにactiveクラスを追加
  $(".modal_container").addClass("active"); // 指定したモーダルにactiveクラスを追加
}

/* オーバーレイ・クローズがクリックされたとき */
$(function(){
  $('.modal_wrap,.modal-close').click(function() {
      $(".modal_container,.modal").removeClass("active"); // activeクラスを消す
      $("#title").removeClass("hidden"); // hiddenクラスを消す
  });
});