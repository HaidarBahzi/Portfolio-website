/* Page Loading */

const title = document.title;
const loadingPage = document.getElementById("loading");
document.title = "Loading...";

/* Page Finished Loading */

window.addEventListener("load", function () {
  document.title = title;
  loadingPage.style.display = "none";
  typing();
  isIntersecting();
  otherIntersect();
});

/* Home Animation */

function typing() {
  document.querySelector(".home-title").style.animation = "typing 2.25s forwards";
}

/* Show when intersect */

function isIntersecting() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElement = document.querySelectorAll(".hidden");
  hiddenElement.forEach((el) => observer.observe(el));
}

/* other intersect animation */

function otherIntersect() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showSlide");
      } else {
        entry.target.classList.remove("showSlide");
      }
    });
  });

  const hiddenElement = document.querySelectorAll(".hideSlide");
  hiddenElement.forEach((el) => observer.observe(el));
}

/* Home Button */

const homeButton = document.getElementById("home-btn").addEventListener("click", function () {
  window.open("https://github.com/haidarbahzi");
});

/* Send Form To Google Form */

const formInput = document.forms["form-contact"];
const result = document.querySelector(".result");
const scriptURL = "https://script.google.com/macros/s/AKfycbw65exA_gDwqm9IHaxA-86lvJ2EjxJBUey9dxnh_ON2SSNpuOzEQQfR-ewDiUU2U4dW/exec";

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formInput.checkValidity()) {
    result.innerHTML = "Great, your data is valid and we are sending your message :)";
    result.style.borderColor = "green";
    sendToSheets();
  }
});

function sendToSheets() {
  fetch(scriptURL, { method: "POST", body: new FormData(formInput) })
    .then((response) => {
      if (screen.width <= "800") {
        alert("Thanks, we are receiving your message :)");
      } else {
        successToSend();
        setTimeout(defaultBackForm, 5000);
      }
    })
    .catch((error) => {
      if (screen.width <= "800") {
        alert("Sorry, we cannot receive your message :(");
      } else {
        failToSend();
        setTimeout(defaultBackForm, 5000);
      }
    });
}

let defaultForm = result.innerHTML;

function successToSend() {
  (result.innerHTML = "Thanks, we are receiving your message :)"), (result.style.borderColor = "green"), formInput.reset();
}

function failToSend() {
  (result.innerHTML = "Sorry, we cannot receive your message :("), (result.style.borderColor = "red");
}

function defaultBackForm() {
  (result.innerHTML = defaultForm), (result.style.borderColor = "white");
}

/* Copyright Year */
let yearNow = new Date().getFullYear();

document.querySelector(".year").innerHTML = " " + yearNow + " ";
