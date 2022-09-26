function carFactory(data){
    let result = {}
    result.model = data.model;
    
    let engineCtor = {
        "Small engine": {power: 90, volume: 1800},
        "Normal engine": {power: 120, volume: 2400},
        "Monster engine": {power: 200, volume: 3500}
    }

    if(data.power <= 90){
        result.engine = engineCtor["Small engine"];
    } else if (data.power <= 120){
        result.engine = engineCtor["Normal engine"];
    } else {
        result.engine = engineCtor["Monster engine"];
    }
    
    let carriageCtor = {
        hatchback: function(color){
            return{
                type: "hatchback", 
                color
            }
        },
        coupe: function(color){
            return{
                type: "coupe",
                color
            }
        }
    }
    
    result["carriage"] = carriageCtor[data.carriage](data.color);

    let size = data.wheelsize % 2 === 0 ? data.wheelsize - 1: data.wheelsize;

    result.wheels = new Array(4).fill(size);
    
    //console.table(result);
    return result;
    
}

carFactory({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 });

carFactory({ model: 'Opel Vectra',

power: 110,

color: 'grey',

carriage: 'coupe',

wheelsize: 17 });