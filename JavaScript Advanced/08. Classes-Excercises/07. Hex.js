class Hex {
    
    constructor(value){
        this.value = value;
    }

    valueOf(){
        
        return this.value;
    }

    toString(){
        let decimalValue = this.value;
        let hexString = decimalValue.toString(16);
        return `0x` + hexString.toUpperCase();
    }
    plus(number){
        
        this.value += number;
        let hexString = this.value.toString(16);
        return `0x` + hexString.toUpperCase();
    }

    minus(number){
        if(number > this.value){
            this.value = number - this.value;
        }else{
            this.value -= number;
        }
        
        let hexString = this.value.toString(16);
        return `0x` + hexString.toUpperCase();
    }

    parse({string}){

    }

}


let hex = new Hex(255);

console.log(hex.valueOf());

console.log(hex.toString());

let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
console.log(a.minus(c).toString());
console.log(a.plus(c).toString());