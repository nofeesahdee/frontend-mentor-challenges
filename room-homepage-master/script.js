let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let leftText = document.querySelectorAll(".left-text");
  let hero = document.querySelectorAll(".hero");
  let hero2 = document.querySelectorAll(".hero2");

  if (n > leftText.length) {slideIndex = 1}
  if (n < 1) {slideIndex = leftText.length}

  for (i = 0; i < leftText.length; i++) {
    leftText[i].className = leftText[i].className.replace(" active", "");
  }

  for (i = 0; i < hero.length; i++) {
    hero[i].className = hero[i].className.replace(" active", "");
  }

  for (i = 0; i < hero2.length; i++) {
    hero2[i].className = hero2[i].className.replace(" active", "");
  }

  leftText[slideIndex-1].className += " active";
  hero[slideIndex-1].className += " active";
  hero2[slideIndex-1].className += " active";
}

const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.ul')

hamburger.addEventListener("click", function(){
  nav.classList.toggle("active")
})
