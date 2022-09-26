//Create a function that creates a register for the heroes, with their names, level, and items, if they have such
//The register should accept data in a specified format, and return it presented in a specified format
//The input comes as an array of strings. Each element holds data for a hero, in the following format:

//"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."

//You must store the data about every hero. The name is a string, a level is a number and the items are all strings.

//The output is a JSON representation of the data for all the heroes you’ve stored. The data must be an array of all the heroes.


function heroicInventory(input){
    let inventory = [];

    for(const iterator of input){
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);
        //there is case where input hero has no items
        items = items ? items.split(', ') : [];

        inventory.push({name, level, items});
    }

    console.log(JSON.stringify(inventory));

}

heroicInventory(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']);

console.log(`----------`)
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])