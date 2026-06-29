let user = checkAuth();
document.querySelector("#username").textContent = user.username;

const formContainer = document.querySelector("#formContainer");
const transactionForm = document.querySelector("#transactionForm");
const tbody = document.querySelector("tbody");

const logoutBtn = document.querySelector("#logout");
const themeBtn = document.querySelector("#theme");
const addTransiction = document.querySelector("#addTransiction");
const closeModal = document.querySelector("#closeModal");
const resetBtn = document.querySelector("#reset");

const filterType = document.querySelector("#fiterTypes");
const searchEle = document.querySelector("#search");

let isEdit = false;
let editingIdx = null;

let transactions =
  JSON.parse(localStorage.getItem(`transactions-${user.username}`)) ||
  localStorage.setItem(`transactions-${user.username}`, JSON.stringify([]));

transactionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;

  if (
    !type.trim() ||
    !description.trim() ||
    !amount.trim() ||
    !date.trim() ||
    !category.trim()
  ) {
    alert("all inputs field are required");
    return;
  }

  let transation = {
    _id: transactions.length + 1,
    type,
    description,
    amount,
    date,
    category,
  };

  if (isEdit) {
    transactions[editingIdx] = transation;
    isEdit = false;
  } else {
    transactions.push(transation);
  }
  localStorage.setItem(
    `transactions-${user.username}`,
    JSON.stringify(transactions),
  );
  transactionForm.reset();
  formContainer.style.display = "none";
  renderTransactions(transactions);
});

function calcIncome() {
  return transactions.reduce((acc, val) => {
    if (val.type === "income") acc += Number(val.amount);
    return acc;
  }, 0);
}

function calcExpense() {
  return transactions.reduce((acc, val) => {
    if (val.type === "expense") acc += Number(val.amount);
    return acc;
  }, 0);
}

function calcBalance() {
  return calcIncome() - calcExpense();
}

function calcTotals() {
  return {
    income: calcIncome(),
    expense: calcExpense(),
    balance: calcBalance(),
    totalTransactions: transactions.length,
  };
}

function showAmount() {
  const {income, expense, balance, totalTransactions} = calcTotals();
  document.querySelector("#currentBalance").textContent =
    `${user.currency}${balance}.00`;
  document.querySelector("#totalIncome").textContent =
    `${user.currency} ${income}.00`;
  document.querySelector("#totalExpense").textContent =
    `${user.currency} ${expense}.00`;
  document.querySelector("#totalTransactions").textContent =
    `${totalTransactions}`;
}

showAmount();

let chartInstance = null;

function renderChart() {
  const income = calcIncome();
  const expense = calcExpense();
  const barChart = document.querySelector("#barChart");

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(barChart, {
    type: "bar",
    data: {
      labels: ["Income vs Expense"], // 2 labels = 2 bars
      datasets: [
        {
          label: "Income",
          data: [income],
          backgroundColor: ["green", "red"],
          borderWidth: 1,
        },
        {
          label: "expenses",
          data: [expense],
          backgroundColor: ["red"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {beginAtZero: true},
      },
    },
  });
}
renderChart();

function renderTransactions(arr = transactions) {
  const tbody = document.getElementById("transactionList");
  tbody.innerHTML = arr
    .map(
      (t) => `
        <tr  data-id="${t._id}">
            <td>${t.date}</td>
            <td><strong>${t.description}</strong></td>
            <td><span class="badge">${t.category}</span></td>
            <td class="${t.type === "income" ? "income" : "expense"}">
                ${t.type === "income" ? "+" : "-"} ${Number(t.amount).toFixed(2)}
            </td>
            <td class="actions">
                <button class="edit-btn"><i class="ri-pencil-line"></i></button>
                <button class="delete-btn"><i class="ri-delete-bin-line"></i></button>
            </td>
        </tr>
    `,
    )
    .join("");
  showAmount();
  renderChart();
}
renderTransactions();

function filteredTran() {
  let search = searchEle.value;

  const filtered =
    filterType.value === "all"
      ? transactions
      : transactions.filter((t) => t.type === filterType.value);

  let serchedArr = filtered.filter(
    (t) => t.description.includes(search) || t.category.includes(search),
  );
  renderTransactions(serchedArr);
}

filterType.addEventListener("change", filteredTran);
searchEle.addEventListener("input", filteredTran);

tbody.addEventListener("click", (e) => {
  const row = e.target.closest("tr");
  const id = row.dataset.id;
  const index = transactions.findIndex((t) => t._id === Number(id));

  if (e.target.closest(".delete-btn")) {
    transactions.splice(index, 1);
    localStorage.setItem(
      `transactions-${user.username}`,
      JSON.stringify(transactions),
    );
    renderTransactions();
  }
  if (e.target.closest(".edit-btn")) {
    isEdit = true;
    const t = transactions.find((t) => t._id === Number(id));
    editingIdx = index;
    document.getElementById("type").value = t.type;
    document.getElementById("description").value = t.description;
    document.getElementById("amount").value = t.amount;
    document.getElementById("date").value = t.date;
    document.getElementById("category").value = t.category;

    formContainer.style.display = "flex";
  }
});

resetBtn.addEventListener("click", () => {
  let isBool = confirm("you want to delete all ");
  if (isBool) {
    localStorage.setItem(`transactions-${user.username}`, JSON.stringify([]));
    transactions = [];
    renderTransactions(transactions);
  }
});

addTransiction.addEventListener("click", (e) => {
  formContainer.style.display = "flex";
});
closeModal.addEventListener("click", (e) => {
  formContainer.style.display = "none";
  transactionForm.reset();
});

themeBtn.addEventListener("click", (e) => {
  const currentTheme = document.body.dataset.theme || "light";
  document.body.dataset.theme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", document.body.dataset.theme);
});
document.body.dataset.theme = localStorage.getItem("theme") || "light";

logoutBtn.addEventListener("click", logout);

const dashboard = document.querySelector("#dashboard");
const setting = document.querySelector("#setting");

const dashboardLink = document.querySelector("#dashboardLink");
const settingsLink = document.querySelector("#settingsLink");

const settingsForm = document.querySelector("#settingsForm");
const fullName = document.getElementById("fullName");
const currency = document.getElementById("currency");

function showDashboard() {
  dashboardLink.classList.add("active");
  settingsLink.classList.remove("active");
  dashboard.style.display = "block";
  setting.style.display = "none";
}

dashboardLink.addEventListener("click", showDashboard);

settingsLink.addEventListener("click", (e) => {
  settingsLink.classList.add("active");
  dashboardLink.classList.remove("active");
  dashboard.style.display = "none";
  setting.style.display = "block";
});

settingsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let currencyVal = currency.value.trim();
  let fullNameVal = fullName.value.trim();

  if (!fullNameVal || !currencyVal) {
    let err = document.createElement("p");
    err.textContent = "all fields are require";
    err.style.color = "red";
    settingsForm.prepend(err);
    return;
  }

  user.username = fullNameVal;
  user.currency = currencyVal;

  localStorage.setItem("user", JSON.stringify(user));
  showDashboard();
  showAmount();
});

function defSetting() {
  fullName.value = user.username;
  currency.value = user.currency;
}
defSetting();
