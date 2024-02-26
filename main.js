// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
// ctx.fillRect(80, 260, 460, 80);

rect(80, 260, 460, 80, `fill`);

// Filled Triangle for Hair

triangle(180, 80, 140, 100, 220, 100, `fill`);

// Filled Triangle for Hair

triangle(340, 80, 300, 100, 380, 100, `fill`);

// Outlined Triangle for Hair

triangle(260, 80, 220, 100, 300, 100, `stroke`);

// Outlined Triangle for Hair

triangle(420, 80, 380, 100, 460, 100, `stroke`);

// Filled Triangle for Neck

triangle(300, 200, 220, 600, 380, 600, `fill`);

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
// ctx.fillRect(100, 100, 400, 400);

rect(100, 100, 400, 400, `fill`);

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
circle(200, 250, 50, `fill`);

// Filled Circle for Right Eye Socket
circle(400, 250, 50, `fill`);

// Rectangle for Mouth
// ctx.fillRect(200, 350, 200, 60);

rect(200, 350, 200, 60, `fill`);

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";

line(200, 380, 400, 380);

// First Vertical Line for Teeth

line(250, 350, 250, 410);

// Second Vertical Line for Teeth

line(300, 350, 300, 410);
// Third Vertical Line for Teeth

line(350, 350, 350, 410);

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(100, 100, 100)";
circle(200, 250, 30, `fill`);

// Filled Circle for Right Eye
circle(400, 250, 10, `fill`);

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
circle(200, 250, 50, `stroke`);

// Outlined Circle for Right Eye Socket
circle(400, 250, 50, `stroke`);

// Line for Left Eyebrow
ctx.lineWidth = 2;

line(150, 180, 250, 180);

// Line for Right Eyebrow

line(350, 160, 450, 180);

// Outlined Triangle for Nose

triangle(300, 280, 320, 320, 280, 320, `stroke`);

glasses(200, 400, 280, 320, 250, 80, `stroke`);

tophat(130, 50, 0, 100, 350, 500, 100, 20);

function circle(x, y, r, type) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (type == "fill") ctx.fill();
  if (type == "stroke") ctx.stroke();
}

function rect(x, y, w, h, type) {
  if (type == "fill") {
    ctx.fillRect(w / 2 + x, h / 2 + y, w / 2, h / 2);
    ctx.fillRect(w / 2 + x, h / 2 + y, w / -2, h / 2);
    ctx.fillRect(w / 2 + x, h / 2 + y, w / 2, h / -2);
    ctx.fillRect(w / 2 + x, h / 2 + y, w / -2, h / -2);
  }
  if (type == "stroke") {
    ctx.fillRect(w / 2 + x, h / 2 + y, w / 2, h / 2);
    ctx.fillRect(w / 2 + x, h / 2 + y, w / -2, h / 2);
    ctx.fillRect(w / 2 + x, h / 2 + y, w / 2, h / -2);
    ctx.fillRect(w / 2 + x, h / 2 + y, w / -2, h / -2);
  }
}

function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function triangle(x1, y1, x2, y2, x3, y3, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  if (type == "fill") ctx.fill();
  if (type == "stroke") ctx.stroke();
}

function glasses(x1, x2, x3, x4, y, r, type) {
  ctx.beginPath();
  circle(x1, y, r, type);
  circle(x2, y, r, type);
  ctx.moveTo(x4, y);
  ctx.lineTo(x3, y);
  ctx.stroke();
}

function tophat(x1, x2, y1, y2, w1, w2, h1, h2) {
  rect(x1, y1, w1, h1, `fill`);
  rect(x2, y2, w2, h2, `fill`);
}
