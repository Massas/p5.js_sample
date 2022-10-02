let R = 75;
function setup() {
 createCanvas(400, 400);
 noLoop();
}
function draw() {
 background(235);
 fill(0, 0, 200);
 noStroke();
 push();
 translate(width / 2, height / 2);
 for (let i = 0; i < 999; i += 0.01) {
   let A = sin(i) * cos(i * 2) + 1.5;
   let B = (i + cos(i * 2) - cos(i * 3)) / 6;
   circle(R * A * cos(B), R * A * sin(B), 10 * sin(i * 5));
}
 pop();
}