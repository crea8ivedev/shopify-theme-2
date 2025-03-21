// start Header dropdown+click functionality
const clickdetailsElements = document.querySelectorAll('.dropdown-click details');

clickdetailsElements.forEach((details) => {
  details.addEventListener('click', function () {
    if (!details.hasAttribute('open')) {
      clickdetailsElements.forEach((otherDetails) => {
        if (otherDetails !== details) {
          otherDetails.removeAttribute('open');
        }
      });
    }
  });
});
// end Header dropdown+click functionality

// Header dropdown+hover functionality
const detailsElements = document.querySelectorAll('.dropdown-hover details');

detailsElements.forEach((details) => {
  details.addEventListener('mouseenter', function () {
    detailsElements.forEach((otherDetails) => {
      if (otherDetails !== details) {
        otherDetails.removeAttribute('open');
      }
    });
    details.setAttribute('open', '');
  });
  details.addEventListener('mouseleave', function () {
    details.removeAttribute('open');
  });
});
// end Header dropdown+hover functionality

// start Header megamenu+click functionality
const clickmegamenuElements = document.querySelectorAll('.megamenu-click details');

clickmegamenuElements.forEach((details) => {
  details.addEventListener('click', function () {
    if (!details.hasAttribute('open')) {
      clickmegamenuElements.forEach((otherDetails) => {
        if (otherDetails !== details) {
          otherDetails.removeAttribute('open');
        }
      });
    }
  });
});
// end Header megamenu+click functionality

// Header megamenu+hover functionality
const hovermegamenuElements = document.querySelectorAll('.megamenu-hover details');

hovermegamenuElements.forEach((details) => {
  details.addEventListener('mouseenter', function () {
    hovermegamenuElements.forEach((otherDetails) => {
      if (otherDetails !== details) {
        otherDetails.removeAttribute('open');
      }
    });
    details.setAttribute('open', '');
  });
  details.addEventListener('mouseleave', function () {
    details.removeAttribute('open');
  });
});
// end Header megamenu+hover functionality

// Header account-popup 
$(".login_popup").click(function () {
    if ($(this).hasClass("active")) {
      // If the login popup is already active, we should close it
      $(this).removeClass("active");
      $(".customer-account").addClass("hidden");
      $(".customer-account").removeClass("login-left");
      $("body").removeClass("overflow-hidden");
      $("#shopify-section-account-popup").hide();
      $(".ctm-login-modal-bg").removeClass("active");
    } else {
      // If the login popup is not active, we should open it
      $(this).addClass("active");
      $(".customer-account").removeClass("hidden");
      $("#shopify-section-account-popup").show();
      $(".ctm-login-modal-bg").addClass("active");
      $(".customer-account").addClass("login-left");
      $("body").addClass("overflow-hidden");
    }
  });
  
  $(".ctm-login-modal-bg").click(function () {
    $(this).removeClass("active");
    $(".customer-account").addClass("hidden");
    $(".customer-account").removeClass("login-left");
    $(".login_popup").removeClass("active");
    $("body").removeClass("overflow-hidden");
    $("#shopify-section-account-popup").hide();
  });
  
  $("#login-none").click(function () {
    $(".login-cta").addClass("d-none");
    $(".reset-password").removeClass("d-none");
  });
  $("#recover-cancel").click(function () {
    $(".login-cta").removeClass("d-none");
    $(".reset-password").addClass("d-none");
  });
  
  $("#regi_forgot_pass").click(function () {
    $("#img-1").addClass("current");
    $("#tab-1").addClass("current");
    $("#login").addClass("current");
    $("#img-2").removeClass("current");
    $("#tab-2").removeClass("current");
    $("#signup").removeClass("current");
  
  });
  $("#regi-recover-cancel").click(function () {
    $(".reset-password").addClass("d-none");
    $(".forgot-block-area").removeClass("d-none");
  });
  
  // popup tabbing
  $(".tab-heading ul li a").click(function () {
    var tab_idd = $(this).attr("data-tab");
    var tab_img = $(this).attr("data-img");
  
    $(".reset-password").addClass("d-none");
    $(".login-cta").removeClass("d-none");
    $(".forgot-block-area").removeClass("d-none");
  
    $(".tab-heading ul li a").removeClass("current");
    $(".account-tab.tab-pane").removeClass("current");
  
    $(this).addClass("current");
    $("#" + tab_idd).addClass("current");
    $("#" + tab_img).addClass("current");
  });