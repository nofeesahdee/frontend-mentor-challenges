const open = document.querySelector('.icon-open')
const close = document.querySelector('.icon-close')
const nav = document.querySelector('nav')

open.addEventListener('click', () =>{
    nav.style.display= "block"
    open.style.display = "none"
    close.style.display = "block"
})

close.addEventListener('click', () =>{
    nav.style.display= "none"
    open.style.display = "block"
    close.style.display = "none"
})