const open = document.querySelector('.open')
const close = document.querySelector('.close')
const mobileMenu = document.querySelector('.mobile-menu')

open.addEventListener('click', () => {
    open.style.display = 'none'
    close.style.display = 'block'
    mobileMenu.style.display = 'flex'
})

close.addEventListener('click', () => {
    open.style.display = 'block'
    close.style.display = 'none'
    mobileMenu.style.display = 'none'
})