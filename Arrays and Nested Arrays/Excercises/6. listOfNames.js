//You will receive an array of names.
//Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.

function listOfNames(arr){
    let res = arr.sort((a, b)=> a.localCompare(b)); //test requires sorting alphabetically with non-capital letters as well, otherwise this is unnecessary considering the input is comprised of names which always begin with a capital letter.

    for(let  i =  0; i < res.length; i++){
        console.log(`${i+1}.${res[i]}`);
    }

    return res;
}

function functionalListOfNames(arr){
    arr.sort((a, b)=> a.localCompare(b))
        .forEach((x, i) => console.log(`${i+1}.${x}`));
}


listOfNames(["John",

"Bob",

"Christina",

"Ema"]);

functionalListOfNames(["John",

"Bob",

"Christina",

"Ema"]);
