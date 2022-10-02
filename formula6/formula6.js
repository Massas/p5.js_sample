let R = 100;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(random(255), random(255), random(255));
  
  fill(200, 0, 0);
  noStroke();
    
  push();
  translate(width / 2, height / 2);
  
  for(let i = 0; i < 999; i += 0.01) {
    let A = cos(i) * cos(i * 2) + 0.9;
    let B = (i + cos(i * 3) - cos(i * 5)) / 5 + PI;
    circle(R * A * sin(B), R * A * cos(B), 10 * sin(i * 4));
  }
  pop();
}