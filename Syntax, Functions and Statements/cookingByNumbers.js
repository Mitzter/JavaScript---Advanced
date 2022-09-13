function cookingByNumbers(inputNum, ... commands){
   /*
   chop - divinde the number by two
   dice - square root of a number
   spice - add 1 to the number
   bake - multiply number by 3
   fillet - subtract 20% from the number
   */
   //for (let i = 0; i < commands.length; i++){
   // inputNum = manipulator(inputNum, commands[i])
   //}

   commands.forEach(x => {
    inputNum = manipulator(inputNum, x)
    })
   function manipulator(num, command){
    switch(command){
        case "chop":
            num /= 2;
            console.log(num);
            break;
        case "dice":
            num = Math.sqrt(num);
            console.log(num);
            break;
        case "spice":
            num += 1;
            console.log(num);
            break;
        case "bake":
            num *= 3;
            console.log(num);
            break;
        case "fillet":
            num *= 0.80;
            console.log(num);
            break;
    }
        return num;
   }
   
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');