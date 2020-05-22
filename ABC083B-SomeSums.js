function main(input){
    const args = input.split(" ");
    const N = parseInt(args[0],10),
          A = parseInt(args[1],10),
          B = parseInt(args[2],10);

    const nums = Array.from(new Array(N),(v, i)=> ++i).filter((i) =>{
        var n = i.toString().split("").reduce((p, c) => p + parseInt(c), 0);
        return (n >= A && n <= B);
    })
    
    console.log(nums.reduce((p, c)=> p + c,0));
}
// main("20 2 5")
main(require('fs').readFileSync('/dev/stdin', 'utf8'));





// function main(input) {
//     //input = "20 2 5"の場合
//     const args = input.split(' ');//["20","2","5"]
//     const N = parseInt(args[0], 10),
//           A = parseInt(args[1], 10),
//           B = parseInt(args[2], 10);
//     //[20, 2, 5]

//     const nums = Array.from(new Array(N)
//     // [,,,,,,,N個分]
//     , (v, i) => ++i)
//     // [
//     //     1,  2,  3,  4,  5,  6,  7,
//     //     8,  9, 10, 11, 12, 13, 14,
//     //    15, 16, 17, 18, 19, 20
//     //  ]
//     .filter((i) => {
//         //i=20の場合
//         var n = i.toString().split('')
//         // ["2", "0"]
//         .reduce((p, c) => p + parseInt(c),0);
//         //0 + 2 + 0 = 2
//         return (n >= A && n <= B);
//         //2 >= A && 2 <= B
//     });

//     console.log(nums.reduce((p, c) => p + c, 0));
//     //条件に適応した配列の数値の総和
// }
// main("20 2 5")
// // main(require('fs').readFileSync('/dev/stdin', 'utf8'));
