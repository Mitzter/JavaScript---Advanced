function greatestCommonDivisor(num1, num2){
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')){
        return false;
    }
    
    num1 = Math.abs(num1);
    num2  = Math.abs(num2);
    while(num2){
        var divider = num2;
         num2 = num1 % num2;
         num1 = divider;
    }
    return num1;
}

console.log(greatestCommonDivisor(15,5))