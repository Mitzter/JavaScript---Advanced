function createCalculator() {

    let value = 0;
    
    return {
    add: function(num) { value += Number(num); },
    subtract: function(num) { value -= Number(num); },
    get: function() { return value; }
    }
    
}

module.exports = {
    createCalculator
}

calc = createCalculator();
calc.add('1');
console.log(calc.get());