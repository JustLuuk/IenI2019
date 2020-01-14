var aantal = 20;
var x;
var y;
var diameter;
var R;
var G;
var B;

function setup() {
  canvas = createCanvas(451,451);
  canvas.parent('processing');
  frameRate(5);
  //noLoop();
  strokeWeight(4);
  stroke(R,G,B);
}

function draw() {
  background('white');
  for (var n = 0; n < aantal; n ++){
  x = random(50,400);
  y = random(50,400);
  diameter = random(25,75);
  ellipse(x,y,diameter);
  R = random(1,256);
  G = random(1,256);
  B = random(1,256);
  
  }

}
