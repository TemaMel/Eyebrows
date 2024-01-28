let headerAnimate = document.querySelector('.hero-animation'),
    mastersSlide = document.querySelectorAll('.swiper-slide'),
    masterDescr = document.querySelector('.masters-swiper-descr'),
    masterSlideDescr = document.getElementById('masterSlide');


window.addEventListener("scroll", function() {
    headerAnimate.style.transform = "rotate("+window.pageYOffset/5+"deg)";
});

window.addEventListener("optimizedScroll", function(){
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})

let swiper = new Swiper('.masters-swiper', {
    // Optional parameters
    // direction: 'horizonal',
    slidesPerView: 5.8,
    spaceBetween: 30,
    loop: true,
    
    // centeredSlides: true,
    breakpoints: {
      1660: {
          slidesPerView: 5.5,
          spaceBetween: 20,
        },
      1440: {
        slidesPerView: 4.4,
      },
      1200: {
        slidesPerView: 3.5,
      },
      992: {
          slidesPerView: 2.9,
        },
      769: {
          slidesPerView: 2.5,
      },
      576: {
          slidesPerView: 1.9,
      },
      450: {
        slidesPerView: 1.5,
      },
      410: {
        slidesPerView: 1.3,
      },
      360: {
          slidesPerView: 1.2,
      },
      300: {
        slidesPerView: 1,
    },
    },
  
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiper.on('slideChange', ({ el, slides, activeIndex }) => {
    el.querySelector('.masters-swiper-descr')?.classList.remove('masters-swiper-descr-active');
    slides[activeIndex].querySelector('.masters-swiper-descr').classList.add('masters-swiper-descr-active');
});


const swiperReviews = new Swiper('.reviews-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3.5,
    spaceBetween: 20,
    // centeredSlides: true,
  
    breakpoints: {
        1660: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        1440: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
            slidesPerView: 1.5,
          },
        769: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
      },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

let heroMenu = document.querySelector('.hero-menu'),
    hamburger = document.querySelector('.hamburger'),
    mobile = document.querySelector('.mobile'),
    mobileClose = document.querySelector('.mobile-close'),
    heroMenuBtn = document.querySelector('.hero-menu-btn');
    popup = document.querySelector('.popup'),
    popupClose = document.querySelector('.popup-close');


window.addEventListener('scroll', function() {
  let positionTop = window.scrollY;
  console.log(positionTop);
  var x = window.matchMedia("(max-width: 576px)");
  var y = window.matchMedia("(max-width: 1920px)");
  if(x.matches) {
    if (positionTop > 282) {
      // console.log('hey');
      heroMenu.classList.add('hero-menu-mob');
    } 
    else {
      heroMenu.classList.remove('hero-menu-mob');
    }
  }
  if(y.matches) {
    if (positionTop > 850) {
      heroMenu.classList.add('hero-menu-active');
    } else {
      heroMenu.classList.remove('hero-menu-active');
    }
  }
})


hamburger.addEventListener('click', function() {
    heroMenu.classList.remove('hero-menu-active'),
    heroMenu.classList.add('hero-menu-disable')
    mobile.classList.add('mobile-active');
});

mobileClose.addEventListener('click', function() {
  heroMenu.classList.add('hero-menu-active'),
  heroMenu.classList.remove('hero-menu-disable')
  mobile.classList.remove('mobile-active');
})


// this._el.addEventListener('click', (e) => {
//   const elHeader = e.target.closest('.price-item-title');
//   console.log(elHeader);
//   if (!elHeader) {
//     return;
//   }
//   if (!this._config.alwaysOpen) {
//     const elOpenItem = this._el.querySelector('.price-item-show');
//     if(elOpenItem) {
//       elOpenItem !== elHeader.parentElement ? elOpenItem.classList.togggle('price-item-show') : null;
//     }
//   }
//   elHeader.parentElement.classList.toggle('.price-item-show');
// });


// window.addEventListener('click', function(event) {
//   if (event.target.hasAttribute('data-cart')) {
//         let priceItem = document.querySelector('.price-item'),
//             priceItemTitle = document.querySelector('.price-item-title'),
//             priceItemList = document.querySelector('.price-item-list');
          
//         // priceItem.classList.add('price-item-active'),
//         // priceItemTitle.classList.add('price-item-title-active'),
//         // priceItemList.classList.add('price-item-list-active');
//         if(priceItem.classList.contains('price-item-active')) {
//           priceItem.classList.remove('price-item-active'),
//           priceItemTitle.classList.remove('price-item-title-active'),
//           priceItemList.classList.remove('price-item-list-active');
//         }
//         else {
//           priceItem.classList.add('price-item-active'),
//           priceItemTitle.classList.add('price-item-title-active'),
//           priceItemList.classList.add('price-item-list-active');
//         }
//         console.log('привет');
//       }
// })




$(function(){
  //обрабатываем клик по блоку с классом trigger
  $('.trigger').on('click', function(e){
      e.preventDefault();
  //получаем нужные нам данные
          var $this = $(this),
          //получаем всё блоки menu
          container = $this.closest('.menu'),
          //получаем li по которому кликнули
          item = $this.closest('.item'),
          //получаем все другие li
          items = container.find('.item'),
          //выбираем из li активный
          activeItem = items.filter('.active'),
          //выбираем из li по которому кликнули блок контен
          content = item.find('.content'),
          //выбираем у li с классом active блок контент
          activeContent = activeItem.find('.content');
   
          //если нет li с классом active по которому кликнули
          if (!item.hasClass('active')) {
              //убираем класс active
              items.removeClass('active');
              //добавляем active кликнутому
              item.addClass('active');
              //у того у кого был active задаём ширину 0
              activeContent.animate({
                     'width' : '0px'
              });
              //кликнутому 530       
              content.animate({
                     'width' : '530px'
              });
          //иначе
          } else {
              item.removeClass('active');
              content.animate({
                     'width' : '0px'
              });
   
          }
  });
   
  // клик вне аккордеона
  $(document).on('click', function (e) {
     var $this = $(e.target);
     if (!$this.closest('.menu').length) {
           $('.content').animate({
                 'width' : '0px'
           });
           $('.item').removeClass('active');
     }
  });
  });

