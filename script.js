
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

