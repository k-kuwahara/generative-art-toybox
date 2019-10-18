function setup() {
  createCanvas(400, 400/*, WEBGL */);
  //smooth();
  //rectMode(CENTER);
  //ellipseMode(CENTER);
}

function draw() {

/**
 * draw rectangle
 *
  background(244);
  fill(0, 0, 255, 127);
  noStroke();
  push();
  translate(0, -10);
  rotate(radians(30));
  scale(1.5, 3);
  rect(10, 10, 50, 50); // x, y, width, height, r
  pop();
 */

/**
 * draw torus
 *
  background(200);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  pop();
 */

/**
 * draw circle
 *
  background(220)

  ellipse(50, 50, 80, 80);
 */

/**
 * draw various pattern's fan shapes
  background(220)
  arc(0, -150, 80, 80, 0, PI); // radian
  arc(0, -50, 80, 80, 0, radians(225), OPEN);
  arc(0, 50, 80, 80, 0, radians(225), PIE);
  arc(0, 150, 80, 80, 0, radians(225), CHORD);
 */

  //background(220)
  textSize(32);
  textFont("Helvetica");
  //text color("#008080")
  text("Hello World", 100, 50);
  fill(0, 102, 153);
  text("Hello World", 100, 100);
  fill(0, 102, 153, 127);
  text("Hello World", 100, 150);
}
