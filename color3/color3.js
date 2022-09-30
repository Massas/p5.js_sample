function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(200);
    noStroke();
    for(let i = 0; i < 200; i++) {
      fill(random(100), random(200), random(255));
      circle(random(width), random(height), random(5, 60));
    }
  }