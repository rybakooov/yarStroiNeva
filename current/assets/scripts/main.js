$(document).ready(function(){
  $(document).on("change", ".contacts-file input", function() {
    let file = $(this)[0].files[0].name;
    $(".contacts-file").hide();
    $(".contacts__file span").html(file);
    $(".contacts__file").show().css("display", "flex");
  });
  $(document).on("click", ".contacts__file svg", function() {
    $(".contacts-file input")[0].value = "";
    $(".contacts__file").hide();
    $(".contacts__file span").html('');
    $(".contacts-file").show();
  });

  $(document).on("click", ".header-burger", function () {
    $('.header-burger__burger').toggleClass('active');
    $('.headerMobile').toggleClass('active');
  });

  $(document).on('click', '.header-contacts__button', function() {
    $("html, body").animate({scrollTop: ($("#form").offset().top - 100)+"px"});
  })

  /*Slider*/

  $(".product-item-slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    infinite: true
  });

  $(".product-info__title").click(function(e) {
    e.preventDefault();
    $(".product-info__title").removeClass("active");
    $(".js-tab-content").removeClass("active");

    $(this).addClass("active");
    $($(this).attr("href")).addClass("active");
  });



  $(document).on('click', '.contacts-tabs__tab:not(.contacts-tabs__tab_active)', function(){
    $('.contacts-tabs__tab_active').removeClass('contacts-tabs__tab_active');
    $(this).addClass('contacts-tabs__tab_active');

    $('.contacts-tabs').toggleClass('contacts-tabs_switch')
  })









  //! add
  $(document).on('click', '.product-item-content-bot__order', function(){
    $('.popup').fadeIn().css('display', 'flex');
  })
  $(document).on('click', '.popupForm__close', function(){
    $('.popup').fadeOut();
  })
  $(document).on('click', '.popupForm', function(e){
    e.stopPropagation();
  })
  $(document).on('click', '.popup', function(){
    $(this).fadeOut();
  })
  //! add
});