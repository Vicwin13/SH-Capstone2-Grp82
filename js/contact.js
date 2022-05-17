let submit = document.getElementById('submit');

let nameError = document.getElementById('UsernameHelp');
let emailError = document.getElementById('emailHelp');
let numberErr = document.getElementById('numberHelp');
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
nameError.innerHTML= '<i class="bi bi-hand-thumbs-up-fill"></i>';
nameError.style.color ='green';
nameError.style.focus()

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
    numberErr.style.color ='green';
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
    emailError.style.color ='green';
    
    return true;
}

function checkPassword(){
    let password = document.getElementById('Password').value;
    
    let password2 = document.getElementById('Password2').value;
    
    console.log(password, password2)
    
    let passwordErr = document.getElementById('passwordHelp');
    
    if (password.length != 0){
        if (password == password2){
            passwordErr.textContent = 'Password match';
            passwordErr.style.color = 'green';
        }
       
        else{
            passwordErr.textContent = `Password don't match`;
            passwordErr.style.color ='red';
        }
    }
    
    }



function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || checkPassword()){
        submitErr.innerHTML= 'Please input correct details'
        setTimeout(function(){submitErr.style.display='none';}, 20000);
        submitErr.style.color = 'red'
        submitErr.style.fontSize= '16px'
        submitErr.style.fontWeight = 'bolder'
        
        submitErr.focus();

        return false;
    }
}




let eyes2= document.getElementById('slash2');

 eyes2.addEventListener('click', () => {
let password2 = document.getElementById('Password2');

        let type=password2.getAttribute('type')==='password' ? 'text': 'password'
        password2.setAttribute('type', type);
    
       password2.classList.toggle("slashes");
    
    });


    let eyes1 =document.getElementById('slash1');
    eyes1.addEventListener('click', () => {
let password = document.getElementById('Password');
        
        
                let type=password.getAttribute('type')==='password' ? 'text': 'password'
                password.setAttribute('type', type);
            
               password.classList.toggle("slash");
            
            });