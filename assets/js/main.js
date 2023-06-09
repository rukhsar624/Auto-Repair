(function ($) {
    "use strict";
    //  WOW init
    new WOW().init();
  
  
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 90) {
        $("#navbar-fixed-top").css("background", "#000");
        $("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px");
        $(".destop-nav-bar .header_links").css("color", "#fff");
        $(".destop-nav-bar .logo h1").css("color", "#ffffff");
        $(".destop-nav-bar .header_links.active").css(
          "border-bottom",
          "2px solid #FFA227;"
        );
        $(".hamburger div").css(
          "background", "#FFA227"
        );
        $(".hamburger.active div").css(
          "background", "#8b0129"
        );
      } else {
        $("#navbar-fixed-top").css("background", "none");
        $("#navbar-fixed-top").css("box-shadow", "none");
        $(".destop-nav-bar .header_links").css("color", "#fff");
        $(".destop-nav-bar .logo h1").css("color", "#1a1a1a");
        $(".destop-nav-bar .header_links.active").css(
          "border-bottom",
          "2px solid #FFA227;"
        );
        $(".hamburger div").css(
          "background", "#FFA227"
        );
        $(".hamburger.active div").css(
          "background", "#00000"
        );
      }
    });
    // MOBILE SCREEN SIDE NAV
    var sidebarBox = document.querySelector("#box");
    var sidebarBtn = document.querySelector("#btn");
    var pageWrapper = document.querySelector("#main-content");
  
    sidebarBtn.addEventListener("click", function (event) {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        sidebarBox.classList.remove("active");
        $("#main-content #btn div").css(
          "background", "#ffffff"
        );
      } else {
        this.classList.add("active");
        sidebarBox.classList.add("active");
        $("#main-content #btn div").css(
          "background", "#000"
        );
      }
    });
  
    pageWrapper.addEventListener("click", function (event) {
      if (sidebarBox.classList.contains("active")) {
        sidebarBtn.classList.remove("active");
        sidebarBox.classList.remove("active");
      }
    });
    window.addEventListener("keydown", function (event) {
      if (sidebarBox.classList.contains("active") && event.keyCode === 27) {
        sidebarBtn.classList.remove("active");
        sidebarBox.classList.remove("active");
      }
    });
  
  })
  (jQuery);