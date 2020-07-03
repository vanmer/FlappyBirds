// select canvas
const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// game variables
let frames = 0;

// load sprite image
const sprite = new Image();
sprite.src = "img/sprite.png";

// background
const bg = {
  sX: 0,
  sY: 0,
  w: 275,
  h: 226,
  x: 0,
  y: cvs.height - 226,

  draw: function() {
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);

    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
  }
}

// draw function
function draw() {
  ctx.fillStyle = "#70C5CE";
  ctx.fillRect(0, 0, cvs.width, cvs.height);

  bg.draw();
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
