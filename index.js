const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const error = document.getElementById("error");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs(redirect);
});
function checkInputs(callback) {
    //get the values of the input
    if (username.value ==='admin' && password.value ==='12345')
    {
        callback();
        return true;
    }
          
    else{
            
       error.style.visibilty= "visible";
       return false;
    }
        
}
function setErrorfor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    
    small.innerText = message;

    formControl.className= 'form-control error';

}

function redirect(){
    window.location.href="main.html";
}

