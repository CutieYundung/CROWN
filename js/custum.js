$(document).ready(function () {
  // a클릭시 부드럽게 이동
  $('a').click(function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

  //sec1 풍선 고정
  $(window).scroll(function () {
    //스크롤 높이 측정
    var top = $(window).scrollTop();
    console.log(top);
    
    if (2000 >= top && top >= 1100) {
      $(".sec1_balloon").addClass("fixed");
    } else
    $(".sec1_balloon").removeClass("fixed");
  });

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

// slick slide
$(".auto_slide").slick({
  slidesToShow: 7,
  autoplay: true,
  autoplaySpeed: 0,
  speed:5000,
  cssEase: "linear",
  draggable : true,
  // pauseOnHover: true,
  // arrows: false,
});
$(".slide").slick({
});

// hover
$('.service_text> div > a').on('mouseenter',function(){
  $('.sec4_service').css('background', 'linear-gradient( to left, #B1C5F8, #89E2F2, #F7B1D3, #EADE88, #21F4C9)');
  $('.sec4_bg>p').css('color', '#fff');
})
$('.service_text> div > a').on('mouseleave',function(){
  $('.sec4_service').css('background', '#fff5f6');
  $('.sec4_bg>p').css('color', '#fdcfd4');
})
});