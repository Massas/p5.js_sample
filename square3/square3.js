let palette = ["#e07a5f", "#3d405b", "#81b29a", "#f2cc8f"];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background("#f4f1de");
  
  let s = 40;
  for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
      let x = i * s * 2 + s;
      let y = j * s * 2 + s;
      
      noStroke();
      fill(random(palette));
      
      if(random(100) >= 50){
        square(x, y, s);
      }else{
        circle(x, y, s);
      }
    }
  }
}