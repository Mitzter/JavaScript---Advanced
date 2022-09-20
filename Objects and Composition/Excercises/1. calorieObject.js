function calorieObject(data){
    let result = {}

    for(let i = 0; i < data.length; i+=2){
        result[data[i]]  = data[i + 1];
    }

    console.log(res);
}

calorieObject(['Yoghurt', '48', 'Rise', '138',

'Apple', '52']);
console.log("----------");
calorieObject(['Potato', '93', 'Skyr', '63',

'Cucumber', '18', 'Milk', '42']);