function solve (input){
    let mainIndex = 0;
    let firstRow = input[0];
    let secondaryIndex = input[0].length - 1;


    let mainSum = 0;
    let secondarySum = 0;

    for(let row = 0; row < input.length; row ++){
        mainSum += input[row][mainIndex];
        secondarySum += input[row][secondaryIndex];

        mainIndex++;
        secondaryIndex--;
    }

    console.log(mainSum + ' ' + secondarySum);
}

let matrix = [
    [1,2,3],
    [7,8,9],
    [8,9,10]
]

solve(matrix);