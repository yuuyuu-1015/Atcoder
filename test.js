// const data = "4,10,8,8,6";
// console.log(data);

// const data1 = data.split(",").map((x) => parseInt(x, 10));
// console.log(data1);

// const data2 = data1.filter((x, i, s) => {
//   console.log(x, i, s);
// });
// console.log(data2);

// const data3 = Array.from(new Set(data1));
// console.log(data3);

const input = "4,10,8,8,6";
const args = input.split(",").map((x) => parseInt(x, 10));
console.log("args", args);
const N = args[0],
  nums = args.slice(1);
console.log("nums", nums);

// console.log(nums.filter((n, i) => nums.indexOf(n) === i).length);
console.log(Array.from(new Set(nums)).length);
