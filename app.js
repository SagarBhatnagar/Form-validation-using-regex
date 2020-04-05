document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
    const name = document.getElementById('name');
    const re = /^[A-Za-z]{1,15} [A-Za-z]{1,15}$/;

    if(!re.test(name.value)){
         name.classList.add('is-invalid');
    }
    else{
        name.classList.remove('is-invalid');
    }
}

function validateZip(){
    const zip = document.getElementById('zip');
    const re = /^[0-9]{6}$/;
    
    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
   }
   else{
       zip.classList.remove('is-invalid');
   }

}

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([0-9A-Za-z_\-\.]+)@([0-9A-Za-z_\-\.]+)\.([a-zA-Z]{2,5})$/
    if(!re.test(email.value)){
        email.classList.add('is-invalid');
   }
   else{
       email.classList.remove('is-invalid');
   }

}

function validatePhone(){
    const email = document.getElementById('phone');
    const re = /^[0-9]{10}$/
    if(!re.test(phone.value)){
        email.classList.add('is-invalid');
   }
   else{
       phone.classList.remove('is-invalid');
   }
}

