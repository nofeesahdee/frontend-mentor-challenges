const hamburger = document.querySelector('.hamburger')
const closenav = document.querySelector('.close')
const nav = document.querySelector('nav')


hamburger.addEventListener('click', () =>{
    nav.classList.add('active');
    closenav.style.display = "block"
    hamburger.style.display = "none"
})

closenav.addEventListener('click', () =>{
    nav.classList.remove('active');
    closenav.style.display = "none"
    hamburger.style.display = "block"
})