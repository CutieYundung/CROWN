  $(document).ready(function () {
    if (matchMedia("screen and (max-width: 767px)").matches) {
      //레이아웃 순서
      $(".document_box:last").prependTo(".documents");
      $(".documents").css("margin-left", "-32vw");

      $(
        ".document_box:nth-child(1),.document_box:nth-child(2),.document_box:nth-child(3)"
      ).appendTo(".documents");

      $(".public_btn_prev").click(function () {
        $(".documents").animate(
          {
            marginLeft: "+=32vw",
          },
          500,
          function () {
            $(".document_box:last").prependTo(".documents");
            $(".documents").css("margin-left", "-32vw");
          }
        );
      });
      $(".public_btn_next").click(function () {
        $(".documents").animate(
          {
            marginLeft: "-=32vw",
          },
          500,
          function () {
            $(".document_box:first").appendTo(".documents");
            $(".documents").css("margin-left", "-32vw");
          }
        );
      });
  )