// board
let board;
let boardWidth = 360;
let boardHeight = 640;

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;

let bird = {
  x: birdX,
  y: birdY,
  width: birdWidth,
  height: birdHeight,
};
let pipeArray = [];
let pipewidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

//physics
let velocityX = -2;
let velocityY = 0;
let gravity = 0.4;

let gameOver = false;
let score = 0;

window.onload = () => {
  // board
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");

  // draw bird
  birdImg = new Image();
  birdImg.src = "./birdimg.png";
  birdImg.onload = () => {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
  };

  topPipeImg = new Image();
  topPipeImg.src = "./toppipe.png";

  bottomPipeImg = new Image();
  bottomPipeImg.src = "./bottompipe.png";

  requestAnimationFrame(update);
  setInterval(placePipes, 1500);
  document.addEventListener("keydown", moveBird);
};
function update() {
  requestAnimationFrame(update);
  if (gameOver) return;
  context.clearRect(0, 0, board.width, board.height);

  // bird
  velocityY += gravity;
  // bird.y += velocityY;
  bird.y = Math.max(bird.y + velocityY, 0);
  context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

  if (bird.y > board.height) {
    gameOver = true;
  }

  // pipes
  for (const pipe of pipeArray) {
    pipe.x += velocityX;
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
    if (!pipe.passed && bird.x > pipe.x + pipe.width) {
      score += 0.5;
      pipe.passed = true;
    }

    if (detectCollision(bird, pipe)) {
      gameOver = true;
    }
  }
  // clear pipes

  while (pipeArray.length > 0 && pipeArray[0].x < -pipewidth) {
    pipeArray.shift();
  }

  // score
  context.fillStyle = "orange";
  context.font = "45px sans-serif";
  context.fillText(score, 5, 45);

  // game over
  if (gameOver) {
    context.fillText("GAME OVER!", 5, 90);

    context.fillStyle = "white";
    context.font = "32px sans-serif";
    context.fillText("press B to begin", 5, 150);
  }
}

const placePipes = () => {
  if (gameOver) return;
  let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
  let openingSpace = board.height / 4;

  let topPipe = {
    img: topPipeImg,
    x: pipeX,
    y: randomPipeY,
    width: pipewidth,
    height: pipeHeight,
    passed: false,
  };

  pipeArray.push(topPipe);

  let bottomPipe = {
    img: bottomPipeImg,
    x: pipeX,
    y: randomPipeY + pipeHeight + openingSpace,
    width: pipewidth,
    height: pipeHeight,
    passed: false,
  };
  pipeArray.push(bottomPipe);
};

// fly
const moveBird = (e) => {
  if (e.code == "Space") {
    velocityY = -6;
  }

  // reset game
  if (gameOver && e.code == "KeyB") {
    bird.y = birdY;
    pipeArray = [];
    score = 0;
    velocityY = 0;
    gameOver = false;
  }
};

const detectCollision = (a, b) => {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
};
