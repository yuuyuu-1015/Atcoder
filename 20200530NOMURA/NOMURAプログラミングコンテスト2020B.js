function main(input) {
    console.log(input.split('?').join("D"));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));