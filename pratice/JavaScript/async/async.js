function greet(name) {
  return `hello ${name}`;
}

function welcome(callback) {
  console.log(callback);
}

welcome(greet("chetan"));

// ----------------------------------
function greet(name,age) {
    console.log(`Hello ${name} age is ${age}`);
}
// one methord
setTimeout(()=>{
    greet('chetan',29)
},2000)

// 2rd mehtord
setTimeout(greet,2000,'chetan',22)
// ---------------------------------

let myTimeOut = setTimeout(()=>{
    console.log('cancle before execution')
},5000)
clearTimeout(myTimeOut);

let num = 6;
let myInterverl;
myInterverl = setInterval(() => {
  num--;
  if (num === 0) {
    clearInterval(myInterverl);
    console.log("done");
  } else {
    console.log(num);
  }
}, 1000);
// --------------------------------------------
function user(u) {
  console.log(u);
}

function fecthUser(callback) {
  setTimeout(() => {
    callback({id: 1, name: "chetan"});
  }, 2000);

}
fecthUser(user);

// --------------- promises -----------------------------

let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Data Received");
  }, 2000);
});

p1.then((d) => console.log(d));

let p2 = new Promise((res, rej) => {
    let serverGood = false;
    if (serverGood) res("server is good");
    else rej("server Down");
});

p2.then((d) => console.log(d)).catch((error) => console.log(error));

// ---------------- promise chaining ----------------------------

let sum = 0;
function addTen(num) {
  let promise = new Promise((res, rej) => {
    sum += num;
    res(sum);
  });
  return promise;
}

addTen(10)
  .then((d) => {
      console.log(d);
      return  addTen(10); or(d+10)
  })
  .then((d) => {
      console.log(d);
      return  addTen(10);or(d+10)
  })
  .then((d) => {
      console.log(d);
  });

// -----------Async/Await ---------------------------------

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
}

async function getData() {
  try {
    let res = await fetchData();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

getData();
// --------------------------------------------

async function getUserData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (res.ok) {
      let data = await res.json();
       console.log(data.name);
    } else {
      throw new Error ("some thing when. worng");
    }
  } catch (error) {
    console.log(error);
  }
}
getUserData();
