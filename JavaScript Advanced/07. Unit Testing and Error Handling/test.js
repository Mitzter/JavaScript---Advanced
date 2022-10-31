function sum(arr){
    let result = 0;

    for (let element of arr){
        result += element;
    }

    return result;
}

let sumOfResult = sum([2,3,4]);

console.log(sum([2,3,4]))