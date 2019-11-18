function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('pink');
  triangle(450,0,0,225,450,450);

   noStroke();
  fill('purple');
  triangle(450,225,0,0,0,450);
}
