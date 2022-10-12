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
    plus({number}){
        this.value += number;
        let hexString = this.value.toString(16);
        return `0x` + hexString.toUpperCase();
    }


}


let hex = new Hex(255);

console.log(hex.valueOf());

console.log(hex.toString());

console