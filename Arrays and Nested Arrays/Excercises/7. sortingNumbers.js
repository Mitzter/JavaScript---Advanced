//Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.

//Return the resulting array.

function sortNumbers(arr){
    let sortedArr = [];
    arr.sort((a,b) => a - b);
    
    while(arr.length != 0){
        let smallNumber = arr.shift();
        let bigNumber = arr.pop();

        sortedArr.push(smallNumber);
        sortedArr.push(bigNumber);
    }
    return sortedArr;
    
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));