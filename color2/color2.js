function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(235);
    noStroke();
    for(let i = 0; i < 150; i++) {
      fill(random(255), random(100), random(255));
      circle(random(width), random(height), random(10, 75));
    }
  }