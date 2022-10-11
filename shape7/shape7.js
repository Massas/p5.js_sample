function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noLoop();
  }
  
  function draw() {
    background(235);
    noFill();
    for(let t = 0; t < 360; t++){
      let r = random(100, 150);
      let x = r * cos(t) + width / 2;
      let y = r * sin(t) + height / 2;
      vertex(x, y);
    }
    endShape();
  }