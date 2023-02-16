let car = { color: "#dd9bc5", width: 50, height: 70, x: 600, y: 50}
let car2 = { color: "#A020F0", width: 40, height: 60, x: 30, y:50 }
function setup() {
    createCanvas(800,600);
    background(175);
}

function draw() {
    background(100);
    fill(car.color);
    rect(car.x, car.y, car.width, car.height);

    fill(car2.color);
    rect(car2.x, car2.y, car2.width, car2.height);

    if (keyIsDown(UP_ARROW)) {
        car.y -= 5;
      }

      if (keyIsDown(DOWN_ARROW)) {
        car.y += 5;
      }

      if (keyIsDown(UP_ARROW)) {
        car2.y += 5;
      }

      if (keyIsDown(DOWN_ARROW)) {
        car2.y -= 5;
      }

}
