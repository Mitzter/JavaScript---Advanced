function solution(){
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavours: 0
    }

    let recipesEnum = {
        apple : {carbohydrate: 1, flavour: 2},
        lemonate : {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein:5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    return function inputHandler(input){
        let actionHandler = cmdOption();
        let [cmd, microelement, quantity] = input.split(" ");
        return actionHandler[cmd](microelement, quantity);

    }

    function cmdOption(){
        return {
            restock: (microelement, quantity) => {
                store[microelement] = store[microelement] + Number(quantity);
                return "Success"
            },
            prepare:(recipe, quantity) => {
                let isDone = true;
                let str = "";
                let copyStore = JSON.parse(JSON.stringify(store)) //deep copy of store
                for(let [k,defQuantity] of Object.entries(recipesEnum[recipe])){
                    let needValue = Number(quantity) * defQuantity;
                    if(store[key] < needValue){
                        isDone = false;
                        str = `Error: not enough ${key} in stock`;
                        break
                    }
                    copyStore[key] -= needValue
                }
                if(!isDone){
                    return str;
                }
                store = copyStore;
                return "Success"
            },
            report:() => {
                return `protein=${store.protein} carbohydrates=${store.carbohydrate} fat=${store.fat} flavours=${store.flavours}`
            }
        }
    }
}

let manager = solution();

console.log(manager("restock flavour 50")); //Success
console.log(manager ("prepare lemonade 4")); //Error:not enough carbohydrate in stock