const {expect} = require('chai');
const { lookupChar } = require('../3. Char Lookup');

describe('lookupChar', ()=>{

    it('should return undefined if string input is different from string', () =>{
        let result = lookupChar({}, 5);
        expect(result).to.be.equal(undefined);
    });

    it('should return undefined if index input is different from integer', () => {
        let result = lookupChar('star', 2.5);
        expect(result).to.be.equal(undefined);

        let resultTwo = lookupChar('star', 'two');
        expect(resultTwo).to.be.equal(undefined);

        let resultThree = lookupChar('star', {});
        expect(resultThree).to.be.equal(undefined);
    });

    it('should return "Incorrect index" if index is below input length and above the string length', () => {
        let errorMessage = 'Incorrect index'
        let result = lookupChar('star', 6);
        expect(result).to.be.equal(errorMessage);

        let resultTwo = lookupChar('star', -1);
        expect(resultTwo).to.be.equal(errorMessage);
    });

    it('should return the correct char at the requested index', () =>{
        let expectedResult = 'a';
        let result = lookupChar('star', 2);
        expect(result).to.be.equal(expectedResult);
    });
});