function setup() {
    createCanvas(400, 400);
    noLoop();
}
  
function draw() {
    background(235);

    for (let i = 0; i < 9; i++){
        circle(random(width), random(height), 50);
    }
}