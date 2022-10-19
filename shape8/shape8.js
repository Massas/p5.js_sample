function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noLoop();
  }
  
  function draw() {
    background(235);
    noFill();
    let noiseMax = 3;
    beginShape();
    for(let t = 0; t < 360; t++){
      let xoff = map(cos(t), -1, 1, 0, noiseMax);
      let yoff = map(sin(t), -1, 1, 0, noiseMax);
      
      let r = map(noise(xoff, yoff), 0, 1, 100, 150);
      let x = r * cos(t) + width /2;
      let y = r * sin(t) + height / 2;
      vertex(x, y);
    }
      endShape();
  }