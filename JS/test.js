var hoogte= 1:
var diameter= 1;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  fill('deepskyblue');
  ellipse(450,450,200);
    fill("grey")
    ellipse(0,0,diameter)
  fill('black');
  ellipse(100,100,100);
}