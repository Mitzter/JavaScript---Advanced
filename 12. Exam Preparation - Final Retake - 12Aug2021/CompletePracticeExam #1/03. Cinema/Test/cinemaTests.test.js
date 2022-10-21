let cinema = require('../cinema');
let {assert} = require('chai');

describe("Cinema", () =>{
    describe("Test for showMovies", () =>{
        let movies = []
        it("Should return there are no movies", function(){
            assert.equal(cinema.showMovies(movies), 'There are currently no movies to show.');
        });
        it("Should return the correct string of movies", function(){
            assert.equal(cinema.showMovies(["Star Wars", "Lmfao"]), "Star Wars, Lmfao");
        });
        
    });

    describe("Test ticketPrice", () =>{
        let projectionType = "Premiere";
        it("Should return the correct price", function(){
            assert.equal(cinema.ticketPrice(projectionType), 12.00);
        });
        it("Should throw error", function(){
            assert.throw(()=>cinema.ticketPrice("Noob"), 'Invalid projection type.');
        });
    });

    describe("Test swapSeatsInHall", () => {
        
        it("Should return unsuccessful on input of nonintegers", function() {
            assert.equal(cinema.swapSeatsInHall("ha", "ha"), "Unsuccessful change of seats in the hall.");
        });
        it("Should return unsuccessful if input is higher than 20", function(){
            assert.equal(cinema.swapSeatsInHall(20,30), "Unsuccessful change of seats in the hall.");
        });
        it("Should return unsuccessful if input is less or equal to 0", function(){
            assert.equal(cinema.swapSeatsInHall(0,0), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(-1,19), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(-1,-1), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(-25, 2), "Unsuccessful change of seats in the hall.");

        });
        it("Should return unsuccessful if inputs are equal", function(){
            assert.equal(cinema.swapSeatsInHall(2,2), "Unsuccessful change of seats in the hall.");
        });

        it("Should return success if inputs are different integers below 20 and above 0", function (){
            assert.equal(cinema.swapSeatsInHall(2,3), "Successful change of seats in the hall.");
        })
    })
});