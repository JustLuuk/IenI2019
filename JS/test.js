function preload() {
    choco = loadImage("images/choco.jpg");
    toren = loadImage("images/toren.jpg");
}

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background (choco);
  Image(toren,torenX,torenY);
  
}