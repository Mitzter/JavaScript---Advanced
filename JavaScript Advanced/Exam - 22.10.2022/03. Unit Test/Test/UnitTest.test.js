let chooseYourCar = require('../chooseYourCar');
let {assert} = require('chai');

describe("Tests chooseYourCar", function() {
    describe("Tests choosingType function", function() {
        it("Throws invalid error at incorrect year input", function() {
            assert.throw(()=> chooseYourCar.choosingType("BWM", "red", 1899), "Invalid Year!");
            assert.throw(()=> chooseYourCar.choosingType("BMW", "red", 2023), "Invalid Year!");
        });
        it("Throws error if string type is different from Sedan", function(){
            assert.throw(()=> chooseYourCar.choosingType("NotSedan", "Red", 1900), "This type of car is not what you are looking for.");
        });
        it("Returns string if the year is greater or equal to 2010", function(){
            assert.equal(chooseYourCar.choosingType("Sedan", "Red", 2010), `This Red Sedan meets the requirements, that you have.`);
            assert.equal(chooseYourCar.choosingType("Sedan", "black", 2022), `This black Sedan meets the requirements, that you have.`);
        });
        it("If above conditions aren't met, returns different message", function(){
            assert.equal(chooseYourCar.choosingType("Sedan", "black", 2000), `This Sedan is too old for you, especially with that black color.`);
        });
     });
    describe("Tests brandName function", function(){
        it("Must remove element from the array that is located on the specified index", function(){
            let array = ["BMW", "Toyota", "Peugeot"];
            let index = 2;
            let expected = `BMW, Toyota`;
            let actual = chooseYourCar.brandName(array, index);
            assert.equal(actual, expected);
        });
        it("Must throw error at invalid inputs", function(){
            assert.throw(()=>chooseYourCar.brandName("string", 0), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(["BMW"], "two"), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(["BMW"], 3), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(["BMW"], -1), "Invalid Information!");
        });
        
    });
    describe("Tests carFuelConsumption function", function(){
        it("Throws error at invalid inputs", function(){
            assert.throw(()=>chooseYourCar.carFuelConsumption("two", 0), "Invalid Information!");
            assert.throw(()=>chooseYourCar.carFuelConsumption(0, "two"), "Invalid Information!");
            assert.throw(()=>chooseYourCar.carFuelConsumption("two", "three"), "Invalid Information!");
            assert.throw(()=>chooseYourCar.carFuelConsumption(-1, 5), "Invalid Information!");
            assert.throw(()=>chooseYourCar.carFuelConsumption(5, -2), "Invalid Information!");
            assert.throw(()=>chooseYourCar.carFuelConsumption(-2, -10), "Invalid Information!");
        });
        it("Calculates liters per 100 kilometers consumption, must return success message if consumption is less or equal to 7L", function(){
            let distance = 200;
            let consumptedFuelInLiters = 5;
            let expectedCalc = ((consumptedFuelInLiters/distance) * 100).toFixed(2);
            let expectedStr = `The car is efficient enough, it burns ${expectedCalc} liters/100 km.`
            let actualStr = chooseYourCar.carFuelConsumption(distance, consumptedFuelInLiters);
            assert.equal(expectedStr, `The car is efficient enough, it burns 2.50 liters/100 km.`);
            assert.equal(expectedStr, actualStr);

            
            expectedStr = `The car is efficient enough, it burns 7.00 liters/100 km.`
            let actualStr2 = chooseYourCar.carFuelConsumption(100, 7);
            assert.equal(expectedStr,actualStr2);
        });
        it("If consumption is above 7L, returns a different string", function(){
            let consumptedFuelInLiters = 50;
            let distance = 200;
            let expectedCalc = ((consumptedFuelInLiters/distance) * 100).toFixed(2);
            let actualStr = chooseYourCar.carFuelConsumption(distance, consumptedFuelInLiters);
            let expectedStr = `The car burns too much fuel - ${expectedCalc} liters!`;
            assert.equal(expectedStr, "The car burns too much fuel - 25.00 liters!");
            assert.equal(expectedStr, actualStr);
        });
    });
});

