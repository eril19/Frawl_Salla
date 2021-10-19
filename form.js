const form = document.querySelector("#form-insert");

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const name = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    const gender = document.getElementsByName('gender');
    const check = document.querySelector('#term');
    const error = document.querySelector('#error-msg');

    error.innerHTML=''

    if(isEmpty(name.value)){
        alert('Username cannot be empty');
        error.innerHTML = "Username cannot be empty";
    } 
    else if(email.value.length==0){
        alert('Email cannot be empty');
        error.innerHTML = "Email cannot be empty";
    } 
    else if(!isEmailValid(email.value)){
        alert('Email Format is Incorrect');
        error.innerHTML = "Email Format is Incorrect";
    } 
    else if(password.length==0){
        alert('Password cannot be empty');
        error.innerHTML = "Password cannot be empty";
    } 
    else if(password.length <8 && password.length >0){
        alert('Password must be 8 characters minimum');
        error.innerHTML = "Password must be 8 characters minimum";
    } 
    else if(confirm.length==0){
        alert('Please confirm your password');
        error.innerHTML = "Please confirm your password";
    } 
    else if(confirm!= password){
        alert('The passwords are not the same');
        error.innerHTML = "The passwords are not the same";
    } 
    else if(!(gender[0].checked || gender[1].checked )){
        alert('Please choose the gender');
        error.innerHTML = "Please choose the gender";   
    }
    else if(!check.checked){
        alert('You need to agree the terms and conditions');
        error.innerHTML = "You need to agree the terms and conditions";

    }

function isEmpty(str){
    return str === "";
}

function isEmailValid(value){
    if(value.split('@').length != 2){
        return false;
    }
    if(!value.endsWith('.com')){
        return false;
    }
    if(value.includes('@.') || value.includes('.@')) {
        return false;
    }
    return true;
}

})