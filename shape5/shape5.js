function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(235);
    noFill();
    beginShape();
    for(let i = 0; i < width; i++){
      let x = i;
      let y = map(noise(i * 0.01), 0, 1, height * 0.25, height * 0.75);
      vertex(x, y);
    }
    endShape();
  }