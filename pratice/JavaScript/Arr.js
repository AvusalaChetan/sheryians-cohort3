const arr = [1,2,3,4,5,6,7]
console.log(arr[0],arr[arr.length-1])

let temp = arr[1]
arr[1] = arr[arr.length-2]
arr[arr.length-2] = temp;

console.log(arr);

const towD = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(towD[0]);
const treeD = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

console.log(treeD[0][0]+treeD[1][1]+treeD[2][2])

let arr = []

for(let i =1;i<=10;i++){
    arr.push(i)
}
console.log(arr)

while(arr.length){
    arr.pop()
}
console.log(arr)