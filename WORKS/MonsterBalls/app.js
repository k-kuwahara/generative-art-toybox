const weight = 5;
let base;
let span;

function setup() {
  createCanvas((W = windowHeight - 50), W);
  noFill();
  rectMode(CENTER);
  background(255);
  strokeWeight(weight);
  strokeCap(ROUND);

  span = W / 5;
  base = PI / 45;

  for (let i = span / 2; i < W; i += span) {
    for (let j = span / 2; j < W; j += span) {
      drawRandomBall(i, j, ~~random(10));
    }
  }
}

function drawRandomBall(i, j, pattern) {
  switch (pattern) {
    // normal monster ball
    case 0:
      stroke(255, 0, 0);
      drawBallOutline(i, j, "top");
      stroke(0);
      drawBallOutline(i, j, "bottom");
      break;
    // super ball
    case 1:
      stroke(1, 100, 144);
      drawBallOutline(i, j, "top");
      stroke(0);
      drawBallOutline(i, j, "bottom");

      stroke(230, 27, 32);
      drawDrop(
        i - span / 4,
        j - sqrt(pow(span / 3, 2) - pow(span / 6, 2)) + 3,
        30,
        4,
        QUARTER_PI
      );
      drawDrop(
        i + span / 4,
        j - sqrt(pow(span / 3, 2) - pow(span / 6, 2)) + 3,
        30,
        4,
        3 * QUARTER_PI
      );
      break;
    // hyper ball
    case 2:
      stroke(0);
      drawBallOutline(i, j, "top");
      drawBallOutline(i, j, "bottom");

      // draw H
      push();
      stroke(255, 215, 0);
      strokeWeight(10);
      line(
        i - span / 6,
        j - 3 * cos(base) - 8,
        i - span / 6,
        j - sqrt(pow(span / 3, 2) - pow(span / 6, 2)) + 10
      );
      line(
        i + span / 6,
        j - 3 * cos(base) - 8,
        i + span / 6,
        j - sqrt(pow(span / 3, 2) - pow(span / 6, 2)) + 10
      );
      pop();
      break;
    // master ball
    case 3:
      stroke(146, 33, 139);
      drawBallOutline(i, j, "top");
      push();
      textSize(24);
      textAlign(CENTER);
      noStroke();
      fill(146, 33, 139);
      text("M", i, j - span / 7.5);
      pop();

      stroke(0);
      drawBallOutline(i, j, "bottom");

      // draw two block
      stroke(208, 11, 136);
      drawBlock(
        i - span / 4.5,
        j - sqrt(pow(span / 3, 2) - pow(span / 6, 2)),
        30,
        4,
        QUARTER_PI
      );
      drawBlock(
        i + span / 4.5,
        j - sqrt(pow(span / 3, 2) - pow(span / 6, 2)),
        30,
        4,
        3 * QUARTER_PI
      );
      break;
  }

  push();
  fill(255);
  strokeWeight(4);
  stroke(0);
  ellipse(i, j, span / 4.5);

  stroke(180);
  ellipse(i, j, span / 7.5);
  pop();
}

function drawBallOutline(i, j, flg) {
  if (flg === "top") {
    arc(i, j, span / 1.5, span / 1.5, PI + base, TAU - base);
    line(
      i - span / 3 + (weight + 1),
      j - 3 * cos(base),
      i + span / 3 - (weight + 1),
      j - 3 * cos(base)
    );
  } else {
    arc(i, j, span / 1.5, span / 1.5, base, PI - base);
    line(
      i - span / 3 + (weight + 1),
      j + 3 * cos(base),
      i + span / 3 - (weight + 1),
      j + 3 * cos(base)
    );
  }
}

function drawDrop(x, y, r, A, angle) {
  // drawingContext.shadowColor = color(200);
  // drawingContext.shadowBlur = 16;

  push();
  translate(x, y);
  rotate(angle);
  beginShape();
  for (let theta = 0; theta < TAU; theta += 0.3) {
    let R = r / (A * sin(theta / 2) + 1);

    vertex(R * cos(theta), R * sin(theta));
  }
  endShape(CLOSE);
  pop();
}

function drawBlock(x, y, r, A, angle) {
  // drawingContext.shadowColor = color(200);
  // drawingContext.shadowBlur = 16;

  push();
  translate(x, y);
  rotate(angle);
  rect(0, 0, 20, 20, 4, 10, 10, 4);
  pop();
}

function keyPressed() {
  if (key === "c") {
    saveCanvas("mySketch", "png");
  }
}
