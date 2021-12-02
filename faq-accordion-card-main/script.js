let details = document.querySelectorAll('.details');

details.forEach((detail) => {
    detail.addEventListener("click", () => {
        detail.classList.toggle("active");
        console.log(123)
    })
})
