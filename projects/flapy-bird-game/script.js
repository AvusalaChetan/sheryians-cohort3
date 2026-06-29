const bird = document.querySelector("#bird");
const game = document.querySelector(".page");

let birdTop = 200;
let gravity = 2;

setInterval(() => {
  if (isGameOver) return;

  birdTop += gravity;
  bird.style.top = birdTop + "px";
}, 50);

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    birdTop = birdTop - 60;
  }
});

function createPipe() {
  if (isGameOver) return;

  const topPipe = document.createElement("div");
  const bottomPipe = document.createElement("div");
  topPipe.classList.add("pipe");
  bottomPipe.classList.add("pipe");

  // let gap = 150;
  // let maxHeight = game.clientHeight - gap - 50;
  // let topHeight = Math.random() * maxHeight + 50;
  // let bottomHeight = maxHeight - topHeight  + 100  ;

  let gap = 200;
  let minHeight = 50;
  let totalPipeSpace = game.clientHeight - gap;
  let topHeight = Math.random() * (totalPipeSpace - 2 * minHeight) + minHeight;
  let bottomHeight = totalPipeSpace - topHeight;

  topPipe.style.height = `${topHeight}px`;
  bottomPipe.style.height = `${bottomHeight}px`;

  topPipe.style.top = `${0}px`;
  bottomPipe.style.bottom = `${0}px`;

  game.append(topPipe, bottomPipe);
  let pipeLeft = game.clientWidth;
  topPipe.style.left = pipeLeft + "px";
  bottomPipe.style.left = pipeLeft + "px";
  let move = setInterval(() => {
    pipeLeft -= 2;
    topPipe.style.left = pipeLeft + "px";
    bottomPipe.style.left = pipeLeft + "px";

    let birdRect = bird.getBoundingClientRect();
    let topRect = topPipe.getBoundingClientRect();
    let bottomRect = bottomPipe.getBoundingClientRect();

    if (birdRect.right > topRect.left && birdRect.left < topRect.right) {
      if (birdRect.top < topRect.bottom || birdRect.bottom > bottomRect.top) {
        gameOver();
      }
    }

    if (pipeLeft < -40) {
      topPipe.remove();
      bottomPipe.remove();
      clearInterval(move);
    }
  }, 30);
}

setInterval(createPipe, 2000);

let isGameOver = false;

function gameOver() {
  if (isGameOver) return;
  isGameOver = true;
  alert("game is over");
  location.reload();
}


//2:50