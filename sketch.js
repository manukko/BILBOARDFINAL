
var inc = 0.01;
var scl = 5; //scale
var cols,rows;

var zoff=0;

var particles = [];

var flowfield;

var canw = screen.width;
var canh = screen.height;


var s = 4;
var img;

function preload(){

    img = loadImage('parallel_qr_to_ar.png');
  }


function setup() {
  createCanvas(canw, canh);
  cols = floor(width/scl);
  rows = floor(height/scl);
  
  flowfield = new Array(cols * rows);
  
  for (var i=0; i<8000; i++){
     particles[i] = new Particle();
  }
   background(0);
 
   fill(255);
   textSize(120);
   textAlign(CENTER);
   text('find me!', canw/2, canh/3);
 
   a = random(canw);
   b = random(canh);
  
  for(var i=0; i<30; i++){
    fill(255);
    noStroke();
    quad(a-s, b, a, b+s, a+s, b, a, b-s);
    a = random(canw);
    b = random(canh);
  }
    
    image(img,screen.width/2 -100, screen.height/1.2 -100, 200, 200);
    
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
 
function mousePressed() {
  //create stars each mouse click
  
  fill(255);
  noStroke();
  quad(a-s, b, a, b+s, a+s, b, a, b-s);
  a = random(canw);
  b = random(canh);
 
}
