$('#slickReels').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  dots : false,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        dots: false
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

const textList = ['Chess ♟️' , 'Econ 101 📊', 'Photography 📷', 'Guitar 🎸' , 'YouTube ▶️',
                  'Writing ✍️' ,'Speed Reading 📚', 'Personal Finance 💸' , 'Software 🧑‍💻',
                 'Piano 🎹', 'Français 🇫🇷' , 'Drawing 🎨', 'Copyright Law ⚖️' , 'Poker 🃏',
                 'Filmmaking 🎬']
const slideContainer = document.querySelector('.slide-container .slider')
textList.map((text) => {
  slideContainer.innerHTML += `<h1 class="color-primary w-fit mx-auto finance-personal ">${text}</h1>`
})

let indexTextList = 0;

const changeTextListUp = () => {
  el = [...document.querySelectorAll('.finance-personal')]
  const slider = document.querySelector('.slider')
  let marginTop
  if(window.innerWidth > 768){
    marginTop = (82 * 2 + 20.75)
  }
  else{
    marginTop = (44 * 2 + 5)
  }
  if(indexTextList >= textList.length - 1){
    if(window.innerWidth > 768){
      marginTop += 0.3
    }
      textList.map((text) => {
        slideContainer.innerHTML += `<h1 class="color-primary w-fit mx-auto finance-personal ">${text}</h1>`
      })
      indexTextList = 0
    }
  else{
    indexTextList += 1;
  }
  const sliderStyle = getComputedStyle(slider)
  
  slider.style.marginTop = parseFloat(sliderStyle.getPropertyValue('margin-top')) - marginTop + "px"
  
}

setInterval(changeTextListUp, 2000)



const maxCharChange =  (el) => {
  if(el.length.value < 300){
    
  }
}

const confirmSubmit = () => {
  Swal.fire({
    title: 'Do you want to submit this form?',
    showDenyButton: true,
    // showCancelButton: true,
    confirmButtonText: 'Submit',
    denyButtonText: `Not Yet`,
  }).then(result => {
    console.log(result)
    if(result.isConfirmed){
      // $('#smallForm').removeClass('.show')
      // $('#smallForm').css({
      //   'display' : 'none'
      // })
      const modal = document.querySelectorAll('.modal');
      const modalBackdrop = document.querySelectorAll('.modal-backdrop');
      modal.forEach((m) => {
        m.style.display = "none"
        $(m).find('.dismiss').trigger({
          type : 'click'
        })
      })
      modalBackdrop.forEach(m => {
        m.classList.remove('show')
      })
    }
  })
}