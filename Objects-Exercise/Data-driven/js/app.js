let car = { color: "#669304", width: 50, height: 70}

function setup() {
    createCanvas(800,600);
	background(175);
}

function draw() {
	fill(car.color);
	rect(mouseX - car.width/4, mouseY - car.height/2, car.width, car.height);
}