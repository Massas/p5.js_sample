function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    noLoop();
  }
  
  function draw() {
    background(235);
    
    let s = 40;
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 5; j++){
        square(i * s * 2 + s, j * s * 2 + s, s);
      }
    }
  }