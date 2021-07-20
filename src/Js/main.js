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

  // menu

  let collapse = $(".collapse");
  let bgCollapse = $("#bg-collapse");
  let menuIcon = $(".menu-icon");
  let menuBarOne = $(".menu-bar-one");
  let menuBarTwo = $(".menu-bar-two");

  menuIcon.on("click", function () {
    menuBarOne.toggleClass("menu-bar-one-open");
    menuBarTwo.toggleClass("menu-bar-two-open");
    bgCollapse.toggleClass("bg-collapse");
    collapse.toggleClass("collapse-open");
  });

  bgCollapse.on("click", function () {
    collapse.removeClass("collapse-open");
    menuBarOne.removeClass("menu-bar-one-open");
    menuBarTwo.removeClass("menu-bar-two-open");
    bgCollapse.removeClass("bg-collapse");
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
      menuBarOne.toggleClass("menu-bar-one-open");
      menuBarTwo.toggleClass("menu-bar-two-open");
      bgCollapse.toggleClass("bg-collapse");
      collapse.toggleClass("collapse-open");
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
    $("html, body").animate({ scrollTop: 0 }, 2000);
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

// counter Statistics of world
var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter-world").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value-world").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-countWorld");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 7500,
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

// counter Statistics of iran
var b = 0;
$(window).scroll(function () {
  var oTop = $("#counter-Iran").offset().top - window.innerHeight;
  if (b == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value-Iran").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-countIran");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 10000,
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
    b = 1;
  }
});

let myEelement = $(".info-corona .col-12");

$(window).scroll(function () {
  var hT = myEelement.offset().top,
    hH = myEelement.outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  // console.log(hT - wH, wS);
  if (wS > hT + hH - wH) {
    myEelement.addClass("animate__backInUp");
  }
});
