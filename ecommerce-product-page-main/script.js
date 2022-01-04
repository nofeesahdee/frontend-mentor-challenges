const thumbnail_1 = document.querySelector('.thumbnail-1')
const thumbnail_2 = document.querySelector('.thumbnail-2')
const thumbnail_3 = document.querySelector('.thumbnail-3')
const thumbnail_4 = document.querySelector('.thumbnail-4')

const product_1 = document.querySelector('.product-1')
const product_2 = document.querySelector('.product-2')
const product_3 = document.querySelector('.product-3')
const product_4 = document.querySelector('.product-4')

const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const numberCounter = document.querySelector('.number-counter')
let count = 0

const button = document.querySelector('.btn')
const cartOutput = document.querySelector('.cart-output')

const cart = document.querySelector('.cart')
const cartDisplay = document.querySelector('.cart-display')
const productPrice = document.querySelector('.product-price')
const checkout = document.querySelector('.checkout')

thumbnail_1.addEventListener('click', () => {
    product_1.style.display = "block";
    product_2.style.display = "none";
    product_3.style.display = "none";
    product_4.style.display = "none";
})
thumbnail_2.addEventListener('click', () => {
    product_2.style.display = "block";
    product_1.style.display = "none";
    product_3.style.display = "none";
    product_4.style.display = "none";
})
thumbnail_3.addEventListener('click', () => {
    product_3.style.display = "block";
    product_1.style.display = "none";
    product_2.style.display = "none";
    product_4.style.display = "none";
})

thumbnail_4.addEventListener('click', () => {
    product_4.style.display = "block";
    product_1.style.display = "none";
    product_2.style.display = "none";
    product_3.style.display = "none";
})

plus.addEventListener('click', () => {
    count++
    numberCounter.innerHTML = count;
})

minus.addEventListener('click', () => {
    count--
    numberCounter.innerHTML = count;
})

button.addEventListener('click', () =>{
    cartOutput.style.display = "block"
    cartOutput.innerHTML = count
    multiply = 125 * count
    productPrice.innerHTML = `$125 * ${count} = $${multiply}`
})

cart.addEventListener('click', () =>{
    cartDisplay.style.display = "block"
})

checkout.addEventListener('click', () => {
    cartOutput.style.display = "none"
    cartDisplay.style.display = "none"
    // numberCounter.innerHTML = count - count
})