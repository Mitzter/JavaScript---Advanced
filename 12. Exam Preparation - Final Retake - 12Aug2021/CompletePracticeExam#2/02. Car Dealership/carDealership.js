class CarDealership {
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    

    addCar(model, horsepower, price,mileage){
        if(!model || horsepower < 0 || price < 0 || mileage < 0){
            throw new Error('Invalid input!');
        }
        let car = new Car(model,horsepower,price,mileage);
        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage){
        let car = this.availableCars.find(x => x.model === model);
        const index = this.availableCars.indexOf(car);
        if(!car){
            throw new Error(`${model} was not found!`);
        } else {
            let carMileage = car.mileage;
            let mileageDifference = carMileage - desiredMileage;
            
            if(carMileage <= desiredMileage){
                let soldCar = new SoldCar(car.model, car.horsepower, car.price);
                this.availableCars.splice(index, 1);
                this.totalIncome += car.price;
                this.soldCars.push(soldCar);
                return `${car.model} was sold for ${car.price}$`
            } else if (mileageDifference <= 40000){
                car.price = car.price - (car.price * 0.05);
                let soldCar = new SoldCar(car.model, car.horsepower, car.price);
                this.availableCars.splice(index, 1);
                this.totalIncome += car.price;
                this.soldCars.push(soldCar);
                return `${car.model} was sold for ${car.price}$`
            } else if (mileageDifference > 40000){
                car.price = car.price - (car.price * 0.1);
                let soldCar = new SoldCar(car.model, car.horsepower, car.price);
                this.availableCars.splice(index, 1);
                this.totalIncome += car.price;
                this.soldCars.push(soldCar);
                return `${car.model} was sold for ${car.price}$`
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
    }

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
            if(i === this.soldCars.length -){
                stringBuilder += `---${this.soldCars[i].model} - ${this.soldCars[i].horsepower} HP - ${this.soldCars[i].soldPrice}$`;
            }
            stringBuilder += `---${this.soldCars[i].model} - ${this.soldCars[i].horsepower} HP - ${this.soldCars[i].soldPrice}$\n`;
        }

        return stringBuilder;
    }
}

class Car {
    constructor(model, horsepower, price, mileage){
        this.model = model;
        this.horsepower = horsepower;
        this.price = price;
        this.mileage = mileage;
    }
}

class SoldCar {
    constructor(model, horsepower, soldPrice){
        this.model = model;
        this.horsepower = horsepower;
        this.soldPrice = soldPrice;
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));