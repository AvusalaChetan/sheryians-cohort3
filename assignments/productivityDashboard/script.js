const theme = document.querySelector("#theme");
let isDark = false;

theme.addEventListener("click", (e) => {
  isDark = !isDark;
  if (isDark) {
    document.body.setAttribute("data-theme", "dark");
    theme.innerHTML = '<i class="ri-moon-line"></i>';
  } else {
    document.body.setAttribute("data-theme", "light");
    theme.innerHTML = '<i class="ri-sun-line">';
  }
});
