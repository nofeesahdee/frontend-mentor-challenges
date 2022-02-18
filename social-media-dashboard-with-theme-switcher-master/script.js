const body = document.querySelector('body')
const checkbox = document.querySelector('#checkbox')
const nathans = document.querySelectorAll('.nathan')
const overviews = document.querySelectorAll('.overview')

checkbox.addEventListener('click',() =>{
    body.classList.toggle('light-mode');

    nathans.forEach((nathan) => {
        nathan.classList.toggle('lighter')
    })

    overviews.forEach((overview) => {
        overview.classList.toggle('lighter')
    })
})
