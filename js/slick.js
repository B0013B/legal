
  $('.slider__item').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    arrows: false, 
    dots: true,    
    customPaging: (slider, i) => `<span class="custom-dot"></span>`,
autoplay: true,
autoplaySpeed: 1500,
speed: 3000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1
        }
      }
      
    ]
  });
  

