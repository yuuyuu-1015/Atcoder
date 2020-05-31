function main(input) {
    // const input = "3 5 2"
    var AA = input.split('\n')[1].split(' ').map((n) => parseInt(n, 10));
    var sum  = function(arr) {
        var sum = 1;
        for (var i=0,len=arr.length; i<len; ++i) {
            sum *= arr[i];
        };
        return sum;
    };
    var answer = sum(AA);
    if(answer > 1000000000000000000){
        console.log("-1")
    }else{
        console.log(answer)
    }
    
}main(require('fs').readFileSync('/dev/stdin', 'utf8'));
