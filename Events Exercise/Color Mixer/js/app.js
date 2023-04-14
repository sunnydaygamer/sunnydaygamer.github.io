var red = 0;
var green = 0;
var blue = 0;

//For red
document.getElementById("red1").onclick = function(red){red = red + 1; change()};
document.getElementById("red5").onclick = function(red){red = red + 5; change()};
document.getElementById("red10").onclick = function(red){red = red + 10; change()};

//for green
document.getElementById("green1").onclick = function(green){green = green + 1; change()};
document.getElementById("green5").onclick = function(green){green = green + 5; change()};
document.getElementById("green10").onclick = function(green){green = green + 10; change()};

//for blue
document.getElementById("blue1").onclick = function(blue){blue = blue + 1; change()};
document.getElementById("blue5").onclick = function(blue){blue = blue + 5; change()};
document.getElementById("blue10").onclick = function(blue){blue = blue + 10; change()};

//updates text
function change(){
    document.getElementById("div").style.backgroundColor = "rgb(red, green, blue)";

    let text = document.getElementById("color");
    text.innerHTML = "Current Color: rgb(" + red + "," + green + "," + blue +")";
}