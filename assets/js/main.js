$('#slickReels').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  dots : true,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
