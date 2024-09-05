function setup() {
  createCanvas(1550, 800);
   background("green");
}

function draw() {
  if (mouseIsPressed) {
    fill("green");
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 20, 20);
}