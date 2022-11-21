function setup() {
  createCanvas (500,500);
  background("#52A3ED");
}

function draw() {

//pmouseX shows pewvious X coordinates of the mouse.
//pmousey shows pewvious y coordinates of the mouse.
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}


function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  fill("#A0BA94");
  ellipse(x, y, speed, speed);
}


