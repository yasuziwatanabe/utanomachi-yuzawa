//FAQアコーディオン
$(".q-title").on("click", function () {
    $(this).next().slideToggle();
  });





//メインナビのクリック後のチェック
function unChecked() {
    let boxes = document.querySelectorAll("#drawer_input");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].checked = false;
    }
}


//スムーススクロール
$(document).ready(function(e) {
       var headerHight = 0;　//ヘッダ高さ
       $('a[data-area]').click(function() {
           var href = '#' + $(this).attr("data-area");
           var target = $(href == "#" || href == "" ? 'html' : href);
           console.log(target);
           var position = target.offset().top - headerHight;
           $("html, body").animate({
               scrollTop: position
           }, 700, "swing");
           return false;
       });
   });
//URLを書き換える
window.onload = function() {
    window.history.replaceState(null, '', location.pathname + location.search);
  }


//Loading
const loading = document.getElementById('loading');

imagesLoaded( '.wrapper', { background: "#header" }, function() {
  const msM = 1000;
  loading.style.transition = 'opacity ' + msM + 'ms';
  
  const loadingOpacity = function(){ //透過させる関数を定義
     loading.style.opacity = 0;
  }
  const loadingDisplay = function(){ //非表示にする関数を定義
    loading.style.display = "none";
  }
 
  setTimeout(loadingOpacity, 1000); //画像読み込み後、１秒後に透過を開始
  setTimeout(loadingDisplay, 1000 + msM); //画像読み込み後、２秒後に非表示
});



