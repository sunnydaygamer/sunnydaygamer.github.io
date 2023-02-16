//Sunny Mason, 2/2/2023, Intro to Media App Dev
let x = 0

function setup() {
    createCanvas(600,600);
}

function draw() {
//makes images move
//needs to be above the actual function of what the image looks like
    drawCar(mouseX, mouseY);
    drawCar(mouseX - 20, mouseY - 10);
}

//actually what the car looks like
function drawCar(x,y) {
    //drawing a car??
    fill(170,60,70);
    rect(x,y,50,40);
    fill(66,66,66);
    ellipse(x+13,y+40,20)
    ellipse(x+40,y+40,20)
    //was originally gonna have stroke weight but nah
}