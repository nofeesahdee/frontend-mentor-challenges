const form = document.querySelector("form");
const input = document.querySelector("#email");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const inputValue = input.value.trim();

    if (inputValue === ''){
        setErrorFor(input, "Email can not be empty");
    }else{
        setSuccessFor(input);
    }
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
