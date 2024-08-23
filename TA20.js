const image = document.getElementById("image");
image.addEventListener("mouseover", imageChange);
image.addEventListener("mouseout", imageReturn);

function imageChange () {
    image.src = "TA20-2.jpg";
}

function imageReturn () {
    image.src = "TA20.jpg";
}
