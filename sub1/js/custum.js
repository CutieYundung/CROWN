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
  $("header").on("mouseenter", function () {
    $(".gnb > li > a").css("color", "#f97fb5");
  });
  $("header").on("mouseleave", function () {
    $(".gnb > li > a").css("color", "#");
  });

  //sec1 풍선 고정
  // if (matchMedia("screen and (max-width:767px)").matches) {
  // } else if (matchMedia("screen and(min-width:768px)").matches) {
  // }
  //서브네비게이션
  $(".s_nav").click(function () {
    $(this).children("ul").stop().slideToggle();
  });

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

//더보기 활성화
$(window).on("load", function () {
  if (matchMedia("screen and (max-width:767px)").matches) {
    load("#js-more", "7"); //초기 보여지는 목록 수
    $("#more-btn-wrap .more").on("click", function () {
      load("#js-more", "6", "#more-btn-wrap");
    });
  } else if (matchMedia("screen and(min-width:768px)").matches) {
    //더보기 활성화
      load("#js-more", "8"); //초기 보여지는 목록 수
      $("#more-btn-wrap .more").on("click", function () {
        load("#js-more", "8", "#more-btn-wrap");
    });
    }
});
function load(id, cnt) {
  var more_list = id + " .js-more:not(.active)";
  var more_length = $(more_list).length;
  var more_total_cnt;
  if (cnt < more_length) {
    more_total_cnt = cnt;
  } else {
    more_total_cnt = more_length;
    $(".button").hide();
  }
  $(more_list + ":lt(" + more_total_cnt + ")").addClass("active");
}

