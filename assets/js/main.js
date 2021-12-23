$("#slickReels").slick({
  centerMode: true,
  centerPadding: "10px",
  slidesToShow: 3,
  dots: false,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
});

const playVideo = (el) => {
  const videoTarget = el.parentElement.parentElement.querySelector("video");

  if (el.querySelector("i").classList.contains("fa-play")) {
    videoTarget.play();
    el.querySelector("i").classList.remove("fa-play");
    el.querySelector("i").classList.add("fa-pause");
  } else {
    el.querySelector("i").classList.add("fa-play");
    el.querySelector("i").classList.remove("fa-pause");
    videoTarget.pause();
  }
};

const maxCharChange = (el) => {
  if (el.length.value < 300) {
  }
};

const confirmSubmit = () => {
  Swal.fire({
    title: "Do you want to submit this form?",
    showDenyButton: true,
    confirmButtonText: "Submit",
    denyButtonText: `Not Yet`,
  }).then((result) => {
    if (result.isConfirmed) {
      const modal = document.querySelectorAll(".modal");
      const modalBackdrop = document.querySelectorAll(".modal-backdrop");
      modal.forEach((m) => {
        m.style.display = "none";
        $(m).find(".dismiss").trigger({
          type: "click",
        });
      });
      modalBackdrop.forEach((m) => {
        m.classList.remove("show");
      });
    }
  });
};

window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  const loadingContainer = document.querySelector(".loading-container");
  loading.style.width = 100 + "%";
  setTimeout(() => {
    loadingContainer.style.opacity = 0;
  }, 3000);
  setTimeout(() => {
    loadingContainer.style.display = "none";
  }, 3200);
});
