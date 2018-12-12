
var img;
 
function preload()
{
  // load image
  img = loadImage("frame.png");
}

var inc = 0.01;
var scl = 5; //scale
var cols,rows;

var zoff=0;

var particles = [];

var flowfield;


function setup() {
  createCanvas(1600, 900);
  cols = floor(width/scl);
  rows = floor(height/scl);
  
  flowfield = new Array(cols * rows);
  
  for (var i=0; i<10000; i++){
     particles[i] = new Particle();
  }
   background(0);
   fill(255);
   textSize(100);
   textAlign(CENTER);
   text('find me!', 800, 300);
}

function draw() {
 
  var yoff = 0;
  for(var y = 0; y<rows; y++) {
      var xoff = 0;
      for(var x = 0; x<cols; x++) {
        var index = x + y * cols;
        var angle = noise(xoff,yoff,zoff)*TWO_PI*4;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
        stroke(255,50);
        //push();
        //translate(x*scl,y*scl);
        //rotate(v.heading());
        //strokeWeight(1);
        //line(0,0,scl,0);       
        //pop();
      }
    
     yoff += inc;
    
     zoff += 0.001;
  }  
  
  for (var i=0; i< particles.length; i++){
     particles[i].follow(flowfield);
     particles[i].update();
     particles[i].edges();
     particles[i].show();
     
  }
  
}
