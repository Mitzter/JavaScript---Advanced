function solve(arr){
    //Sort input array of numbers in ascending order
    //Create a new array form the second half of the input array
    // - if there are an odd number of elements, take the bigger half
    //Return the resulting array
    
    arr.sort((a, b) => a - b);
    let middle = Math.floor(arr.length / 2);
    let result = arr.slice(middle);

    return console.log(result);
}

solve([4,7,2,5]);
console.log(`---------`);
solve([3,19,14,7,2,19,6]);