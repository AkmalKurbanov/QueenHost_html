$(document).ready(function () {
  // slider  //////////////////////////////////////////////////////////////////
  // mainSlider //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.mainSlider-js', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoHeight: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // mainSlider end //////////////////////////////////////////////////////////////////

  // platform slider  //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.platformSlider-js', {
    slidesPerView: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoHeight: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      991: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1,
      },
    }
  });
  // platform slider end //////////////////////////////////////////////////////////////////

  // reviews slider  //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.reviewsSlider-js', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoHeight: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
      },
      850: {
        slidesPerView: 1,
      },
    }
  });
  // reviews slider end //////////////////////////////////////////////////////////////////


  // slider end  //////////////////////////////////////////////////////////////////
  // mmenu
  $('.mmenu-js ul').clone().appendTo('.mmenu-nav');

  var $menu = $('.mmenu-nav').mmenu({
    'navbar': {
      'title': '<img src=\'images/svg/logoHeader.svg\' alt=\'\' />'
    },
    'extensions': [
      'pagedim-black',
      'position-right',
      'theme-dark'
    ],
    'counters': true,
    'iconbar': {
      'add': true,
      'top': [
        '<a href=\'/\'><i class=\'\'></i></a>'
      ],
      'bottom': [
        '<a target=\'_blank\' href=\'#\'><i class=\'\'></i></a>',
        '<a target=\'_blank\' href=\'#\'><i class=\'\'></i></a>',
        '<a target=\'_blank\' href=\'#\'><i class=\'\'></i></a>',
        '<a target=\'_blank\' href=\'#\'><i class=\'\'></i></a>'
      ]
    },
    'navbars': [{
      'position': 'bottom',
      'content': [
        '<a target=\'_blank\' class=\'\' href=\'#\'></a>',
        '<a target=\'_blank\' class=\'\' href=\'#\'></a>',
        '<a target=\'_blank\' class=\'\' href=\'#\'></a>',
        '<a target=\'_blank\' class=\'\' href=\'#\'></a>'
      ]
    }]
  });

  var $icon = $('.flabHamburger');
  var API = $menu.data('mmenu');

  $icon.on('click', function () {
    API.open();
  });

  API.bind('open:start', function ($panel) {
    $('.flabHamburger').toggleClass('flabHamburger--open');
  });

  API.bind('close:start', function ($panel) {
    $('.flabHamburger').toggleClass('flabHamburger--open');
  });



  // mmenu


  // accardion 
  $('.accardion-js .flabFaq__acardionItem span').on('click', function () {
    $(this).next().next().slideToggle();
    // $('.flabFaq__desc').toggleClass('accardion');
    $(this).parent().toggleClass('accItem');
    $(this).next('.fa-angle-down').toggleClass('positionIcon');
  });

  $('.fa-angle-down').on('click', function () {
    $(this).next().slideToggle('accardion');
    $(this).parent().toggleClass('accItem');
    $(this).toggleClass('positionIcon');
  });

  // accardion end

  // animation
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true,
    callback: function (box) {

    },
    scrollContainer: null
  });
  wow.init();
  // animation end

  // anchor links
  $('.mmenu-js ul li a').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      var scrollTo = target.offset().top;
      $('body, html').animate({
        scrollTop: scrollTo + 'px'
      }, 800);
    }
  });
  // anchor links end



























});
