//You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces.
//The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude".
//The Latitude and Longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
//The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.

//The output should be an array of objects wrapped in JSON.stringify()
//Latitude and Longitude must be parsed to numbers, and represented till the second digit after the decimal point!

function townsToJSON(input){
    let arr = input.slice(0, 1);
    arr = arr[0].split(' | ');
    arr[0] = arr[0].slice(2); 
    arr[2] = arr[2].slice(0,9); //This and the slice above are unnecessary, did so for testing purposes for later in the task.
    input.shift();
    
    let result = [];
    
    for(const iterator of input){
        let array = [];
        array = iterator.split(' | ');
        array[0] = array[0].slice(2);
        array[2] = array[2].slice(array[2].length - array[2].length, array[2].length - 2);

        let Town = array[0];
        let Latitude = Number(Math.round(array[1] * 100) / 100);
        let Longitude = Number(Math.round(array[2] * 100) / 100);
        result.push({Town, Latitude, Longitude});
    }
    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |']);