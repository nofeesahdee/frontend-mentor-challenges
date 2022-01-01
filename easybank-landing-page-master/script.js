const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.querySelector('nav')
const button = document.querySelector('.nav-btn')

open.addEventListener('click', () => {
    nav.classList.add('active');
    close.style.display = 'block'
    open.style.display = 'none'
})

close.addEventListener('click', () => {
    nav.classList.remove('active');
    close.style.display = 'none'
    open.style.display = 'block'
})