const open = document.querySelector('.open')
const close = document.querySelector('.close')
const navigation = document.querySelector('ul')

open.addEventListener('click', () =>{
    navigation.classList.toggle('active')
})

close.addEventListener('click', () =>{
    navigation.classList.remove('active')
})