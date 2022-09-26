function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    background(235);

    for (let i = 0; i < 9; i++){
        circle(i * 50, height / 2, 50);
    }
}