function que(que, num, dec) {
  console.log(`\nQ${num}) ${que}`);
  console.log(`  ${dec}`);
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

que(
  "que find expensive product",
  1,
  "u have a e-commus website so u need to show premum products > 300",
);

let prices = [100, 250, 500, 150, 700];
let premium = prices.filter((p) => p > 300);
console.log(premium);

que("stud marks avg", 2, "find avg of all std marks ");

let marks = [80, 90, 70, 85, 95];
let sum = marks.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(sum / marks.length);

que("most freq num ", 3, "find the num apper more time in [1,2,3,2 4,3,1,1,1]");
let num = [1, 2, 3, 2, 4, 3, 1, 1, 1];
let count = {};
for (let i = 0; i < num.length; i++) {
  let n = num[i];
  if (count[n]) {
    count[n] += 1;
  } else {
    count[n] = 1;
  }
}

console.log(count);

que("print user info", 4, "use loop");

let user = {
  name: "raitik",
  age: 20,
  city: "bhopal",
};

for (const key in user) {
  console.log(`${key.toUpperCase()}  ${user[key]}`);
}

heading("function + obj + arr");
que("", 5, "return adullt user ");

let aldUser = [
  {name: "chetan", age: 20},
  {name: "aman", age: 30},
  {name: "priya", age: 10},
];

function findAld(aldUser) {
  return aldUser.filter((u) => u.age > 18);
}
console.log(findAld(aldUser));

que("shoppping card total", 6, " in card add totoal price");
let cart = [
  {name: "Mouse", price: 500, qty: 2},
  {name: "Keyboard", price: 1000, qty: 1},
  {name: "Monitor", price: 10000, qty: 1},
];

function getCardTotal(card) {
  let tPrice = card.reduce((acc, val) => {
    return (acc += val.qty * val.price);
  }, 0);
  return tPrice;
}
console.log(getCardTotal(cart));
// --------------------------------------
que(
  "create a report card",
  7,
  "1.cal avg \n 2.decide grade \n 3.create new obj\n4.return new arr",
);
let students = [
  {
    name: "Ritik",
    marks: [80, 90, 85],
  },
  {
    name: "Divyanshu",
    marks: [85, 75, 80],
  },
  {
    name: "Vaibhav",
    marks: [90, 95, 88],
  },
];

function createReport(std) {
  let repo = std.map(({name, marks}) => {
    const report = {name, marks};
    
    let tMarks = marks.reduce((acc, val) => {
      return (acc += val);
    }, 0);

    report.averageMarks = tMarks / marks.length;
  
    if (report.averageMarks >= 90) report["grade"] = "A";
    else if (report.averageMarks >= 60 && report.averageMarks <= 89) report["grade"] = "B";
    else if (report.averageMarks >= 40 && report.averageMarks <= 59) report["grade"] = "C";
    else report["grade"] = "F";

    return report;
  });
  return repo;
}

console.log(createReport(students));
