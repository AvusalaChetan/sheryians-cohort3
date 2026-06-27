document.querySelector("#title").textContent = `wellcome to JS Dom`;
// -------------------------

const userName = document.querySelector("#username");
const showBtn = document.querySelector("#show");
showBtn.addEventListener("click", () => {
  if (!userName.value.trim()) {
    alert("enter input");
  }
  document.querySelector("#output").textContent = `${userName.value.trim()}`;
});
// -------------------------
const toggleBtn = document.querySelector("#toggle");
const message = document.querySelector("#message");
let isInView = true;
toggleBtn.addEventListener("click", (e) => {
  isInView = !isInView;
  isInView
    ? (message.style.display = "none")
    : (message.style.display = "block");
});

// -------------------------

const list = document.querySelector("#list");
const addFruit = document.querySelector("#addfruit");
addFruit.addEventListener("click", (e) => {
  let li = document.createElement("li");
  li.textContent = "banana";
  list.append(li);
});
// -------------------------

const deleteCare = document.querySelector("#delete");
deleteCare.addEventListener("click", (e) => {
  deleteCare.parentElement.remove();
});
// -------------------------

const textArea = document.querySelector("textarea");
const char = document.querySelector("#char");
textArea.addEventListener("input", (e) => {
  let count = textArea.value.length;
  char.textContent = `Characters ${count}`;
});

// -------------------------

const todoIP = document.querySelector("#todoIP");
const addBtn = document.querySelector("#add");
const tasks = document.querySelector("#tasks");
addBtn.addEventListener("click", (e) => {
  let input = todoIP.value.trim();
  if (!input) {
    alert("no input ");
    return;
  }
  let li = document.createElement("li");
  li.textContent = input;

  tasks.append(li);
  todoIP.value = "";
});
//------------------------------------

const galleryImg = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5lS734Qa7ezi9Dds4UN3rqwIuLWZ2ptJ5e70Z0VWgWQ&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1V-eZ_ggCX1_0wJY3l4biv3ZVYl7M_aNuZ7xrPAplfg&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEKJKftuntiowOCAjqsf1x2J5SWUFW7ZFpsT5KF43lA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJkAZpPRi0XAAG0yor1zC1T_fE_9St2QS_0NSvYYE-A&s=10",
];
const nextImg = document.querySelector("#nextImg");
const img = document.querySelector("#image");
let i = 1;
img.src = galleryImg[0];
nextImg.addEventListener("click", (e) => {
  if (i >= galleryImg.length) i = 0;
  img.src = galleryImg[i++];
});

//-------------------------------------

const stdName = document.querySelector("#name");
const courseIp = document.querySelector("#Course");
const addStd = document.querySelector("#addStd");
const totalStd = document.querySelector('#count')

const studentsContainer = document.querySelector("#students");
let allStd = [];


function uiStdCard() {
  studentsContainer.innerHTML = ``;
  allStd.forEach(({name, course}, i) => {
    studentsContainer.innerHTML += `
  <h3>Student Information</h3>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Course:</strong> ${course}</p>
  <button class="btn-delete" onclick='deltedfn(${i})'>Delete</button>
 
         `;
  });
}

function deltedfn(i){
    allStd.splice(i,1)
    uiStdCard()
}

addStd.addEventListener("click", (e) => {
  let name = stdName.value.trim();
  let course = courseIp.value.trim();
  if (!name || !course) {
    alert("give imput");
    return;
  }
  let std = {
    name,
    course,
  };

  allStd.push(std);
  uiStdCard();
totalStd.textContent = allStd.length

  name.value = "";
  course.value = "";
});
