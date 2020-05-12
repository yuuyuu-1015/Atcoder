function main(input) {
    var AA = input.split('\n')[1].split(' ').map((n) => parseInt(n, 10));
    var BB = 0;
    while(AA.every((n)=>(n%2)===0)) {
        BB++;
        AA = AA.map((n)=>n/2);
    }
    console.log(BB);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));