let personas = [
    `Pablo`,`Clara`,`Carlos`,`Clarence`,`Pepe`,`Clarabella`
];
let ul = document.getElementById("listado");
personas.forEach(element => {
    let li = document.createElement("li");
    li.classList.add("listPerson");
    li.appendChild(document.createTextNode(element));
    ul.appendChild(li);
});

let inputfield = document.getElementById('inputfield');
inputfield.onkeyup = function () {
    let filter = inputfield.value.toUpperCase();
    let lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        let name = lis[i].innerText;
        if (name.toUpperCase().indexOf(filter) == 0) 
            lis[i].style.display = '';
        else
            lis[i].style.display = 'none';
    }
}