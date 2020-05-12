function main(input) {
    const AA = input.split(" ");
    const BB = parseInt(AA[0]);
    const BA = parseInt(AA[1]);
    if(BB * BA % 2 === 0){
        console.log(Even);
    }else{
        console.log(Odd);
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));