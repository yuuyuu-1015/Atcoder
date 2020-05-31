const inpu = "3 0 1 1 1";
const input = inpu.split(" ")
    let N = +input.shift();
    let A = input.map(x => +x);
    let node = Array(N + 1);
    node[0] = 1;

    for(let d = 0; d < N; d++){
        node[d + 1] = (node[d] - A[d]) * 2;
        if(node[d + 1]< A[d + 1]){
            console.log(-1);
            return;
        }
    }

    var sum  = function(arr) {
        var sum = 0;
        arr.forEach(function(elm) {
            sum += elm;
        });
        return sum;
    };

    
    // console.log(sum(node));
    if(node[N] < A[N]){
        console.log(-1);
    }else if(node[N] === A[N]){
        console.log(sum(node));
    }else{
        let nodemax = Array[N + 1];
        nodemax[N] = A[N];
        for(let d = N; d > 0; d--){
            // console.log({ d, A, node, nodemax}, sum(node));
            if(nodemax[d] < node[d]){
                node[d] = nodemax[d]
                nodemax[d - 1] = node[d] + A[d - 1]
            }
        }
    }