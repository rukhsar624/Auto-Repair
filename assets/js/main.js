(function ($) {
    "use strict";
    //  WOW init
    new WOW().init();
  
  
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 90) {
        $("#navbar-fixed-top").css("background", "#ffffff");
        $("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px");
        $(".destop-nav-bar .header_links").css("color", "#000000");
        $(".destop-nav-bar .logo h1").css("color", "#ffffff");
        $(".destop-nav-bar .header_links.active").css(
          "border-bottom",
          "2px solid #8b0129;"
        );
        $(".hamburger div").css(
          "background", "#000"
        );
        $(".hamburger.active div").css(
          "background", "#8b0129"
        );
        $(".destop-nav-bar .fa-solid " ).css("color" ,"#000");
        $(".destop-nav-bar .fa-regular " ).css("color" ,"#000");
        $(".destop-nav-bar .example" ).css("border" ,"2px solid #000");
        $(".destop-nav-bar .example" ).css("border-radius" ,"10px");
  
      } else {
        $("#navbar-fixed-top").css("background", "none");
        $("#navbar-fixed-top").css("box-shadow", "none");
        $(".destop-nav-bar .header_links").css("color", "#000");
        $(".destop-nav-bar .logo h1").css("color", "#1a1a1a");
        $(".destop-nav-bar .header_links.active").css(
          "border-bottom",
          "2px solid #8b0129;"
        );
        $(".hamburger div").css(
          "background", "red"
        );
        $(".hamburger.active div").css(
          "background", "#00000"
        );
        $(".destop-nav-bar .fa-solid " ).css("color" ,"#000");
        $(".destop-nav-bar .fa-regular " ).css("color" ,"#000");
        $(".destop-nav-bar .example" ).css("border" ,"none");
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