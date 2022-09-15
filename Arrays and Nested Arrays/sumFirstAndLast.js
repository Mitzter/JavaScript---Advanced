function solve(input){
    let result = 0;
    result += Number(input[0]);
    result += Number(input[input.length - 1]);

    console.log(result);
}

function solveTwo(input){
    return Number(arr.pop()) + Number(arr.shift());
}

solve(['20', '30', '40',]);
console.log(`-----------`);
solve(['20', '30', '40',]);