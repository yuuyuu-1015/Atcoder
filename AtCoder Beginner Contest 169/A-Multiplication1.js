function main(input) {
    const args = input.split(" ").map(x => +x)
    console.log(args[0] * args[1])
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));