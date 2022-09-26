//You will be given an empty rectangular space of cells. Then you will be given the position of a star. You need to build the orbits around it.
//You will be given a coordinate of a cell, which will always be inside the matrix, on which you will put the value - 1
//Then you must set the values of the cells directly surrounding that cell, including the diagonals, to 2
//. After which you must set the values of the next surrounding cells to 3 and so on. 

//The input comes as an array of 4 numbers [width, height, x, y] which represents the dimensions of the matrix and the coordinates of the star.
//The output is the filled matrix, with the cells separated by a space, each row on a new line.


function orbit(arr){
    
    let matrix = Array.from(Array(arr[0]), () => new Array(arr[1]));

    for(let i = 0; i < matrix.length; i++){
        matrix[i] = matrix.push("empty");
        for(let j = 0; j < matrix.length; j++){
            matrix[i][j] = matrix.push("empty");
        }
    }
    arrText = '';
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            arrText+=matrix[i][j]+' ';
        }
        console.log(arrText);
        arrText='';
    }

    console.log(arrText);
}

orbit([5,5,0,0])



