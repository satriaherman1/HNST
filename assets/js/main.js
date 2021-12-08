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
let indexTextList = 0;

const changeTextListUp = () => {
  el = document.querySelector('.finance-personal')
  el.classList.remove('downAnimation')
  el.classList.add('upAnimation')
  setTimeout(() => changeTextListDown(), 1000)
}
const changeTextListDown = () => {
  el.classList.remove('upAnimation')
  el.classList.add('downAnimation')
  el = document.querySelector('.finance-personal')
  el.textContent = textList[indexTextList];
  if(indexTextList >= textList.length){
    indexTextList = 0;
  }
  else{
    indexTextList += 1
  }
}

setInterval(changeTextListUp, 4000)

