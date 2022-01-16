let gravity;
let wind;

function setup() {
  createCanvas(400, 400);
  
  mover = new Mover(200, 200);
}

function draw() {
  background(0);
  
  gravity = createVector(0,0.098);
  wind = createVector(0.02, 0);
  
  mover.applyForce(gravity);
  
  if(mouseIsPressed){
    mover.applyForce(wind);
}  
  mover.edges();
  mover.update();
  mover.show();
}
