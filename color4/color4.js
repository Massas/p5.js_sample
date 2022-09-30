function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    background(220);
    noStroke();
    for(let i = 0; i < 200; i++) {
        fill(random(0), random(255), 255);
        circle(random(width), random(height), random(5,40));
    }
}