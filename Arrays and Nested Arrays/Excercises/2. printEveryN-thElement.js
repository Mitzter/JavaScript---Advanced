function printEverytNthElement(arr,step){
    let res = [];
    for(let i=0; i<arr.length; i += step){
        res.push(arr[i]);
    }

    return res;
}


//functional solution
function printEveryNthElementFunctional(arr,step){
    return arr.filter((el, i) => {
        if(i % step === 0){
            return el;
        }
    })
}

printEverytNthElement(['5',

'20',

'31',

'4',

'20'],

2)

printEverytNthElement(['dsa', 'asd', 'test', 'tset'], 2)
printEverytNthElement(['1', '2', '3', '4', '5'], 6)