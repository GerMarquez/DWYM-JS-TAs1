const input = document.getElementById("inputField");
input.addEventListener("focusin",focusChange);
input.addEventListener("focusout",blurChange);

function focusChange () {
    input.style.borderColor = "black";
}

function blurChange () {
    input.style.borderColor = "white";
}
