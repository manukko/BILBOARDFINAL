var img;
 
function preload()
{
  // load image
  img = loadImage("frame.png");
}


function setup() {
  createCanvas(1280, 800);
  background(0);
  
  //define random positions of stars
  x = random(1280);
  y = random(800);
  
  
  //load QR code
  //loadImage('assets/laDefense.jpg', function(img) {
  // image(img, 1600, 900);
  //});
  
  //write text
  fill(255);
  textSize(120);
  textAlign(CENTER);
  text('find me!', 640, 250);
  
  
}

function draw() {
  
}

function mousePressed() {
  //create stars each mouse click
  fill(255);
  noStroke();
  ellipse(x,y,30,30);

  x = random(1280);
  y = random(800);
 
}
