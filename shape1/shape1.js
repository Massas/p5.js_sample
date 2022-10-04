function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    noFill();
    beginShape();
    for (let i = 0; i < width; i++) {
    vertex(i, height / 2);
    }
    endShape();  
  }