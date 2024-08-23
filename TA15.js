document.getElementById("btt1").addEventListener("click",clickToggleVisibility);
document.getElementById("btt2").addEventListener("click",clickRemoveElement);

function clickToggleVisibility() {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let input = document.getElementById("inputfield");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
}

function clickRemoveElement() {
    let list = document.getElementById("list")
    let elements = list.getElementsByTagName("li");
    list.removeChild(elements[(elements.length - 1)]);
}