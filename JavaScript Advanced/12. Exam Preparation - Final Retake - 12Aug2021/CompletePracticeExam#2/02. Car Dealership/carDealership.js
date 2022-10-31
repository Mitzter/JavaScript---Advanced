class CarDealership {
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = Number(0);
    }
    
    

    addCar(model, horsepower, price,mileage){
        if(!model || horsepower < 0 || price < 0 || mileage < 0){
            throw new Error('Invalid input!');
        }

        let car = {
            model: model,
            horsepower: horsepower,
            price: Number(price).toFixed(2),
            mileage: Number(mileage).toFixed(2)
        }
        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage){
        let car = this.availableCars.find(x => x.model === model);
        const index = this.availableCars.indexOf(car);
        let soldCar = {
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: 0
        }
        if(!car){
            throw new Error(`${model} was not found!`);
        } else {
            let carMileage = car.mileage;
            let mileageDifference = carMileage - desiredMileage;
            
            let carPrice = Number(car.price);
            
            if(carMileage <= desiredMileage){
                soldCar.soldPrice = carPrice;
                this.availableCars.splice(index, 1);
                let currentIncome = Number(this.totalIncome);
                currentIncome = Number(currentIncome) + Number(carPrice).toFixed(2);
                this.totalIncome = parseFloat(currentIncome);
                this.soldCars.push(soldCar);
                return `${car.model} was sold for ${carPrice}$`
            } else if (mileageDifference <= 40000){
                soldCar.soldPrice = carPrice - (carPrice * 0.05);
                this.availableCars.splice(index, 1);
                let currentIncome = Number(this.totalIncome);
                currentIncome += Number(carPrice).toFixed(2);
                this.totalIncome = parseFloat(currentIncome);
                this.soldCars.push(soldCar);
                return `${car.model} was sold for ${carPrice}$`
            } else if (mileageDifference > 40000){
                soldCar.soldPrice = carPrice - (carPrice * 0.1);
                this.availableCars.splice(index, 1);
                let currentIncome = Number(this.totalIncome);
                currentIncome += Number(carPrice).toFixed(2);
                this.totalIncome = parseFloat(currentIncome);
                this.soldCars.push(soldCar);
                return `${car.model} was sold for ${carPrice}$`
            }
        }
    }
    
    currentCar(){
        let stringBuilder = '';

        if(this.availableCars.length === 0){
            stringBuilder += "There are no available cars";
            return stringBuilder;
        }

        stringBuilder += `-Available cars:\n`;
        for(let i = 0; i < this.availableCars.length; i++){
            if(i === this.availableCars.length - 1){
                stringBuilder += `---${this.availableCars[i].model} - ${this.availableCars[i].horsepower} HP - ${this.availableCars[i].mileage} km - ${this.availableCars[i].price}$`;
            } else {
                stringBuilder += `---${this.availableCars[i].model} - ${this.availableCars[i].horsepower} HP - ${this.availableCars[i].mileage} km - ${this.availableCars[i].price}$\n`;
            }
            
        }

        

        return stringBuilder;
    };

    salesReport(criteria){
        

        if(!criteria === "horsepower" || !criteria === "model"){
            throw new Error("Invalid criteria!");
        }

        if(criteria === "horsepower"){
            this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        } else {
            this.soldCars.sort((a,b ) => a.model - b.model); 
        }

        let stringBuilder = "";

        stringBuilder += `-${this.name} has a total income of ${this.totalIncome}$\n`;
        stringBuilder += `-${this.soldCars.length} cars sold:\n`;

        for(let i = 0; i < this.soldCars.length; i++){
            if(i === this.soldCars.length){
                stringBuilder += `---${this.soldCars[i].model} - ${this.soldCars[i].horsepower} HP - ${this.soldCars[i].soldPrice}$`;
            }
            stringBuilder += `---${this.soldCars[i].model} - ${this.soldCars[i].horsepower} HP - ${this.soldCars[i].soldPrice}$\n`;
        }

        return stringBuilder;
    
    };
}






let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));