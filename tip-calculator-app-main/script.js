// Global declarations
const buttons = document.querySelectorAll('.btn')
const perperson = document.querySelector('.perperson')
const totalAmount = document.querySelector('.total')
const reset = document.querySelector('.reset')
const inputs = document.querySelectorAll('input')
const customInput = document.querySelector('.custom-input')
const custom = document.querySelector('.custom')

// BUTTONS 
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        let buttonValue = button.value
        let billAmount = document.querySelector('.amount').value
        let peopleNumber = document.querySelector('.people').value
       
        let tipPerPerson = (buttonValue * billAmount).toFixed(2)
        let total = (tipPerPerson * peopleNumber).toFixed(2)

        let bill = document.querySelector('.amount')
        let people = document.querySelector('.people')

        if(billAmount === "" || peopleNumber === ""){
            bill.classList.add('error')
            people.classList.add('error')
        }else if(billAmount <= 0 || peopleNumber <= 0){
            alert('enter a valid input')
        }else{
            perperson.innerHTML = `$${tipPerPerson}`
            totalAmount.innerHTML = `$${total}`
            bill.classList.remove('error')
            people.classList.remove('error')
        }
    })
})

// CUSTOM
custom.addEventListener('click', () =>{
    custom.style.display = 'none'
    customInput.style.display = 'block'
})

customInput.addEventListener('click', () =>{
    customInputValue = customInput.value / 100
    let billAmount = document.querySelector('.amount').value
    let peopleNumber = document.querySelector('.people').value

    let tipPerPerson = (customInputValue * billAmount).toFixed(2)
    let total = (tipPerPerson * peopleNumber).toFixed(2)

    let bill = document.querySelector('.amount')
    let people = document.querySelector('.people')

    if(billAmount === "" || peopleNumber === ""){
        bill.classList.add('error')
        people.classList.add('error')
    }else if(billAmount <= 0 || peopleNumber <= 0){
        alert('enter a valid input')
    }else{
        perperson.innerHTML = `$${tipPerPerson}`
        totalAmount.innerHTML = `$${total}`
        bill.classList.remove('error')
        people.classList.remove('error')
    }
})

// RESET
reset.addEventListener('click', () => {

})