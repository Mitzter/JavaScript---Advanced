const { expect } = require('chai');
const { createCalculator } = require('../07. Unit Testing and Error Handling/7. Add Subtract');

describe('createCalculator', () => {

    let calc;

    beforeEach(function() {
        calc = createCalculator();
    })

    it('should return 0 for get when unmodified', () => {
        let result = calc.get();
        expect(result).to.be.equal(0);
    });

    it('should return -10 after subtract(10)', () => {
        calc.subtract(10);
        let result = calc.get();
        expect(result).to.be.equal(-10);
    });

    it('should return -10 after subtracting 5 and 3 and 2', () => {
        calc.subtract(5);
        calc.subtract(3);
        calc.subtract(2);
        let result = calc.get();
        expect(result).to.be.equal(-10);
    });
    
    it('should return 10 after add(10)', () => {
        calc.add(10);
        let result = calc.get();
        expect(result).to.be.equal(10);
    });

    it('should return 10 after adding 5 and 3 and 2', () => {
        calc.add(5);
        calc.add(3);
        calc.add(2);
        let result = calc.get();
        expect(result).to.be.equal(10);
    });

    it('should return NaN after adding input which isnt a number', () => {
        calc.add('test');
        let result = calc.get();
        expect(result).to.be.NaN;
    });

    it('should return NaN after subtracting input which isnt a number', () => {
        calc.subtract('test');
        let result = calc.get();
        expect(result).to.be.NaN;
    });

    it('should return 1 after adding 1 as a string', () => {
        calc.add('1');
        let result = calc.get();
        expect(result).to.be.equal(1);
    });

    it('should return -1 after subtracting 1 as a string', () => {
        calc.subtract('1');
        let result = calc.get();
        expect(result).to.be.equal(-1);
    });

    it('internal counter should not be able to be modified from the outside', () => {
        let result = calc.get();
        result += 1;
        result = calc.get();
        expect(result).to.be.equal(0);
    });

})