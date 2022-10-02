function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(227, 167, 183);
  
  noStroke();
  fill(242, 212, 219);
  
  let d = 5;
  
  push();
  translate(width / 2, height / 2);
  
  for(let t = 0; t < 360; t++) {
    let A = 5 / 180 * t;
    let md = floor(A) % 2;
    let or = 200;
    let r = pow(-1, md) * (A - floor(A)) + md;
    let R = r < 0.8 ? or * r : or * (r + 2 * (0.8 - r));
    let x = R * cos(t + 90);
    let y = R * sin(t + 90);
    
    circle(x, y, d);
  }
  pop();
}