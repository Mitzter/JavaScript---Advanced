const {expect} = require('chai');
const { isOddOrEven } = require('../2. Even or Odd');

describe('isOddOrEven', () =>{

    it('should return undefined if input is different from string', () => {
        let result = isOddOrEven(2);
        expect(result).to.be.equal(undefined);

        let secondResult = isOddOrEven({});
        expect(secondResult).to.be.equal(undefined);
    });

    it('should return even if input length is divisible by 2', () => {
        let result = isOddOrEven('star');
        expect(result).to.be.equal('even');
    });

    it('should return odd if input length gives leftover after dividing by 2', () => {
        let result = isOddOrEven('micro');
        expect(result).to.be.equal('odd');
    });

    it('should function correctly after passing multiple different strings in a row', () => {
        let resultOne = isOddOrEven('wars');
        let resultTwo = isOddOrEven('macro');
        let resultThree = isOddOrEven('four');

        expect(resultOne).to.be.equal('even');
        expect(resultTwo).to.be.equal('odd');
        expect(resultThree).to.be.equal('even');

        let resultFour = isOddOrEven('wars');
        resultFour = isOddOrEven('macro');
        resultFour = isOddOrEven('four');

        expect(resultFour).to.be.equal('even');
    });

    

})