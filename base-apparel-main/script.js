const input = document.querySelector('.in')
const submit = document.querySelector('.sub')
const para = document.querySelector('.error')

submit.addEventListener('click', checkInput)

function checkInput(){
    if(input.value == ""){
        para.innerHTML = "Please provide a valid email"
    }else{
        return "input.value"
    }
}