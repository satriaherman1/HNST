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


const playVideo = (el) => {
  const videoTarget = el.parentElement.parentElement.querySelector('video');

  if(el.querySelector('i').classList.contains('fa-play')){
    videoTarget.play()
    el.querySelector('i').classList.remove('fa-play')
    el.querySelector('i').classList.add('fa-pause')
  }
  else{
    el.querySelector('i').classList.add('fa-play')
    el.querySelector('i').classList.remove('fa-pause')
    videoTarget.pause()
  }
  
}