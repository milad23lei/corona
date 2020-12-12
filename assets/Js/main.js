$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  function menuscroll() {
    let navmenu = $("menu");
    if ($(window).scrollTop() > 70) {
      navmenu.addClass("up-scrolling");
    } else {
      navmenu.removeClass("up-scrolling");
      navmenu.addClass("down-scrolling");
    }
  }
  menuscroll();
  $(window).on("scroll", menuscroll);

  function scroller() {
    let scroll_bar = $("::-webkit-scrollbar");
    scroll_bar.hide(0);
    if ($(window).scrollTop()) {
      scroll_bar.show(200);
    } else {
      scroll_bar.hide(0);
    }
  }
  scroller();
  $(window).on("scroll", scroller);

  // load

  // menu

  $(".fa-bars").on("click", function () {
    $(".collapse").slideDown(750);
  });

  $(".fa-times").on("click", function () {
    $(".collapse").slideUp(500);
  });

  $("#serach-modal").hide();

  $("#openSearch").on("click", function () {
    $("#serach-modal").fadeIn(500);
  });

  $("#closeSearch").on("click", function () {
    $("#serach-modal").slideToggle(500);
  });

  scroller();
  $(window).on("scroll", scroller);

  $("#navbar .navbar-nav a").on("click", function (e) {
    let target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  $(".navbar-nav a").on("click", function () {
    if ($(window).width() < 768) {
      $(".collapse").slideUp(500);
    }
  });

  // btn top
  var btn = $(".btn-top");
  btn.hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 450) {
      btn.fadeIn(350);
    } else {
      btn.fadeOut(350);
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "2000");
  });

  // clock
  // var clock = $(".online-clock");
  // clock.hide();
  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > 450) {
  //     clock.show(50);
  //   } else {
  //     clock.hide(50);
  //   }
  // });
  // $(".clock-icon").on("click", function () {
  //   $(clock).toggleClass("opened");
  //   $(".clock-icon .fa-clock-o").toggleClass("icon-clock");
  //   icon = $(this).find("i");
  //   icon.toggleClass("fa-angle-right fa-angle-left");
  // });
  // var d = setInterval(myDate, 1000);
  // function myDate() {
  //   var date = new Date();
  //   document.getElementById("onlineClock").innerHTML = date.toLocaleTimeString();
  // }
  // if ($(window).width() < 767) {
  //   $(clock).css("left", "-52%");
  //   $(".clock-icon").on("click", function () {
  //     $(clock).toggleClass("opened");
  //     // $(".clock-icon .fa-clock-o").toggleClass("icon-clock");
  //     // icon = $(this).find("i");
  //     // icon.toggleClass("fa-angle-right fa-angle-left");
  //   });
  // } else {
  //   // change functionality for larger screens
  // }
});

// counter
var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            // alert("finished");
          },
        }
      );
    });
    a = 1;
  }
});
