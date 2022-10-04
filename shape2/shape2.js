function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(220);
    noFill();
    beginShape();
    for (let i = 0; i < width; i++) {
    vertex(i, random(height * 0.25, height * 0.75));
    }
    endShape();  
  }