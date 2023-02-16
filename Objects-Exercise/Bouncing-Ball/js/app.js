var x;
var changeDirection;
let xSpeed = 5;

function setup() {
  createCanvas(400, 400);
	x = 1;
	x = x + xSpeed;
	changeDirection = false;
}

function draw() {
  background(220);
	ellipse(x,50,50);
	fill(172, 165, 20);
	if(x>width){
		changeDirection=true}
	else if (x<=0){
		changeDirection=false}
	
	if (x>=0 && changeDirection == false){
		x=x+1}
	else if(changeDirection == true){
		x=x-1}
}