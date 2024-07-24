$(document).ready(function() {

  'use strict';

  // =====================
  // Koenig Gallery
  // =====================
  var gallery_images = document.querySelectorAll('.kg-gallery-image img');

  gallery_images.forEach(function (image) {
    var container = image.closest('.kg-gallery-image');
    var width = image.attributes.width.value;
    var height = image.attributes.height.value;
    var ratio = width / height;
    container.style.flex = ratio + ' 1 0%';
  });

  // =====================
  // Decode HTML entities returned by Ghost translations
  // Input: Plus d&#x27;articles
  // Output: Plus d'articles
  // =====================

  function decoding_translation_chars(string) {
    return $('<textarea/>').html(string).text();
  }

  // =====================
  // Headroom
  // =====================

  // $('.js-header').headroom({
  //   tolerance: {
  //     down : 10,
  //     up : 20
  //   },
  //   classes: {
  //     initial:  'js-header--headroom',
  //     top:      'js-header--top',
  //     notTop:   'js-header--not-top',
  //     pinned:   'js-header--pinned',
  //     unpinned: 'js-header--unpinned'
  //   }
  // });

  // =====================
  // Navigation
  // =====================

  $('.js-nav-toggle').click(function(e) {
    e.preventDefault();
    $('.c-nav-wrap').toggleClass('is-active');
    $(this).toggleClass('c-nav-toggle--close');
  });

  // =====================
  // Responsive videos
  // =====================

  $('.c-content').fitVids({
    'customSelector': [ 'iframe[src*="ted.com"]'          ,
                        'iframe[src*="player.twitch.tv"]' ,
                        'iframe[src*="dailymotion.com"]'  ,
                        'iframe[src*="facebook.com"]'
                      ]
  });

  // =====================
  // Images zoom
  // =====================

  $('.c-post img').attr('data-action', 'zoom');

  // If the image is inside a link, remove zoom
  $('.c-post a img').removeAttr('data-action');

  // =====================
  // Clipboard URL Copy
  // =====================

  var clipboard = new ClipboardJS('.js-share__link--clipboard');

  clipboard.on('success', function(e) {
    var element = $(e.trigger);

    element.addClass('tooltipped tooltipped-s');
    element.attr('aria-label', clipboard_copied_text);

    element.mouseleave(function() {
      $(this).removeAttr('aria-label');
      $(this).removeClass('tooltipped tooltipped-s');
    });
  });

  // =====================
  // Search
  // =====================

  var search_field = $('.js-search-input'),
      search_results = $('.js-search-results'),
      toggle_search = $('.js-search-toggle'),
      search_result_template = "\
      <a href={{link}} class='c-search-result'>\
        <div class='c-search-result__content'>\
          <h3 class='c-search-result__title'>{{title}}</h3>\
          <time class='c-search-result__date'>{{pubDate}}</time>\
        </div>\
        <div class='c-search-result__media'>\
          <div class='c-search-result__image is-inview' style='background-image: url({{featureImage}})'></div>\
        </div>\
      </a>";

  toggle_search.click(function(e) {
    e.preventDefault();
    $('.js-search').addClass('is-active');

    // If off-canvas is active, just disable it
    $('.js-off-canvas-container').removeClass('is-active');

    setTimeout(function() {
      search_field.focus();
    }, 500);
  });

  $('.c-search, .js-search-close, .js-search-close .icon').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'js-search-close' || event.target.className == 'icon' || event.keyCode == 27) {
      $('.c-search').removeClass('is-active');
    }
  });

  // search_field.ghostHunter({
  //   results: search_results,
  //   onKeyUp         : true,
  //   result_template : search_result_template,
  //   zeroResultsInfo : false,
  //   displaySearchInfo: false,
  //   before: function() {
  //     search_results.fadeIn();
  //   }
  // });

  // =====================
  // Ajax Load More
  // =====================

  var pagination_next_url = $('link[rel=next]').attr('href'),
    $load_posts_button = $('.js-load-posts');

    if (pagination_next_page_number) {
      $load_posts_button.removeClass('hidden');
      $load_posts_button.addClass('flex');
    }


  $load_posts_button.click(function(e) {
    e.preventDefault();

    var request_next_link =
      pagination_next_url.split(/page/)[0] +
      'page/' +
      pagination_next_page_number +
      '/';

    $.ajax({
      url: request_next_link,
      beforeSend: function() {
        $load_posts_button.text(decoding_translation_chars(pagination_loading_text));
        $load_posts_button.addClass('c-btn--loading');
      }
    }).done(function(data) {
      var posts = $('.post-article', data);

      $('.posts-wrapper ').append(posts);

      $load_posts_button.text(decoding_translation_chars(pagination_more_posts_text));
      $load_posts_button.removeClass('c-btn--loading');

      pagination_next_page_number++;

      // If you are on the last pagination page, hide the load more button
      if (pagination_next_page_number > pagination_available_pages_number) {
        $load_posts_button.addClass('c-btn--disabled').attr('disabled', true);
      }
    });
  });
});



const swiper = new Swiper('.shop-swiper', {
  // If we need pagination
  pagination: {
    el: '.shop-carousel .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.shop-carousel .swiper-button-next',
    prevEl: '.shop-carousel .swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.shop-carousel .swiper-scrollbar',
  },

  spaceBetween: 20,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 2
      },
      navigation: {
        enabled: false
      },
      pagination: {
        enabled: true
      }
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2
      },
      navigation: {
        enabled: false
      },
      pagination: {
        enabled: true
      }
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
      grid: {
        rows: 2
      },
      navigation: {
        enabled: false
      },
      pagination: {
        enabled: true
      }
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 26,
      navigation: {
        enabled: false
      },
      pagination: {
        enabled: false
      }
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 26,
      navigation: {
        enabled: true
      },
      pagination: {
        enabled: false
      }
    },
  }
});


var drawerOpen = document.querySelector(".drawer-open");
var drawerClose = document.querySelector(".drawer-close");

drawerOpen.addEventListener('click', function(e) {
  document.body.classList.add('view-mobile-menu')
});

drawerClose.addEventListener('click', function(e) {
  document.body.classList.remove('view-mobile-menu')
});

var search = document.getElementById("search");
if (search) {
  search.addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = '/search/' + encodeURIComponent(this.q.value.trim());
    return false;
  });
}

var mSearch = document.getElementById("m-search");

mSearch.addEventListener('submit', function(e) {
  e.preventDefault();
  window.location.href = '/search/' + encodeURIComponent(this.q.value.trim());
  return false;
});



const tag_swiper = new Swiper('.tag-swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.tag-carousel .swiper-button-next',
    prevEl: '.tag-carousel .swiper-button-prev',
  },

  pagination: {
    el: '.tag-carousel .swiper-pagination',
    type: 'fraction'
  },

  slidesPerView: 1,
  grid: {
    rows: 2
  },
  spaceBetween: 40,

  // Responsive breakpoints
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 60,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      pagination: {
        enabled: true
      }
    },
  }
});

const shop_hero = new Swiper('.shop-hero-swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.shop-hero-carousel .swiper-button-next',
    prevEl: '.shop-hero-carousel .swiper-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 40,
});



const { pathname } = new URL(window.location.href);
const pathList = pathname.split('/');
if (pathList[1] === 'shop') {
  let shop_nav_label = document.querySelector('.tc-nav .nav-shop .nav-label');
  if (shop_nav_label) {
    shop_nav_label.classList.add('current');
  }
}

