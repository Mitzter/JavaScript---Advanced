function fruit(type, weight, price){
    let weightInKG = weight / 1000;
    let result = weightInKG * price;

    
    console.log(`I need ${result.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${type}.`);

}

fruit('orange', 2500, 1.80);