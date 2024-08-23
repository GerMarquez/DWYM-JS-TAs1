document.getElementById("btt").addEventListener("click",clickAddElement);

function clickAddElement() {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let input = document.getElementById("inputfield");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
}