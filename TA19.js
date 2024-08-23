let inputName = document.getElementById('inputName');
let inputPassword = document.getElementById('inputPassword');
let inputEmail = document.getElementById('inputEmail');

let errorMessages = document.getElementsByClassName('error');

let bttSend = document.getElementById('bttSend');

inputName.onkeyup = function () {
    if (inputName.value === ''){
        errorMessages[0].style.visibility = 'visible';
    } else {
        errorMessages[0].style.visibility = 'hidden';
    }
}

inputPassword.onkeyup = function () {
    if (inputPassword.value === ''){
        errorMessages[1].style.visibility = 'visible';
    } 
    if (inputPassword.value.length < 8){
        errorMessages[1].style.visibility = 'visible'
    }
    else {
        errorMessages[1].style.visibility = 'hidden';
    }
}

inputEmail.onkeyup = function () {
    if (inputEmail.value === ''){
        errorMessages[2].style.visibility = 'visible';
    }
    if (!(validateEmail(inputEmail.value))) {
        errorMessages[2].style.visibility = 'visible';
    }
    else {
        errorMessages[2].style.visibility = 'hidden';
    }
}

bttSend.addEventListener("click",clickSendInfo);

function clickSendInfo () {
    if ((errorMessages[0].style.visibility === 'visible')
        ||(errorMessages[1].style.visibility === 'visible')
        ||(errorMessages[2].style.visibility === 'visible')
        ||((inputName.value === '')&&(inputPassword.value === '')&&(inputEmail.value === ''))) {
        document.getElementById('failMsg').style.visibility = 'visible';
    } else {
        document.getElementById('successMsg').style.visibility = 'visible';
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }