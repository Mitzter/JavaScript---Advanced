class Stringer{
    innerString = '';
    innerLength = 0;

    constructor(str, length){
        this.str = str;
        if(length < 0){
            this.length = 0;
        }else{
            this.length = length;
        }
        
        
    }

    

    decrease(length){
        let newString = ''
        this.length = this.length - length;
        for(i = 0; i < this.length; i++){
            newString += innerString[i];
        }
    }

    increase(length){
        this.length = this.length + length;
    }

    toString(){
        let newString = '';
        if(this.length < this.innerLength){
            for(i = 0; i < this.length; i++){
                newString += innerString[i];
            }
            newString += '...';
            this.str = newString;
            return this.str
        }
        return this.str;
    }



    

}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test