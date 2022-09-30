function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 300, 100, 100, 100);
    noLoop();
}

function draw() {
    background(95);
    noStroke();
    for(let i = 0; i < 300; i++) {
        fill(random(360), 120, 100, 50);
        circle(random(width), random(height), random(10,50));
    }
}