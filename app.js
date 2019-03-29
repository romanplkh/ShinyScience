document.addEventListener("DOMContentLoaded", () => {
  let acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");

      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  const modal = document.querySelector("#myModal");
  const btn = document.querySelector("#myBtn");
  const span = document.getElementsByClassName("close")[0];

  //EVENT LISTENERS
  document.addEventListener("click", ev => {
    clickAnyWhere(ev, modal);
    console.log("clicked");
  });

  btn.addEventListener("click", () => {
    openModal(modal);
  });

  span.addEventListener("click", () => {
    closeModal(modal);
  });

  document.querySelector("#open-menu").addEventListener("click", openSlideMenu);

  document
    .querySelector("#close-menu")
    .addEventListener("click", closeSlideMenu);

  document.querySelector("#prev").addEventListener("click", () => {
    plusSlides(-1);
  });

  document.querySelector("#next").addEventListener("click", () => {
    plusSlides(1);
  });

  showSlides(1);
});

/* HAMBURGER */
const openSlideMenu = () => {
  if (window.innerWidth >= 650) {
    document.querySelector("#side-menu").style.width = "400px";
  } else {
    document.querySelector("#side-menu").style.width = "250px";
  }
  document.querySelector("svg").style.visibility = "hidden";
};

const closeSlideMenu = () => {
  document.querySelector("#side-menu").style.width = "0px";
  document.querySelector("svg").style.visibility = "visible";
};

/* SLIDE SHOW */

// Next/previous controls
let slideIndex = 1;
const plusSlides = n => showSlides((slideIndex += n));

// Thumbnail image controls
const currentSlide = n => showSlides((slideIndex = n));

function showSlides(n) {
  let i;

  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const openModal = modal => (modal.style.display = "block");
const closeModal = modal => (modal.style.display = "none");

const clickAnyWhere = (ev, modal) => {
  if (ev.target == modal) {
    modal.style.display = "none";
  }
};
