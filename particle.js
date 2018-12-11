function Particle() {
  this.pos = createVector(random(width/4),random(height/3));
  this.vel = p5.Vector.random2D();
  this.acc = createVector(0,0);
  
  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  
  }
  
  this.apllyForce = function(force){
    this.acc.add(force);
  }
  
  this.show = function(){
    stroke(0);
    point(this.pos.x, this.pos.y);
  
  }
  
  
}
