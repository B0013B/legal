
//   $('.slider__item').slick({
//     centerMode: true,
//     centerPadding: '20px',
//     slidesToShow: 5,
  
//     arrows: true,
//     prevArrow: '<button class="slick-prev custom-arrow">‹</button>',
//     nextArrow: '<button class="slick-next custom-arrow">›</button>',
  
//     dots: false,
//     customPaging: (slider, i) => `<span class="custom-dot"></span>`,
  
//     autoplay: true,
//     autoplaySpeed: 2500,
// speed: 1000,
  
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: true, 
//           dots: true,
//           centerMode: true,
//           centerPadding: '20px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: true, 
//           dots: true,
//           centerMode: true,
//           centerPadding: '20px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
  
$('.slider__item').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 5,

  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),

  dots: false,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1000,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '20px'
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
});
