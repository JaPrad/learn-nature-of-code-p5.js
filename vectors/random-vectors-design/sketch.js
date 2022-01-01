let p;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  translate(width/2, height/2)
  p = p5.Vector.random2D();
  p = p.mult(random(50,100));
  
  stroke(255, 50);
  strokeWeight(random(1,4));
  line(0, 0, p.x, p.y);
}
