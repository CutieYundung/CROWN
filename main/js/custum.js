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

  //sec1 ?????? ??????
  if (matchMedia("screen and (max-width:767px)").matches) {
    var sec1H = $(".sec1_entrepreneurship").outerHeight();
    console.log(sec1H);
    $(".sec2_productInfor").css("margin-top", `${sec1H - sec1H / 2.8}px`);
  } else if (matchMedia("screen and(min-width:768px)").matches) {
    $(window).scroll(function () {
      //????????? ?????? ??????
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

  //sec2 ?????????
  var $content = $(".tab"),
    $title = $(".sec2_tab ul li");
  console.log($content);
  // (????????????)
  $content.hide();
  $(".story_buiscuit").show();
  $title.click(function () {
    //?????? li??? ????????? ????????? ????????? ????????? ?????? ???????????? ???????????? ?????? ???
    var idx = $(this).index(); //????????????
    $content.hide(); //????????? ?????????
    $content.eq(idx).show(); //?????? ????????? ??????
    $title.removeClass("on"); //li??? ???????????? ??????
    $(this).addClass("on"); //li??? ????????? ??? ??????
  });

  // sec2- hover
  $('.prod_box').hover(function(){
    $(this).css('transform', 'translateY(-4%)')
  }, function(){
    $(this).css('transform', 'translateY(0%)')
  })

  //sec3 ????????????

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

  // footer ????????? (?????????)
  if (matchMedia("screen and (max-width:767px)").matches) {
    $(".familysite > ul").css("display", "none");
    $(".familysite > h6").click(function () {
      $(".familysite > ul").slideToggle(500);
      $(".select span").toggleClass("active");
    });
  } else if (matchMedia("screen and (min-width:768px)").matches) {
    $(".familysite > ul").css("display", "block");
  }

  // ???????????? ?????????
  if(matchMedia('screen and (max-width:767px)').matches){
  }else if(matchMedia('screen and (min-width:768px)').matches){
    $('.menu_icon').click(function(){
      $('.map_wrap').fadeIn(300)
      
    })
    $('.close_btn').click(function(){
      $('.map_wrap').fadeOut(300)
    })
  }
  // ??? ????????? ??????
});
