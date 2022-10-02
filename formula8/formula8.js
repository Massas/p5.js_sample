let R = 80;
function setup() {
 createCanvas(400, 400);
 noLoop();
}
function draw() {
 background(235);
 fill(0, 200, 0);
 noStroke();
 push();
 translate(width / 2, height / 2);
 for (let i = 0; i < 999; i += 0.01) {
 let A = cos(i * 2) * cos(i * 4) + 1.5;
 let B = (i * 2 + cos(i * 13) - cos(i * 17)) / 8 + PI / 8;
 circle(R * A * sin(B), R * A * cos(B), 10 * sin(i * 4));
}
 pop();
}