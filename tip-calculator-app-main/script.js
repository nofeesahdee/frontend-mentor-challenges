// All input fields
const input = document.querySelectorAll('input')
const bill = document.querySelector('.amount')
const people = document.querySelector('.people')

// All percentage buttons
const buttons = document.querySelectorAll('button')
const fivePercent = document.querySelector('.five')
const tenPercent = document.querySelector('.ten')
const fifteenPercent = document.querySelector('.fifteen')
const twentyfivePercent = document.querySelector('.twentyfive')
const fiftyPercent = document.querySelector('.fifty')
const custom = document.querySelector('.custom')

// All output
const perperson = document.querySelector('.perperson')
const total = document.querySelector('.total')
const reset = document.querySelector('.reset')


// buttons.forEach((button) => {
//     button.addEventListener('click', function() {
//         let tipPerPerson = bill.value * 5
//         perperson.innerHTML = `$${tipPerPerson}`
//         console.log(tipPerPerson)
//     })
     
// })

fivePercent.addEventListener('click', () =>{
    let tipPerPerson = bill.value * 5 / 100
    let totalTip = tipPerPerson * people.value
    perperson.innerHTML = `$${tipPerPerson}`
    total.innerHTML = `$${totalTip}`
    console.log(totalTip)
})

tenPercent.addEventListener('click', () =>{
    let tipPerPerson = bill.value * 10 / 100
    let totalTip = tipPerPerson * people.value
    perperson.innerHTML = `$${tipPerPerson}`
    total.innerHTML = `$${totalTip}`
})

fifteenPercent.addEventListener('click', () =>{
    let tipPerPerson = bill.value * 15 / 100
    let totalTip = tipPerPerson * people.value
    perperson.innerHTML = `$${tipPerPerson}`
    total.innerHTML = `$${totalTip}`
})

twentyfivePercent.addEventListener('click', () =>{
    let tipPerPerson = bill.value * 25 / 100
    let totalTip = tipPerPerson * people.value
    perperson.innerHTML = `$${tipPerPerson}`
    total.innerHTML = `$${totalTip}`
})

fiftyPercent.addEventListener('click', () =>{
    let tipPerPerson = bill.value * 50 / 100
    let totalTip = tipPerPerson * parseint(people.value)
    perperson.innerHTML = `$${tipPerPerson}`
    total.innerHTML = `$${totalTip}`
})

