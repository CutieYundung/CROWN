$(document).ready(function () {
  window.onresize = function () {
    document.location.reload();
  };

  // header
  $(".gnb > li > a, .gnb > li > ul").on("mouseenter", function () {
    $(".gnb > li > ul, .nav_bg").stop().slideDown(200);
  });
  $(".nav_bg, header").on("mouseleave", function () {
    $(".gnb > li > ul, .nav_bg").stop().slideUp(100);
  });

  // nav-img
  $(".gnb > li:nth-child(1)").hover(
    function () {
      $(".nav_info").css(
        "background",
        "url(../main/image/header/nav/nav_0.png) 0% -2347.286px"
      );
      $(".gnb > li:nth-child(1) >a").css("color", "#ff7e00");
    },
    function () {
      $(".gnb > li:nth-child(1) >a").css("color", "#f97fb5");
    }
  );

  $(".gnb > li:nth-child(2)").hover(
    function () {
      $(".nav_info").css(
        "background",
        "url(../main/image/header/nav/nav_1.png) 0% -2347.286px"
      );
      $(".gnb > li:nth-child(2) >a").css("color", "#ff7e00");
    },
    function () {
      $(".gnb > li:nth-child(2) >a").css("color", "#f97fb5");
    }
  );

  $(".gnb > li:nth-child(3)").hover(
    function () {
      $(".nav_info").css(
        "background",
        "url(../main/image/header/nav/nav_3.png) 0% -2347.286px"
      );
      $(".gnb > li:nth-child(3) >a").css("color", "#ff7e00");
    },
    function () {
      $(".gnb > li:nth-child(3) >a").css("color", "#f97fb5");
    }
  );

  $(".gnb > li:nth-child(4)").hover(
    function () {
      $(".nav_info").css(
        "background",
        "url(../main/image/header/nav/nav_3.png) 0% -2347.286px"
      );
      $(".gnb > li:nth-child(4) >a").css("color", "#ff7e00");
    },
    function () {
      $(".gnb > li:nth-child(4) >a").css("color", "#f97fb5");
    }
  );

  $(".gnb > li:nth-child(5)").hover(
    function () {
      $(".nav_info").css(
        "background",
        "url(../main/image/header/nav/nav_4.png) 0% -2347.286px"
      );
      $(".gnb > li:nth-child(5) >a").css("color", "#ff7e00");
    },
    function () {
      $(".gnb > li:nth-child(5) >a").css("color", "#f97fb5");
    }
  );

  $(".gnb > li:nth-child(6)").hover(
    function () {
      $(".nav_info").css(
        "background",
        "url(../main/image/header/nav/nav_5.png) 0% -2347.286px"
      );
      $(".gnb > li:nth-child(6) >a").css("color", "#ff7e00");
    },
    function () {
      $(".gnb > li:nth-child(6) >a").css("color", "#f97fb5");
    }
  );
  // $("header").on("mouseenter", function () {
  //   $(".gnb > li > a").css("color", "#f97fb5");
  // });
  // $("header").on("mouseleave", function () {
  //   $(".gnb > li > a").css("color", "#");
  // });

  //sec1 풍선 고정
  if (matchMedia("screen and (max-width:767px)").matches) {
  } else if (matchMedia("screen and(min-width:768px)").matches) {
    $(".s_gnb").click(function () {
      $(this).css("background", "#000");
      $(".s_nav > ul").slideDown();
    });
  }
  // 사이트맵 팝업창
  if (matchMedia("screen and (max-width:767px)").matches) {
  } else if (matchMedia("screen and (min-width:768px)").matches) {
    $(".menu_icon").click(function () {
      $(".map_wrap").fadeIn(300);
    });
    $(".close_btn").click(function () {
      $(".map_wrap").fadeOut(300);
    });
  }
  // 이 안으로 작성
});
