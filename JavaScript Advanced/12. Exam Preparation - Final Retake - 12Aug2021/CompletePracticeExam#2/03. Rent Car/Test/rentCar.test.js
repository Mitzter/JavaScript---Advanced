let rentCar = require('../rentCar');
let {assert} = require('chai');

describe("Testing rentCar", function() {
    describe("Testing searchCar", function(){
        it("Should throw error if first input is not array", function (){
            assert.throw(()=> rentCar.searchCar("string", "string"),"Invalid input!");
        });
        it("Should throw error if the second input is not a string", function(){
            assert.throw(()=> rentCar.searchCar([],0),"Invalid input!");
        });
        it("Should throw error if models do not exist in catalog", function(){
            assert.throw(()=> rentCar.searchCar([], "string"), 'There are no such models in the catalog!');
        });
        it("Should return matching element", function (){
            let findModel = [];
            let shop = ["BMW", "Audi"];
            for(let i = 0; i < shop.length; i++){
                if(shop[i] === "Audi"){
                    findModel.push(shop[i]);
                }
            }
            assert.equal(rentCar.searchCar(shop, "Audi"), `There is ${findModel.length} car of model Audi in the catalog!`);
        })

    });

    describe ("Testing calculatePriceOfCar", function(){
        it("Throw error if invalid paramters are given", function (){
            assert.throw(()=> rentCar.calculatePriceOfCar(0,"string"), "Invalid input!");
        });
        it("Returns the price and the model for renting a car for the given days", function(){
            assert.equal(rentCar.calculatePriceOfCar("BMW", 2), `You choose BMW and it will cost $90!`);
        });
        it("Throws error if there is no model in catalog", function (){
            assert.throw(()=> rentCar.calculatePriceOfCar("batmobile", 2), `No such model in the catalog!`);
        });
    });

    describe ("Testing checkBudget", function(){
        it("Throw error on invalid parameters", function(){
            assert.throw(()=> rentCar.checkBudget("string", "test", "invalid"), "Invalid input!");
        });
        it("Rent a car if budget is bigger or equal to cost", function(){
            assert.equal(rentCar.checkBudget(50,2,150), `You rent a car!`);
        });
        it("If budget is less than cost, the function returns message", function(){
            assert.equal(rentCar.checkBudget(50,2,50), `You need a bigger budget!`);
        })
    })
})