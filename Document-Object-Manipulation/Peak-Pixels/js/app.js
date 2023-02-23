let box = document.getElementById("box");
let size = 100;

box.style.backgroundColor = "#4f8c37";
box.style.width = size + "px";
box.style.height = size + "px";

function increaseDiv() {
    size = size + 10;
    box.style.backgroundColor = "#4f8c37";
    box.style.width = size + "px";
    box.style.height = size + "px";
}