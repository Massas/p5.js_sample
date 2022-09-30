function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noLoop();
  }
  
  function draw() {
    background(235);
    
    let d = 20;
    
    push();
    translate(width / 2, height / 2);
    
    for(let t = 0; t < 360; t++) {
      let r = 100;
      let x = r * cos(t);
      let y = r * sin(t);
      
      circle(x, y, d);
    }
    pop();
  }