// Get the modal
const modalBtn = document.querySelector(".modalBtn");
const modal = document.querySelector(".main-modal");
const span = document.querySelector(".close");
const main = document.querySelector("main");
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");
const checkbox3 = document.querySelector("#checkbox3");
const modalSub1 = document.querySelector(".modal-sub1");
const modalSub2 = document.querySelector(".modal-sub2");
const modalSub3 = document.querySelector(".modal-sub3");
const selectedPledges = document.querySelectorAll(".selected-pledge");
const selectedBtns = document.querySelectorAll(".selected-btn");
const selectedAmounts = document.querySelectorAll(".selected-amount");

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
    main.style.position = "absolute";
  }
}

.checkbox1.addEventListener('click', () =>{
  modalSub1.style.border = "2px solid hsl(176, 72%, 28%)";
})
// checkboxes.forEach((checkbox) => {
//   checkbox.onclick = function (){
//     modalSubs.forEach((modalSub) => {
//       modalSub.classList.toggle('active')
//     })
    
//     selectedPledges.forEach((selectedPledge) => {
//       selectedPledge.style.display = "flex"
//     })
//   }
// })

// selectedBtns.forEach((selectedBtn) => {
//  selectedBtn.onclick = function (){
//     if(selectedAmounts.forEach((selectedAmount)=>{
//       selectedAmount.value = ""
//     })){
//       alert("Enter Amount")
//     }else {
//       modal.style.display = "block"
//     }
//   }
// })