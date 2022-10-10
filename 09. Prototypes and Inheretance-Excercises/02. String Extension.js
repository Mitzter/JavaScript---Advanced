String.prototype.ensureStart = function(str){
    let result = [this];
    if(this[0] !== str){
        result.unshift(str);
        return result;
    }

    return result;
}

String.prototype.ensureEnd = function(str){
    let result = [this];
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