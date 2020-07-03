// select canvas
const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// game variables
let frames = 0;

// load sprite image
const sprite = new Image();
sprite.src = "img/sprite.png";

// draw function
function draw() {
  ctx.fillStyle = "#70C5CE";
  ctx.fillRect(0, 0, cvs.width, cvs.height);
}

// update function
function update() {

}

// loop/move function
function loop() {
  update();
  draw();
  frames++;

  requestAnimationFrame(loop);
}
loop();
