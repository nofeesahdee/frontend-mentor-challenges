const body = document.querySelector('body')
const checkbox = document.querySelector('.slider')
const nathan = document.getElementsByClassname('nathan')
const overview = document.querySelector('.overview')

checkbox.addEventListener('click',() =>{
    body.classList.toggle('light-mode');
    nathan.classList.toggle('light-mode')
    overview.classList.toggle('light-mode')
})
