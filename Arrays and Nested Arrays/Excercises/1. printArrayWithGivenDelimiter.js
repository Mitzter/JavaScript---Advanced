function printArrayWithGivenDelimiter(arr,string){
    let outputArr = [];
    
    outputArr = arr.slice().join(string);
    console.log(outputArr);
}

printArrayWithGivenDelimiter(['One','Two','Three','Four','Five'],'-');