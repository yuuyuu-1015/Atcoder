function main(input) {
    const N = +input.shift();
    const A = input.map(x => +x);
    let node = Array(N + 1);
    node[0] = 1;

    for(let d = 0; d < N; d++){
        node[d + 1] = (node[d] - A[d]) * 2;
        if(node[d + 1]< A[d + 1]){
            console.log(-1);
            return;
        }
    }

    // console.log(sum(node));

    if(node[N] < A[N]){
        console.log(-1);
    }else if(node[N] === A[N]){
        console.log(sum(node));
    }else{
        let nodemax = Array[N + 1];
        nodemax[N] = A[N];
        for(let d = N; d > 0; d--){
            console.log({ d, A, node, nodemax}, sum(node));
        }
    }


}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));