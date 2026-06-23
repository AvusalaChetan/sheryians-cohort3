const prompt = require("prompt-sync")();

// even or odd checker
console.log("-----------// even or odd checker------------");

// let number = prompt("enter a number");
// function evenOrOdd(n) {
//   if (n % 2 === 0) return "Even";
//   else return "Odd";
// }
// console.log(evenOrOdd(number));

console.log("\n--------- greeting generator -------------");
// //greeting generator
// function greetGen(name, age) {
//   return `Hello,${name}!  you are ${age} years old.`;
// }
// console.log(greetGen("chetan", 21));

console.log("\n-------Rectangle Area Calculator-------");
// let width = prompt('enter width of rectangle')
// let height = prompt('enter height of rectangle')

// function areaOfRectangle(h,w){
//     let area = h*w
//     return area
// }
// console.log(areaOfRectangle(height,width))

console.log("\n-------Private Counter with Closures-------");

// function privateCournter() {
//   let count = 0;
//   return function inner() {
//     return count += 1;
//   };
// }
// let fn = privateCournter();
// console.log(fn())
// console.log(fn())
// console.log(fn())

console.log("\n-------find the largest num-------");
// function largestNum(arr) {
//   let bigNum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] > bigNum) bigNum = arr[i + 1];
//   }
//   console.log(bigNum);
// }

// largestNum([1, 2, 3, 4, 33, 2, 4, 4]);

console.log("\n-------Product Data Processor-------");

// const products = [
//   { name: "Laptop", price: 999.99, category: "Electronics" },
//   { name: "Smartphone", price: 699.99, category: "Electronics" },
//   { name: "Coffee Maker", price: 49.99, category: "Home Appliances" },
//   { name: "Running Shoes", price: 89.99, category: "Apparel" },
//   { name: "Blender", price: 39.99, category: "Home Appliances" },
//   { name: "T-Shirt", price: 19.99, category: "Apparel" },
//   { name: "Headphones", price: 149.99, category: "Electronics" }
// ];

// const productName = products.map((p) => p.name)
// const productOfEle = products.filter(p=> p.category === 'Electronics')
// const totalPrice = products.reduce((acc,val)=>{
//   acc += val.price
//   return acc
// },0)
// console.log('product  name',productName)
// console.log('productOfEle',productOfEle)
// console.log('totalPrice',totalPrice)

console.log("\n-------Debounce Utility from Scratch-------");

// function debounce(fn, delay) {
//   let timer;

//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(), delay);
//   };
// }
// function helloworld() {
//   console.log("hello");
// }
// const debounceH = debounce(helloworld, 1000);
// debounceH()
// debounceH()
// debounceH()
console.log("\n-------Sequential Task Runner-------");

// function s1(){
//   let promise = new Promise((res,rej)=>{
//     setTimeout(() => {
//       console.log('Step 1 done')
//       res()
//     }, 1000);
//   })
//   return promise
// }
// function s2(){
//   let promise = new Promise((res,rej)=>{
//     setTimeout(() => {
//       console.log('Step 2 done')
//       res()
//     }, 1000);
//   })
//   return promise
// }
// function s3(){
//   let promise = new Promise((res,rej)=>{
//     setTimeout(() => {
//       console.log('Step 3 done')
//       res()
//     }, 1000);
//   })
//   return promise
// }

// async function runSteps() {
//   try {
//     await s1()
//     await s2()
//     await s3()

//   } catch (error) {
//     throw new Error('error')
//   }

// }

// runSteps()
console.log("\n-------API DATA CLEANER-------");

// async function getData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     if (!res.ok) {
//       throw new Error("network issueu");
//     }
//     let data = await res.json();
//     // console.log(data);
//     return {
//       _id:data.id,
//       name: data?.name,
//       email: data?.email,
//       website: data?.website,
//     };
//   } catch (error) {
//     console.log(error?.message);
//   }
// }

// async function displayData() {
//   let cleanUser = await getData();
//   console.log(cleanUser); 
//  }
//  displayData()

console.log("\n-------mini event emitter-------");

const eventEmitterObj = {
  // 1. The Storage Box: Map event names to arrays of listener functions
  events: {},

  // 2. Register a listener function for a named event
  on(eventName, fn) {
    // If this event hasn't been created yet, initialize it as an empty array
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    // Add the callback function to the array
    this.events[eventName].push(fn);
  },

  // 3. Trigger an event and execute all registered functions with data
  emit(eventName, data) {
    // Check if there are any listeners registered for this event
    if (this.events[eventName]) {
      // Loop through the array and fire each function
      this.events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  },

  // 4. Remove a specific listener function from an event
  off(eventName, fn) {
    // If the event exists, filter out the matching function
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (registeredFn) => registeredFn !== fn
      );
    }
  }
};

// ==========================================
// TEST DRIVE (How to verify it works)
// ==========================================

// Create a couple of callback functions
const welcomeMessage = (name) => console.log(`Welcome, ${name}!`);
const logActivity = (name) => console.log(`Activity Logged: ${name} signed in.`);

// 1. Register the listeners
eventEmitterObj.on("login", welcomeMessage);
eventEmitterObj.on("login", logActivity);

// 2. Broadcast the event (Both functions should run)
console.log("--- First Emit ---");
eventEmitterObj.emit("login", "Rahul"); 
// Output:
// "Welcome, Rahul!"
// "Activity Logged: Rahul signed in."

// 3. Remove one listener (Unsubscribe)
eventEmitterObj.off("login", welcomeMessage);

// 4. Broadcast again (Only logActivity should run)
console.log("\n--- Second Emit (After off) ---");
eventEmitterObj.emit("login", "Rahul");
// Output:
// "Activity Logged: Rahul signed in."