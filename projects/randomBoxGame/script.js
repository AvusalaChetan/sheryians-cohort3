const saveBtn = document.querySelector("#save");
const box = document.querySelector(".box");
const timer = document.querySelector(".timerN");
const scoreEle = document.querySelector(".scoreN");
const board = document.querySelector("#board");
const restart = document.querySelector("#restart");

let score = 0;
saveBtn.addEventListener("click", (e) => {
  let time = 0;
  score = 0;
  console.log(e);
  let intervel = setInterval(() => {
    randomBoxPostion();
    timer.textContent = time;
    time += 1;
    if (time > 10) {
      clearInterval(intervel);
      document.querySelector(".gameOver").style.display = "block";
    }
  }, 1000);
});

box.addEventListener("click", (e) => {
  scoreEle.textContent = `${score++}`;
  const color = randomColor();
  box.style.backgroundColor = color;
});

restart.addEventListener("click", (e) => {
  document.querySelector(".gameOver").style.display = "none";
  timer.textContent = 0;
  scoreEle.textContent = `${0}`;
});

function randomBoxPostion() {
  const boardH = board.clientHeight - box.clientHeight;
  const boardW = board.clientWidth - box.clientWidth;
  let rY = Math.floor(Math.random() * boardH);
  let rX = Math.floor(Math.random() * boardW);

  box.style.left = `${rX}px`;
  box.style.top = `${rY}px`;
}

function randomColor() {
  let r = Math.floor(Math.random() * 225);
  let g = Math.floor(Math.random() * 225);
  let b = Math.floor(Math.random() * 225);

  return `rgb(${r},${g},${b})`;
}
