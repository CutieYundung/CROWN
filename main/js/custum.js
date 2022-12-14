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
    $(".gnb > li > a").css("color", "#fff");
  });

  //sec1 풍선 고정
  if (matchMedia("screen and (max-width:767px)").matches) {
    var sec1H = $(".sec1_entrepreneurship").outerHeight();
    console.log(sec1H);
    $(".sec2_productInfor").css("margin-top", `${sec1H - sec1H / 2.8}px`);
  } else if (matchMedia("screen and(min-width:768px)").matches) {
    $(window).scroll(function () {
      //스크롤 높이 측정
      var top = $(window).scrollTop();
      off = $(".sec1_b1").offset();
      console.log(off);

      if (2000 >= top && top >= 1080) {
        $(".sec1_balloon").addClass("fixed");
      } else {
        $(".sec1_balloon").removeClass("fixed");
      }
    });
  }

  //sec2 탭메뉴
  var $content = $(".tab"),
    $title = $(".sec2_tab ul li");
  console.log($content);
  // (초기설정)
  $content.hide();
  $(".story_buiscuit").show();
  $title.click(function () {
    //해당 li에 동일한 인덱스 번호를 가지고 있는 콘텐츠를 불러오고 싶을 때
    var idx = $(this).index(); //변수지정
    $content.hide(); //콘텐츠 지우기
    $content.eq(idx).show(); //해당 콘텐츠 노출
    $title.removeClass("on"); //li에 클래스값 제거
    $(this).addClass("on"); //li에 클래스 값 추가
  });

  // sec2- hover
  $('.prod_box').hover(function(){
    $(this).css('transform', 'translateY(-4%)')
  }, function(){
    $(this).css('transform', 'translateY(0%)')
  })

  //sec3 페이드업

$(window).scroll(function(){
  var top = $(window).scrollTop();
  console.log(top);
  if (matchMedia("screen and (max-width:767px)").matches) {
    if(top >= 950) {
      $(".esg_content").show().addClass("active");
    }
  } else if (matchMedia("screen and (min-width:768px)").matches) {
  if(top >= 2630) {
    $(".esg_content").show().addClass("active");
  }
  }
})

  // sec4 - hover
  $(".service_text> div > a").on("mouseenter", function () {
    $(".sec4_service").css(
      "background",
      "linear-gradient( to left, #B1C5F8, #89E2F2, #F7B1D3, #EADE88, #21F4C9)"
    );
    $(".sec4_bg>p").css("color", "#fff");
  });
  $(".service_text> div > a").on("mouseleave", function () {
    $(".sec4_service").css("background", "#fff5f6");
    $(".sec4_bg>p").css("color", "#fdcfd4");
  });

  // footer 탭메뉴 (모바일)
  if (matchMedia("screen and (max-width:767px)").matches) {
    $(".familysite > ul").css("display", "none");
    $(".familysite > h6").click(function () {
      $(".familysite > ul").slideToggle(500);
      $(".select span").toggleClass("active");
    });
  } else if (matchMedia("screen and (min-width:768px)").matches) {
    $(".familysite > ul").css("display", "block");
  }

  // 사이트맵 팝업창
  if(matchMedia('screen and (max-width:767px)').matches){
  }else if(matchMedia('screen and (min-width:768px)').matches){
    $('.menu_icon').click(function(){
      $('.map_wrap').fadeIn(300)
      
    })
    $('.close_btn').click(function(){
      $('.map_wrap').fadeOut(300)
    })
  }
  // 이 안으로 작성
});
