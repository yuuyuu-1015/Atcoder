//問題点　xが最大になる方法が不明

function main(input) {
    const args = input.split("").map(n => parseInt(n, 10));
var sum = []
var answer = 0
for(i=0; i<args.length; i++){
    sum.push(args[i])
    if(args[i] === 1){
        answer +=1
    }
    for(j=i; j>=0; j=j-2)
    if(args[j-2] === 1){
        answer +=1
    }
}
console.log(answer)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

