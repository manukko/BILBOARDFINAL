var img;
 
function preload()
{
  // load image
  img = loadImage("qr.png");
}


function setup() {
  createCanvas(1600, 900);
  background(0);
  
  //define random positions of stars
  x = random(1600);
  y = random(900);
  
  
  //load QR code
  //loadImage('assets/laDefense.jpg', function(img) {
  // image(img, 1600, 900);
  //});
  
  //write text
  fill(255);
  textSize(100);
  textAlign(CENTER);
  text('find me!', 800, 300);
  
  
}

function draw() {
  
}

function mousePressed() {
  //create stars each mouse click
  fill(255);
  noStroke();
  ellipse(x,y,5,5);

  x = random(1600);
  y = random(900);
 
}
