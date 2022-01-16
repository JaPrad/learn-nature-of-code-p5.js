let r = 30;

class Mover {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.acc = createVector();
  }
  
    applyForce(force){
    this.acc.add(force);
  }

  update(){
    this.vel.add(this.acc);   
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
  edges(){
    
    if(this.pos.y > (height-r+(r/2))) {
      this.pos.y = height-r+(r/2);
      this.vel.y *= -1;
       }
    
    if (this.pos.x > (width - r + (r/2) )) {
      this.pos.x = width - r + (r/2);
      this.vel.x *= -1;
       }
    
    if (this.pos.x < r - (r/2)) {
      this.pos.x = r - (r/2);
      this.vel.x *= -1;
       }
  }
  
  show(){
    fill(100);
    stroke(255);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, r);
  } 
}
