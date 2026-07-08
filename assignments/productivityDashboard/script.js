const theme = document.querySelector("#theme");
const timeDeatils = document.querySelector("#timeDeatils");
const imgContainers = document.querySelectorAll("#imgContainer");
let arrOfImgContainers = [...imgContainers];


function hoverEff(){
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
      console.log("mousehover", e.target);
      e.target.innerHTML = `<video src="${videoArr[idx]}" muted loop autoplay></video>`;
    });
    ele.addEventListener("mouseleave", (e) => {
      e.target.innerHTML = `<img src="${imgpathArr[idx]}" alt="" loading="lazy"/>
  `;
    });
  });
}
hoverEff()

async function getWeather() {
  const apiKey = "da2be0a45156c905fc776efea0fec0e6";
  const city = "hyderabad";
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let res = await fetch(baseUrl);
  let data = await res.json();

  return {...data.main, ...data.weather[0]};
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
  document.querySelector("#dec").innerHTML = `${description}`;
  document.querySelector("#temp").innerHTML =
    `<strong> tempeature </strong> ${temp} &#x2103;`;
  document.querySelector("#hum").innerHTML =
    `<strong>humidity</strong> ${humidity} %`;
  document.querySelector("#press").innerHTML =
    `<strong>pressure</strong> ${pressure} N/m<sup>2</sup>`;
}
displayTime();
diplayPanel();

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
