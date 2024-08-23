const height = document.querySelector("#height span");
const width = document.querySelector("#width span");

window.addEventListener('resize', windowSizeChange);


function windowSizeChange() {
    height.innerText = window.innerHeight;
    width.innerText = window.innerWidth;
}

windowSizeChange();