//Write a function that orders a given array of strings, by a length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria.
// The comparison should be case-insensitive.

//The input comes as an array of strings.

//The output is the elements of the ordered array of strings, printed each on a new line.

function sortArrayTwoCriteria(arr){
    let sortArr = arr.sort((a, b) =>{
        if(a.length !== b.length){
            return a.length - b.length;
        }else{
            return a.localeCompare(b);
        }
    })
    return sortArr.join("\n");
}

function functionalSortArrayTwoCriteria(arr){
    return arr.sort((a,b)=>{
        a.length === b.length ?
            a.length - b.length :
            a.localeCompare(b);
    }).join("\n");
}
console.log(sortArrayTwoCriteria(['alpha',

'beta',

'gamma']));

console.log('--------');
console.log(functionalSortArrayTwoCriteria(['alpha',

'beta',

'gamma']));