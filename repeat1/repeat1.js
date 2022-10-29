function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    noLoop();
  }
  
  function draw() {
    background(235);
    noStroke();
    fill(0);
    drawRect(width / 2, height / 2, 300);
  }
  
  function drawRect(x, y, s) {
    rect(x, y, s, 10);
    if(s > 5) {
      drawRect(x - s /3, y + 25, s / 3);
      drawRect(x + s /3, y + 25, s / 3); 
    }
  }