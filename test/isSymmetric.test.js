const {expect} = require('chai');

const { isSymmetric } = require('../07. Unit Testing and Error Handling/5. Check for Symmetry')

describe('isSymmetric', () => {

    it('should return false if input is not an array', () => {
        let input = 'Not array';

        let result = isSymmetric(input);

        expect(result).to.be.false;
    });

    it('should return true if input is an symmetric array', () => {
        let input = [1,2,3,4,3,2,1];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    });

    it('should return false if input array is not symmetric', () => {
        let input = [1,2,3,4,3,2];

        let result = isSymmetric(input);

        expect(result).to.be.false;
    })


});