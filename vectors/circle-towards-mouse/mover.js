let mousePos

class Mover {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
    this.acc = createVector();
  }
  update(){
    mousePos = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mousePos, this.pos);
    this.acc.setMag(0.5 );
    
    
    this.vel.add(this.acc);
    this.vel.limit(7);
    
    this.pos.add(this.vel);
  }
  show(){
    fill(255);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 10);
  }
}
