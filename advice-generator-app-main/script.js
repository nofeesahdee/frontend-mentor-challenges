const adviceId = document.querySelector('.advice-id')
const adviceText = document.querySelector('.advice-text')
const iconDice = document.querySelector('.icon-dice')

generateAdvice()

function generateAdvice(){
    fetch('https://api.adviceslip.com/advice',{
        headers:{
            'Accept': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {
        adviceText.innerHTML = `<h1>"${data.slip.advice}"</h1>` 
        adviceId.textContent = data.slip.id
    })
}
iconDice.addEventListener('click', generateAdvice)