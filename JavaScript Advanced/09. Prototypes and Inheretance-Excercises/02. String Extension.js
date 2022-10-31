(function solve(){
    String.prototype.ensureStart = function(str){
        let result = str;
        if(result[0] !== str){
            result.unshift(str);
            return result;
        }
    
        return result;
    }
    
    String.prototype.ensureEnd = function(str){
        let result = str;
        if(this[this.length] !== str){
            result.push(str);
            return result;
        }
    
        return result;
    }
    
    String.prototype.isEmpty = function(){
        if(this === ''){
            return true;
        }
        return false;
    }
    
    String.prototype.truncate = function(n){
        if(this.length < n){
            return this;
        } else if(this.length > n){
            let buffer = [];
            for(let ch in this){
                buffer.push(ch)
                if(ch === ' '){
                    buffer.push('...');
                    return buffer;
                }
                let newBuffer = [];
                for(let i = 0; i < n-3; i++){
                    
                    newBuffer.push(this[i])
                }
                newBuffer.push('...');
                return newBuffer;
            }
            let result = splitString[0]+'...';
            return result;
        } else if(n < 4){
            let buffer = [];
            for(i = 0; i < n; i++){
                buffer.push('.');
            }
            return buffer;
        }
    }
})()



let str = 'my string';

str = str.ensureStart('my');

str = str.ensureStart('hello ');

str = str.truncate(16);

str = str.truncate(14);

str = str.truncate(8);

str = str.truncate(4);

str = str.truncate(2);

str = String.format('The {0} {1} fox',

'quick', 'brown');

str = String.format('jumps {0} {1}',

'dog')