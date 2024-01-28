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
    // console.log(positionTop);
    if (positionTop > 860) {
        heroMenu.classList.add('hero-menu-active');
    } 
});

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



heroMenuBtn.addEventListener('click', function() {
    popup.classList.add('popup-active')
});

popupClose.addEventListener('click', function() {
    popup.classList.remove('popup-active')
});



