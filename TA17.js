document.getElementById("btt1").addEventListener("click",clickIncreaseCounter);

function clickIncreaseCounter() {
    let counter = document.getElementById("counter");
    let intCounter = Number(counter.innerText);
    intCounter ++;
    counter.innerText = intCounter;

}