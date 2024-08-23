document.getElementById("btt1").addEventListener("click",clickToggleVisibility);

function clickToggleVisibility() {
    let paragraph = document.getElementById("hideableParagraph");
    if (paragraph.style.visibility === "visible"){
        paragraph.style.visibility = "hidden";
    } else {
        paragraph.style.visibility = "visible"
    }
}