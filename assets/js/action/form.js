const scriptURL = "https://script.google.com/macros/s/AKfycbwL5cmtENVqKvrZ6QTYcusFtOq5QoOUx_8GNSdU9cw1wpAo01Yu7HjZNI1xSGckrVTz/exec";
const emailScriptURL = "https://script.google.com/macros/s/AKfycbwpRC5VkQruWnd2dwPFBRRUA0EHTOB6iZFjjy9TEKB5pabKcCL8OkjTpF17Vak6ppFd/exec";
const form = document.forms["HNST-Form"];
const formEmail = document.forms["HNST-Email"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const button = form.querySelector("button");
  const input = form.querySelectorAll("input");
  const textarea = form.querySelectorAll("textarea");
  button.innerHTML = `<div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>`;
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      Swal.fire("Submission received! 👍");
      button.innerHTML = "Submit";
      const modal = document.querySelectorAll(".modal");
      const modalBackdrop = document.querySelectorAll(".modal-backdrop");

      input.forEach((i) => {
        i.value = "";
      });
      textarea.forEach((txt) => {
        txt.value = "";
      });
      modal.forEach((m) => {
        m.style.display = "none";
        $(m).find(".dismiss").trigger({
          type: "click",
        });
      });
      modalBackdrop.forEach((m) => {
        m.classList.remove("show");
      });
    })
    .catch((error) => {
      Swal.fire("Error", "Something Went Wrong When Send Your Email", "error");
      console.error("Error!", error.message);
    });
});

formEmail.addEventListener("submit", (e) => {
  e.preventDefault();
  const button = formEmail.querySelector("button");
  const input = formEmail.querySelector("input");

  button.innerHTML = `<div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>`;
  fetch(emailScriptURL, {
    method: "POST",
    body: new FormData(formEmail),
  })
    .then((response) => {
      input.value = "";
      Swal.fire("Submission received! 👍");
      button.innerHTML = "Sign Up";
    })
    .catch((error) => {
      input.value = "";
      console.error("Error!", error.message);
      Swal.fire("Error", "Something Went Wrong When Send Your Email", "error");
    });
});
