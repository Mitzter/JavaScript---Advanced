function townsToJSON(input){
    let arr = input.slice(0, 1);
    arr = arr[0].split(' | ');
    arr[0] = arr[0].slice(2);
    arr[2] = arr[2].slice(0,9);
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