function printEverytNthElement(arr,step){
    let res = [];
    for(let i=0; i<arr.length; i += step){
        res.push(arr[i]);
    }

    console.log(res);
}


printEverytNthElement(['5',

'20',

'31',

'4',

'20'],

2)

printEverytNthElement(['dsa', 'asd', 'test', 'tset'], 2)
printEverytNthElement(['1', '2', '3', '4', '5'], 6)