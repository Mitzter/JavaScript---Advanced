const { expect } = require('chai');
const { rgbToHexColor } = require('../07. Unit Testing and Error Handling/6. RGB to Hex')

describe('rgbToHexColor', () => {

    it('should return undefined on color input different from number', () => {
        let input = 'input';
        let result = rgbToHexColor(input);

        expect(result).to.be.equal(undefined);
    });

    it('should return undefined if color ranges are below 0', ()=>{
        let input = '-10';
        let result = rgbToHexColor(input);

        expect(result).to.be.equal(undefined);
    });

    it('should return undefined if color ranges are above 255', ()=>{
        let input = '256';
        let result = rgbToHexColor(input, 0, 0);

        expect(result).to.be.equal(undefined);
    });

    it('should return color combination in hexadecimal format as string', ()=>{
        let red = 255;
        let green = 255;
        let blue = 255;

        let result = rgbToHexColor(red,green,blue);
        let compareResult = "#" + 
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2); 

        expect(result).to.be.equal(compareResult);

    });
});