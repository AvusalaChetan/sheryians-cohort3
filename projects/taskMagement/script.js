const addNew = document.querySelector("#addnew");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");
const closeForm = document.querySelector(".closeForm");
const theme = document.querySelector("#theme");

const taskArr = [];
const workingArr = [];
const completedArr = [];

let isEdit = false;
let editIndex = null;

theme.addEventListener("click", (e) => {
  const presentTheme = document.body.getAttribute("data-theme");
  const targetTheme = presentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", targetTheme);
});

addNew.addEventListener("click", (e) => {
  formContainer.style.display = "block";
});

closeForm.addEventListener("click", (e) => {
  form.reset();
  formContainer.style.display = "none";
});

const pending = document.querySelector("#pending");
const inProgress = document.querySelector("#inProgress");
const completed = document.querySelector("#completed");

function createUi() {
  pending.innerHTML = `  
              <div class="column-header">
                <span class="status-dot pending-dot"></span>
                <h3>Pending</h3>
                <span class="task-count" id="pendingTasks">${taskArr.length}</span>
             
  `;

  inProgress.innerHTML = `
    <div class="column-header">
                <span class="status-dot progress-dot"></span>
                <h3>In Progress</h3>
                <span class="task-count">${workingArr.length}</span>
              </div>
  `;

  completed.innerHTML = ` <div class="column-header">
                <span class="status-dot completed-dot"></span>
                <h3>Completed</h3>
                <span class="task-count">${completedArr.length}</span>
              </div>`;

  const renderCard = (task, idx) => {
    const { taskName, dec, status, createdAt, completionDate } = task;

    let col = null;
    if (status === "pending") col = pending;
    else if (status === "inProgress") col = inProgress;
    else col = completed;

    col.innerHTML += `
 <div class="card" data-status='pending'>

  <h4>${taskName}</h4>
  <p class="card-desc">${dec}</p>
  <div class="card-footer">
    <span class="card-time">completion date ${completionDate}</span>
   
    ${
      status === "pending"
        ? ` <button class="btn-action edit" onclick="edit('${taskName}')">edit</button>
            <button class="btn-action delete" onclick="del(${idx})">delete</button>
            <button class="btn-action start" onclick="workOnIt(${idx})">
                Work on it
            </button>
    `
        : `${
            status === "inProgress"
              ? ` <button class="btn-action " onclick="taskComplete(${idx})">complete</button>`
              : `<div class="card-footer">
                <span class="card-time completed-time"> finnaly its Finished</span>
              </div>`
          }`
    }
   
  </div>
  <hr />
  <span class="createdAt">created at ${createdAt}</span>
</div>
`;
  };

  taskArr.forEach((task, idx) => renderCard(task, idx, taskArr));
  workingArr.forEach((task, idx) => renderCard(task, idx, workingArr));
  completedArr.forEach((task, idx) => renderCard(task, idx, completedArr));
}

createUi();

function edit(taskName) {
  isEdit = true;
  formContainer.style.display = "block";
  let task = taskArr.find((ele) => ele.taskName === taskName);
  editIndex = taskArr.findIndex((elem) => elem.taskName === taskName);

  form[0].value = task.taskName;
  form[1].value = task.dec;
  form[2].value = task.Date;
}

function del(idx) {
  taskArr.splice(idx, 1);
  createUi();
}

function workOnIt(idx) {
  const workingTask = taskArr.splice(idx, 1);
  workingTask[0].status = "inProgress";
  workingArr.push(...workingTask);

  createUi();
}

function taskComplete(idx) {
  console.log("helolo");
  const completedTask = workingArr.splice(idx, 1);
  completedTask[0].status = "completed";
  completedArr.push(...completedTask);

  createUi();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskNameEle = e.target[0];
  const decEle = e.target[1];
  const dateEle = e.target[2];
  let taskName = taskNameEle.value;
  let dec = decEle.value;
  let date = dateEle.value;

  if (!taskName.trim() || !dec.trim() || !date.trim()) {
    let err = document.createElement("p");
    err.classList.add("err");
    err.textContent = "all fields are require";
    formContainer.prepend(err);
    return;
  }

  const today = new Date();

  let task = {
    taskName,
    dec,
    status: "pending",
    createdAt: today.toLocaleString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    }),
    completionDate: date,
  };

  if (isEdit) {
    taskArr[editIndex] = task;
    isEdit = false;
  } else {
    taskArr.push(task);
  }

  createUi();
  form.reset();
  formContainer.style.display = "none";
});

// here i am shwoing evetn Event Propagation Demo

const gp = document.querySelector("#gp");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const logList = document.querySelector(".log-list");
const btnBubble = document.querySelector(".btn-bubble");
const btnCapture = document.querySelector(".btn-capture");
let isCapture = false;

function propgaion(e) {
  const li = document.createElement("li");
  li.textContent = `  ${e.currentTarget.id}`;
  logList.append(li);
}

function updateListeners() {
  gp.removeEventListener("click", propgaion, true);
  gp.removeEventListener("click", propgaion, false);
  parent.removeEventListener("click", propgaion, true);
  parent.removeEventListener("click", propgaion, false);
  child.removeEventListener("click", propgaion, true);
  child.removeEventListener("click", propgaion, false);

  gp.addEventListener("click", propgaion, isCapture);
  parent.addEventListener("click", propgaion, isCapture);
  child.addEventListener("click", propgaion, isCapture);
}

btnCapture.addEventListener("click", (e) => {
  isCapture = true;
  btnCapture.classList.add("active");
  btnBubble.classList.remove("active");
  logList.innerHTML = "";
  updateListeners();
});

btnBubble.addEventListener("click", (e) => {
  isCapture = false;
  btnCapture.classList.remove("active");
  btnBubble.classList.add("active");
  logList.innerHTML = "";
  updateListeners();
});

updateListeners();

// here i am shwoing Browser Rendering Pipeline

const renderCycle = [
  "html",
  "parsing",
  "tokenzation",
  "Dom tree",
  "css",
  "cssom tree",
  "DOM Tree + CSSOM Tree",
  "render Tree",
];
const renderPipeline = document.querySelector("#renderPipeline");

renderCycle.forEach((ele) => {
  const p = document.createElement("p");
  p.classList.add("step");
  p.innerHTML = `${ele} <br><i class="ri-arrow-down-line"></i>`;
  renderPipeline.append(p);
});
