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
      360: {
          slidesPerView: 1.2,
      },
    },
  
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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


// if (mastersSlide.classList.contains('swiper-slide-active')) {
//     masterDescr.classList.add('masters-swiper-descr-active')
// } else {
//     masterDescr.classList.remove('masters-swiper-descr-active')
// }



// $(document).ready(function() {
//     $('.price-item').click(function() {
//         const parent = $(this).parent();
//         if (parent.hasClass('price-item-active')) {
//             parent.removeClass('price-item-active'),
//             $('.price-item-title').removeClass('price-item-title-active'),
//             $('.price-item-list').removeClass('price-item-list-active');
//         } else {
//             parent.addClass('price-item-active'),
//             $('.price-item-title').addClass('price-item-title-active'),
//             $('.price-item-list').addClass('price-item-list-active');
//         }
//     })
// })

