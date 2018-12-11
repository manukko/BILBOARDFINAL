//var xoff1 = 0;
//var xoff2 = 1110;
var inc = 0.1;
var scl = 10; //scale
var cols, rows;

var zoff=0;


function setup() {
  createCanvas(1600, 900);
  
  //pixelDensity(1); //we did for mac retina WHEN WE USE PIXEL FUNCTION
  cols = floor((width/4)/scl);
  rows = floor((height/3)/scl);
}

function draw() {
  background(0);
  
  var yoff = 0;
  
 
  for(var x = 0; x<rows; x++) {
      var xoff = 0;
      for(var y = 0; y<cols; y++) {
        var index = (x + y*width)*4;
        var angle = noise(xoff,yoff,zoff)*TWO_PI;
        //var v = createVector();
        var v = p5.Vector.fromAngle(angle);
        xoff += inc;
        //fill(random(255));
        //fill(r);
        //rect(x*scl, y*scl, scl, scl);
        stroke(255);
        push();
        translate(x*scl,y*scl);
        rotate(v.heading());
        line(0,0,scl,0);
        
        pop();
      }
    yoff += inc;
    
    zoff += 0.01;
  }  
 
  
}
 
