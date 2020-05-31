function main(input) {
    const args = input.trim().split("\n");
    var AA = args[1].split(' ');
    var reducer = (a, b) => a * b;
    var answer = AA.reduce(reducer);
    if(answer > 1000000000000000000){
        console.log("-1")
    }else{
        console.log(answer.toString())
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));