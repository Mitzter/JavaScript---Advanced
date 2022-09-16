function solve(pies, firstFlavor, secondFlavor){
    //Receive three parameters - an array of pies and two strings
    // Take all pie flavors between and including the two strings
    // Return the result as an array of strings

    let start = pies.indexOf(firstFlavor);
    let end = pies.indexOf(secondFlavor) + 1;

    let result = pies.slice(start,end);

    console.log(result);

}
solve(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'] ,'Key Lime Pie','Lemon Meringue Pie');