const theme = document.querySelector("#theme");
const mainCon = document.querySelector(".mainCon");
const timeDeatils = document.querySelector("#timeDeatils");
const imgContainers = document.querySelectorAll("#imgContainer");
let arrOfImgContainers = [...imgContainers];

const closeButtons = document.querySelectorAll(".close");
const motivationSec = document.querySelector("#motivationSec");
const timerSec = document.querySelector("#timerSec");
const FormSec = document.querySelector("#FormSec");
const dayPlanSec = document.querySelector("#dayPlanSec");

arrOfImgContainers.forEach((ele, idx) => {
  ele.addEventListener("click", (e) => {
    if (ele.dataset.selectsec === "motivation") {
      motivationSec.style.display = "flex";
    }
    if (ele.dataset.selectsec === "timer") {
      timerSec.style.display = "block";
    }
    if (ele.dataset.selectsec === "taskList") {
      taskList();
      FormSec.style.display = "block";
    }
    if (ele.dataset.selectsec === "goles") {
      goalsList();
      FormSec.style.display = "block";
    }
    if (ele.dataset.selectsec === "dayPlan") {
      dayPlanSec.style.display = "block";
    }
  });
});

closeButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log("Close clicked");
    const parentSection = e.target.closest("section");

    if (parentSection) {
      parentSection.style.display = "none";
    }
  });
});

function timerfn() {
  const timeH2 = document.querySelector("#time");
  const startBtn = document.querySelector("#start");
  const pauseBtn = document.querySelector("#pause");
  const resetBtn = document.querySelector("#reset");
  let min = 25;
  let totalSeconds = 25 * 60;
  let myIntervel = null;

  startBtn.addEventListener("click", (e) => {
    myIntervel = setInterval(() => {
      const minutes = Math.floor(totalSeconds / 60);
      let rSec = totalSeconds % 60;
      rSec = rSec < 25 ? "0" + rSec : rSec;
      timeH2.innerHTML = `${minutes}:${rSec}`;
      totalSeconds--;
    }, 1000);

    startBtn.classList.add("activeTimeBtn");
    resetBtn.classList.remove("activeTimeBtn");
    pauseBtn.classList.remove("activeTimeBtn");
    toast("started timer", true);
  });

  resetBtn.addEventListener("click", (e) => {
    clearInterval(myIntervel);
    totalSeconds = 25 * 60;
    timeH2.innerHTML = `${25}:00`;
    resetBtn.classList.add("activeTimeBtn");
    pauseBtn.classList.remove("activeTimeBtn");
    startBtn.classList.remove("activeTimeBtn");
    toast("reseted timer", true);
  });

  pauseBtn.addEventListener("click", (e) => {
    clearInterval(myIntervel);
    pauseBtn.classList.add("activeTimeBtn");
    resetBtn.classList.remove("activeTimeBtn");
    startBtn.classList.remove("activeTimeBtn");
    toast("paused timer", true);
  });
}

timerfn();

async function showQuote() {
  const baseUrl = "https://dummyjson.com/quotes/random";
  const data = await getQuote(baseUrl);
  document.querySelector("#quote").textContent = `${data.quote}`;
  document.querySelector("#author").textContent = data.author;
}
showQuote();

function hoverEff() {
  arrOfImgContainers.forEach((ele, idx) => {
    let videoArr = [
      "videos/todo-video.mp4",
      "videos/daily-plan.mp4",
      "videos/motivate.mp4",
      "videos/pomo.mp4",
      "videos/goals.mp4",
    ];
    let imgpathArr = [
      "./imgs/todo.jpg",
      "./imgs/dailyplain.png",
      "./imgs/motivation.jpg",
      "./imgs/timer.jpg",
      "./imgs/dailygloes.jpg",
    ];

    ele.addEventListener("mouseenter", (e) => {
      e.currentTarget.innerHTML = `<video src="${videoArr[idx]}" muted loop autoplay></video>`;
    });
    ele.addEventListener("mouseleave", (e) => {
      e.currentTarget.innerHTML = `<img src="${imgpathArr[idx]}" alt="" loading="lazy"/>
  `;
    });
  });
}
hoverEff();

async function getQuote(baseUrl) {
  try {
    let res = await fetch(baseUrl);
    let data = await res?.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getWeather() {
  const apiKey = "da2be0a45156c905fc776efea0fec0e6";
  const city = "hyderabad";
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    let res = await fetch(baseUrl);
    let data = await res?.json();
    return {...data.main, ...data.weather[0]};
  } catch (error) {
    console.log(error);
  }
}

function displayTime() {
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = new Date();
  var week = weeks[date.getDay()];
  var month = months[date.getMonth()];
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var dates = date.getDate();
  var year = date.getFullYear();

  document.querySelector("#date").innerHTML =
    `${date.getDate()} ${month},${year}`;
  document.querySelector("h1").innerHTML =
    `${week},<br/>${date.toLocaleTimeString()}`;
}

async function diplayPanel() {
  setInterval(() => displayTime(), 1000);
  const {temp, description, humidity, pressure, sea_level} = await getWeather();
  document.querySelector("#dec").innerHTML = `${description ?? "loading..."}`;
  document.querySelector("#temp").innerHTML =
    `<strong> tempeature </strong> ${temp} &#x2103;`;
  document.querySelector("#hum").innerHTML =
    `<strong>humidity</strong> ${humidity} %`;
  document.querySelector("#press").innerHTML =
    `<strong>pressure</strong> ${pressure} N/m<sup>2</sup>`;
}
displayTime();
diplayPanel();

function changeBG() {
  const hour = new Date().getHours();
  let bgImage = "";

  if (hour >= 5 && hour < 7) {
    bgImage = "imgs/bg/sunrise.webp";
  } else if (hour >= 7 && hour < 12) {
    bgImage = "imgs/bg/morning.jpg";
  } else if (hour >= 12 && hour < 17) {
    bgImage = "imgs/bg/afternoon.jpg";
  } else if (hour >= 17 && hour < 19) {
    bgImage = "imgs/bg/evening.jpg";
  } else {
    bgImage = "imgs/bg/night.jpg";
  }

  mainCon.style.backgroundImage = `url(${bgImage})`;
  mainCon.style.backgroundSize = "cover";
  mainCon.style.backgroundPosition = "center";
  mainCon.style.backgroundRepeat = "no-repeat";
}
changeBG();

const formHeading = document.querySelector("#formHeading");

const titleInp = document.getElementById("title");
const detailsInp = document.getElementById("details");
const isImp = document.getElementById("imp");

const titleLabel = document.querySelector('[for="title"]');
const detailsLabel = document.querySelector('[for="details"]');
const form = document.querySelector("form");
const submitBtn = document.querySelector("#submit");
const ul = document.querySelector("ul");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const goals = JSON.parse(localStorage.getItem("goals")) || [];

function handileSubmitTaskList(e) {
  e.preventDefault();
  let taskName = titleInp.value.trim();
  let details = detailsInp.value.trim();
  if (!taskName || !details) {
    console.log("all fileds are req");
    toast("all fields are required", false);
    return;
  }
  console.log();
  let task = {
    taskName,
    details,
    isImp: isImp.checked,
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  toast("successfully created task", true);
  form.reset();
  taskListUi();
}

function handileGoalList(e) {
  e.preventDefault();
  let goalName = titleInp.value.trim();
  let details = detailsInp.value.trim();
  if (!goalName || !details) {
    toast("all fields are required", false);
    return;
  }

  let goal = {
    _id: goals.length - 1,
    goalName,
    details,
  };
  goals.push(goal);
  localStorage.setItem("goals", JSON.stringify(goals));
  toast("successfully created goal", true);
  form.reset();
  goalsListUi();
}

function taskListUi() {
  ul.innerHTML = "";
  tasks.forEach((ele, idx) => {
    ul.innerHTML += `<li class="strip">
   <div class="flex items-center justify-between gap-4 w-[70%] text-[#fff] ">
      <p class='text-[var(--text)]'>${ele.taskName}</p>
      <button onclick='completedTask(${idx})'>mark as complete</button>
      </div>
       ${ele.isImp ? "<span id='impTag'> important </span>" : ""} 
    </li>`;
  });
}
function goalsListUi() {
  ul.innerHTML = "";
  goals.forEach((ele, idx) => {
    ul.innerHTML += `<li class="strip">
   <div class="flex items-center justify-between gap-4 w-[70%] text-[#fff] ">
      <p class='text-[var(--text)]'>${ele.goalName}</p>
      <button onclick='deleteGoal(${idx})'>x</button>
      </div>
     </li>`;
  });
}

function taskList() {
  formHeading.textContent = "Your Personalised task List";
  titleInp.placeholder = "enter task here";
  detailsInp.placeholder = "enter details of task";
  titleLabel.textContent = "Task name";
  submitBtn.textContent = "Create Task";
  document.querySelector(".checkboxCon").style.display = "block";

  form.addEventListener("submit", handileSubmitTaskList);
  taskListUi();
}

function goalsList() {
  formHeading.textContent = "Daily goals";
  titleInp.placeholder = "enter your goal";
  detailsInp.placeholder = "enter your goal details";
  titleLabel.textContent = "your goal is";
  submitBtn.textContent = "Create goal ";
  document.querySelector(".checkboxCon").style.display = "none";

  form.addEventListener("submit", handileGoalList);
  goalsListUi();
}

function completedTask(idx) {
  tasks.splice(idx, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskListUi();
}

function deleteGoal(idx) {
  goals.splice(idx, 1);
  localStorage.setItem("goals", JSON.stringify(goals));
  goalsListUi();
}

function generateHourlySlots(startHour = 6, endHour = 18) {
  const slots = localStorage.getItem("da") || [];
  const date = new Date();
  date.setHours(startHour, 0, 0, 0);

  while (date.getHours() < endHour) {
    const start = new Date(date);
    date.setHours(date.getHours() + 1);
    const end = new Date(date);

    slots.push({
      start: formatTime(start),
      end: formatTime(end),
      task: "",
    });
  }

  localStorage.setItem("dayplans", JSON.stringify(slots));
  return slots;
}

function formatTime(date) {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: localStorage.getItem("hr12") === "true",
  });
}

const hr12 = document.getElementById("12hr");
hr12.checked = localStorage.getItem("hr12") === "true";

hr12.addEventListener("change", () => {
  localStorage.setItem("hr12", hr12.checked);
  rederTimeSlots();
});

function rederTimeSlots() {
  const slots = generateHourlySlots();
  const dayPlanCon = document.querySelector("#dayPlanCon");
  dayPlanCon.innerHTML = "";

  slots.forEach((slot, idx) => {
    const cell = document.createElement("div");
    cell.classList.add("time-cell");
    cell.dataset.index = idx;

    const isEmpty = !slot.task;
    if (isEmpty) cell.classList.add("empty");

    cell.innerHTML = `
      <div class="time-label">${slot.start} - ${slot.end}</div>
      <p class="task-text">${isEmpty ? `<input placeholder='...' type='text' class='dp' data-index="${idx}" '/>` : slot.task}</p>
    `;
    dayPlanCon.append(cell);
  });
}
rederTimeSlots();

function saveDayPlan(e) {
  const input = e.target;
  const idx = input.dataset.index;

  const slots = JSON.parse(localStorage.getItem("dayplans"));
  slots[idx].task = input.value;
  localStorage.setItem("dayplans", JSON.stringify(slots));
}
document.querySelectorAll(".dp").forEach((input) => {
  input.addEventListener("change", saveDayPlan);
});

const savedTheme = localStorage.getItem("theme") ?? document.body.dataset.theme;
document.body.dataset.theme = savedTheme;

if (theme) {
  theme.innerHTML =
    savedTheme === "dark"
      ? '<i class="ri-moon-line"></i>'
      : '<i class="ri-sun-line"></i>';
}

theme.addEventListener("click", (e) => {
  const currentTheme = document.body.dataset.theme;
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  document.body.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);

  theme.innerHTML =
    nextTheme === "dark"
      ? '<i class="ri-moon-line"></i>'
      : '<i class="ri-sun-line"></i>';
});

function toast(message, success = false) {
  let toastMgsEle = document.createElement("div");
  toastMgsEle.innerHTML = `<p>${message}</p>`;
  toastMgsEle.classList.add(success ? "toast-success" : "toast-error");
  document.body.append(toastMgsEle);

  setTimeout(() => {
    toastMgsEle.remove();
  }, 2000);
}
