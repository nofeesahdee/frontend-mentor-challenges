let share = document.querySelector(".share");
let socials = document.querySelector(".social-icons");

share.addEventListener("click", () => {
    socials.classList.toggle("active");
})