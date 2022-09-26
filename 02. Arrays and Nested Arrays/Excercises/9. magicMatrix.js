    //Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal.

    //The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.

    //The output is a Boolean result indicating whether the matrix is magical or not.

function magicMatrix(matrix){
    for (let i = 0; i < matrix.length - 1; i++){
        let sumRowOne = matrix[i].reduce((acc, el)=> acc + el);
        let sumRowTwo = matrix[i + 1]. reduce((acc, el) => acc + el);

        let sumColOne = 0;
        let sumColTwo = 0;
        for(let j = 0; j < matrix.length; j++){
            sumColOne += matrix[i][j];
            sumColTwo += matrix[i + 1][j];
        }   
        if(sumRowOne !== sumRowTwo || sumColOne !== sumColTwo){
            return false;
        }
    }
    return true;
}

magicMatrix([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]]);