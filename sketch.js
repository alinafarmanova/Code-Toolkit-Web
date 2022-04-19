//global vars
let cycle_period = 800;
let i = 10;
let num_frame = 10;
let width = 1500;
let alpha = 0;
let value = 0;

//canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(250, 250, 250);
}

function draw() {
    background(0, 0, 0)
    for(let i = 0; i < num_frame; i++){
    value = (frameCount%cycle_period)/cycle_period*(2*PI);
    let c = i/num_frame;
    let j = sin(value+c);
    j *= 5;
    alpha = abs(j)
    
    // color
    let red = 100+cos(value+c)*150;
    let green = 0;
    let blue = 200+cos(value+c)*250;
    fill(red, green, blue, 40+alpha);
   
    push();
    
    let x = -width * sin(value+c)/2;
    let y = -width * sin(value+c)/2
    let draw_width = width*sin(value+c);
    // translate(windowWidth/2, windowHeight/2);
    square(x, y, draw_width);
    pop();
  }
}