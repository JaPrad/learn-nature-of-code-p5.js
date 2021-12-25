let particle

function setup() {
  createCanvas(400, 400);
  background(0);
  particle = new Walker(200, 200);
}

function draw() {
  
  particle.show();
  particle.update();
}
