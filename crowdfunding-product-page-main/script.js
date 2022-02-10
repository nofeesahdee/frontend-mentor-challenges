// Get the modal
const modalBtn = document.querySelector(".modalBtn");
const modal = document.querySelector(".main-modal");
const span = document.querySelector(".close");
const main = document.querySelector("main");

// When the user clicks on the button, open the modal
modalBtn.onclick = function() {
  modal.style.display = "block";
  main.style.position = "fixed";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  main.style.position = "absolute";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
