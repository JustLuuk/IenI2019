var rij = 0;

function setup() {
  canvas = createCanvas(451,451);
  canvas.parent('processing');
  background('coral');
  fill('white');
}

function draw() {
    for (var kolom = 0;kolom < 450;kolom += 50)
    for (var rij = 0;rij < 450;rij += 50) {

        if (kolom == 300 && kolom < 350 && rij == 150 && rij < 200){
            fill (orange);
        }
      rect(kolom,rij,50,50);

     
    }
}