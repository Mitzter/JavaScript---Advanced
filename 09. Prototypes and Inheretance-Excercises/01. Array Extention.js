(function arrayExtension(){
    Array.prototype.last = function () {
        return this[this.length-1];
    }
    Array.prototype.skip = function(n){
        return this.slice(n);
    }
    
    Array.prototype.take = function(n) {
        let result = [];
        for(i = 0; i < n; i++){
            result.push(this[i]);
        }
    
        return result;
    }
    
    Array.prototype.sum = function() {
        let result = 0;
        for(i = 0; i < this.length; i++){
            result+= this[i];
        }
    
        return result;
    }
    
    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
})()



