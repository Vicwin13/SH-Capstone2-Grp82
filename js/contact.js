let form =document.getElementById('main-form');
let submit = document.getElementById('submit');

let nameError = document.getElementById('UsernameHelp');
let emailError = document.getElementById('emailHelp');
let numberErr = document.getElementById('numberHelp');
let passwordErr = document.getElementById('passwordHelp');
let password2Err = document.getElementById('password2Help');
let submitErr = document.getElementById('submitHelp');


function validateName(){
    
let username = document.getElementById('Username').value;
    
if (username.length == 0){
    nameError.innerHTML= 'Name is required';
    return false;
}
if(!username.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write your full name';
    return false;
}
nameError.innerHTML= 'valid';
return true;

}

function validatePhone(){

let number = document.getElementById('Number').value;

if (number.length== 0){
    numberErr.innerHTML = 'Phone number is required';
    return false;
}
if (number.length !== 11){
    numberErr.innerHTML = 'Incomplete digits';
    return false;

}
if (!number.match(/^[0-9]{11}$/)){
    numberErr.innerHTML = 'Incomplete digits';
    return false;
}
    numberErr.innerHTML ='<i class="bi bi-hand-thumbs-up-fill"></i>'
    numberErr.style.color ='seagreen'
    return true;
}

function validateEmail(){
    let email = document.getElementById('Email').value;

    if ( email.length == 0){
        emailError.innerHTML = 'Please input email'
        return false;

    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML=' email Invalid';
        return false;
    }
   
    emailError.innerHTML = '<i class="bi bi-hand-thumbs-up-fill"></i>';
    return true;
}

function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail()){
        submitErr.innerHTML= 'Please input correct details'
        setTimeout(function(){submitErr.style.display='none';}, 2000)
        submitErr.style.color = 'red'
        submitErr.style.fontSize= '16px'
        submitErr.style.fontWeight = 'bolder'

        return false;
    }
}

function checkPassword(){
let password = document.getElementById('Password').value;

let password2 = document.getElementById('Password2').value;

console.log(password, password2)


}