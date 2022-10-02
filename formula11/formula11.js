let R = 75;
function setup() {
 createCanvas(400, 400);
 noLoop();
}
function draw() {
 background(random(255));
 fill(random(255), random(255), random(255));
 noStroke();
 push();
 translate(width / 2, height / 2);
 for (let i = 0; i < 999; i += 0.01) {
   let A = sin(i) * cos(i * 2) + random(3);
   let B = (i + cos(i * 2) - cos(i * 3)) / 6;
   circle(R * A * cos(B), R * A * sin(B), 10 * sin(i * 5));
}
 pop();
}