let x, y, r = 30;
let angle = 0;
let slider, button;

function setup() {
  createCanvas(600, 480);
  smooth();
  noStroke();
  background('skyblue');

  slider = createSlider(0, 100, 30);
  slider.position(10, 20);

  button = createButton("Clear");
  button.position(10, 40);
  button.mousePressed(() => background("skyblue"));
}

function draw() {
  x = random(width);
  y = random(height);
  r = slider.value();

  translate(width/2, height/2);
  x = sin(radians(angle)) * r;
  y = cos(radians(angle)) * r;

  ellipse(x, y, 10, 10);
  angle += 2;
}
