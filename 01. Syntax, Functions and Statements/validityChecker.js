function validityChecker(x1,x2,y1,y2){
    //Write a program that receives a total of 4 parameters in the format x1, y1, x2, y2.
    //Check if the distance between each point (x, y) and the beginning of the Cartesian coordinate system (0, 0) is valid.
    //A distance between two points is considered valid if it is an integer value.

    

    let firstSet = Math.sqrt(x1 ** 2 + y1 ** 2)
    let secondSet = Math.sqrt(x2 ** 2 + y2 ** 2)
    let thirdSet = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

    if (Number.isInteger(firstSet)){
        console.log (`{${x1}, ${x2}} to {0, 0} is valid`);
    }else{
        console.log (`{${x1}, ${x2}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(secondSet)){
        console.log (`{${y1}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log (`{${y1}, ${2}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(thirdSet)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }


}

validityChecker(3, 0, 0, 4); // all valid
console.log(`-------------------`)
validityChecker(2, 1, 1, 1); // first two invalid, last valid