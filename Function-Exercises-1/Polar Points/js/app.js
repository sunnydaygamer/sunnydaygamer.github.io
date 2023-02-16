//Sunny Mason, 2/2/2023, Intro to Media App Dev
function draw() {
    background(30)
    stroke(255)
    noFill()

    translate(width/2,height/2)

    beginShape();
    for ( var i = 0; i < 359; i++) {
        var r = 100
        var x = r * cos(i)
        var y = r * sin(i)
        vertex(x,y)
    }
    endShape(CLOSE)
}