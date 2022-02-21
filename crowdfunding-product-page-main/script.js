// Get the modal
const modalBtn = document.querySelector(".modalBtn");
const modal = document.querySelector(".main-modal");
const modal2 = document.querySelector(".main-modal2");
const span = document.querySelector(".close");
const main = document.querySelector("main");
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");
const checkbox3 = document.querySelector("#checkbox3");
const modalSub1 = document.querySelector(".modal-sub1");
const modalSub2 = document.querySelector(".modal-sub2");
const modalSub3 = document.querySelector(".modal-sub3");
const selectedPledge1 = document.querySelector(".selected-pledge1");
const selectedPledge2 = document.querySelector(".selected-pledge2");
const selectedBtn1 = document.querySelector(".selected-btn1");
const selectedAmount1 = document.querySelector(".selected-amount1");
const selectedBtn2 = document.querySelector(".selected-btn2");
const selectedAmount2 = document.querySelector(".selected-amount2");
const btn = document.querySelector(".btn3");

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
  if (event.target == modal || event.target == modal2) {
    modal.style.display = "none";
    modal2.style.display = "none";
    main.style.position = "absolute";
  }
}

checkbox1.addEventListener('click', () =>{
  if(checkbox1.checked){
    modalSub1.style.border = "2px solid hsl(176, 72%, 28%)"
  }else{
    modalSub1.style.border = "1px solid hsla(0, 0%, 48%, 0.5)"
  }
})

checkbox2.addEventListener('click', () =>{
  if(checkbox2.checked){
    modalSub2.style.border = "2px solid hsl(176, 72%, 28%)"
    selectedPledge1.style.display = "flex"
  }else{
    modalSub2.style.border = "1px solid hsla(0, 0%, 48%, 0.5)"
    selectedPledge1.style.display = "none"
  }
})

checkbox3.addEventListener('click', () =>{
  if(checkbox3.checked){
    modalSub3.style.border = "2px solid hsl(176, 72%, 28%)"
    selectedPledge2.style.display = "flex"
  }else{
    modalSub3.style.border = "1px solid hsla(0, 0%, 48%, 0.5)"
    selectedPledge2.style.display = "none"
  }
})

selectedBtn1.addEventListener('click', () => {
  if(selectedAmount1.value === "" || selectedAmount1.value < 25 ){
    alert("Input Amount or $25 above")
  }else{
    modal.style.display = "none";
    modal2.style.display = "block";
  }
})

selectedBtn2.addEventListener('click', () => {
  if(selectedAmount2.value === "" || selectedAmount1.value < 75 ){
    alert("Input Amount or $75 above")
  }else{
    modal.style.display = "none";
    modal2.style.display = "block";
  }
})
btn.onclick = function() {
  modal2.style.display = "none";
  main.style.position = "absolute";
}
