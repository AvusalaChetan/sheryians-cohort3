function que(num, que, dec = "") {
  console.log(`\nQ${num})${que}`);
  console.log(`  ${dec}`);
}

function ans(an) {
  console.log(`ans)`, an);
  console.log("------------------------------------------------");
}

const heading = (topic = "title emplty") => {
  console.log("\n");
  topic = topic.split("");
  let dash = "-";
  for (let i = 0; i < topic.length; i++) {
    dash += "-";
  }
  console.log(topic.join("").toUpperCase());
  console.log(dash);
};

heading("🟢 Easy Level (Q1 - Q7)");

que(
  1,
  "find expensive",
  "Create a new array containing only prices greater than ₹300.",
);
let prices = [100, 250, 500, 150, 700];

const premum = prices.filter((p) => p > 300);
console.log(premum);

que(2, " Last Student in Class", "print the std name ");
let students = ["Aman", "Ritik", "Priya", "Rahul"];
console.log(students[students.length - 1]);

que(3, "  Add New Product", 'Add "Monitor" to the end of the array');

let products = ["Laptop", "Mouse", "Keyboard"];
products.push("Monitor");
console.log(products);

que(4, "   Remove Last Notification");

let notifications = ["Order Placed", "Order Shipped", "Order Delivered"];

notifications.pop();
console.log(notifications);

que(5, "check user exists");

let users = ["Aman", "Ritik", "Priya"];
let userExist = users.includes("Ritik");
if (!userExist) console.log("user not exist ");
else console.log("user exist", userExist);

que(6, "convert marks to  %");
let marks = [80, 90, 70];
let per = marks.map((m) => m + "%");
console.log(per);

que(7, " Count Products");
let cart = ["Mouse", "Keyboard", "Monitor", "Laptop"];

ans(cart.length);

heading("🟡 Moderate Level (Q8 - Q14)");
que(8, "find std avg marks");

let stdMarks = [80, 90, 70, 85, 95];

let sStdMarks = stdMarks.reduce((acc, val) => {
  return (acc += val);
});

ans(sStdMarks / stdMarks.length);

que(9, "even num finder");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let even = numbers.filter((n) => n % 2 === 0);
ans(even);

que(10, "product search ", 'find index of "keyboard"');
let product = ["Laptop", "Mouse", "Keyboard", "Monitor"];
ans(product.indexOf("Keyboard"));

que(11, "total revenue ", "Calculate total revenue");

let sales = [500, 700, 1000, 300];

let tSales = sales.reduce((acc, val) => (acc += val));
ans(tSales);

que(12, "convert to upperCase usernames");
let names = ["ritik", "aman", "priya"];
let upperUser = names.map((n) => n.toUpperCase());
console.log(upperUser);

que(13, " Find First Adult");
let ages = [12, 15, 17, 19, 22];
ans(ages.find((a) => a > 18));

que(14, "Positive Number Check");
let numss = [5, 8, 10, 3];
let posNum = numss.every((ns) => ns > 0);
ans(posNum);

heading("🧧 hard Level(15 - 20");

que(15, " Most Frequent Number");
let numberss = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];
const count = {};

for (let i = 0; i < numberss.length; i++) {
  if (count[numberss[i]]) {
    count[numberss[i]] = count[numberss[i]] + 1;
  } else {
    count[numberss[i]] = 1;
  }
}
ans(count);

que(16, "second lagetst num");

let n = [10, 50, 20, 80, 40];

let largestNum = n[0];
let secLargN;

for (let i = 0; i < n.length; i++) {
  if (n[i + 1] > largestNum) {
    secLargN = largestNum;
    largestNum = n[i + 1];
  }
}

ans(secLargN);

que(17, "remove duplicates Ids");
let ids = [1, 2, 2, 3, 4, 4, 5, 5];
let org = ids.filter((id, i) => id !== ids[i + 1]);
ans(org);

que(18, "longest word ");

let words = ["JavaScript", "HTML", "CSS", "Programming"];
let longestWord = words.reduce((acc, val) => {
  return acc.split("").length > val.split("").length ? acc : val;
});
ans(longestWord);

que(19, "rotate arr right", "o/p -> [5,1,2,3,4]");

let arr = [1, 2, 3, 4, 5];

arr.unshift(arr[arr.length - 1]);
arr.pop();
console.log(arr);

que(
  20,
  "rotate arr rightbest selling product",
  "Find the product sold the most",
);

let saless = ["Mouse", "Keyboard", "Mouse", "Laptop", "Mouse", "Keyboard"];
let countSales = {};

for (let i = 0; i < saless.length; i++) {
  if (countSales[saless[i]]) {
    countSales[saless[i]] = countSales[saless[i]] + 1;
  } else {
    countSales[saless[i]] = 1;
  }
}
console.log(countSales);
