
// ② スムーススクロール & ページトップ（jQuery）
$(function () {
  var navHeight = $(".header").outerHeight();

  // ページ内リンククリックでスムーススクロール
  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href === "#" || href === "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position }, 300, "swing");
    return false;
  });

  // ページトップボタン
  $("#js-page-top").on("click", function () {
    $("body, html").animate({ scrollTop: 0 }, 300);
    return false;
  });
});

// ===============================
// ホバーで中央拡大（オーバーレイ）
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.querySelectorAll('.zoom');
  const overlay = document.getElementById('overlay');
  const overlayImg = overlay.querySelector('img');

  thumbs.forEach(img => {
    img.addEventListener('click', () => {
      overlayImg.src = img.src;
      overlay.style.display = 'flex';
    });
  });

  // オーバーレイクリックで閉じる
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayImg.src = ''; // 空にしておくと切り替え時にちらつき防止
  });
});

