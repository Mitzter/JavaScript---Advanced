/* class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }

    this.spaceAvailable -= spaceRequired;
    this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let plant = this.plants.find((x) => x.plantName == plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe == true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    plant.ripe = true;
    plant.quantity += quantity;

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    let plant = this.plants.find((x) => x.plantName == plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe == false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    this.plants = this.plants.filter((x) => x.plantName != plantName);
    this.storage.push({ plantName, quantity: plant.quantity });
    this.spaceAvailable += plant.spaceRequired;
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let toReturn = `The garden has ${this.spaceAvailable} free space left.\n`;
    toReturn += `Plants in the garden: ${this.plants
      .sort((a, b) => a.plantName.localeCompare(b.plantName))
      .map((x) => x.plantName)
      .join(", ")}\n`;

    toReturn += `Plants in storage: `;
    if (this.storage.length === 0) {
      toReturn += "The storage is empty.";
    } else {
      let stringsToAdd = [];
      for (let p of this.storage) {
        stringsToAdd.push(`${p.plantName} (${p.quantity})`);
      }
      toReturn += stringsToAdd.join(", ");
    }
    return toReturn;
  }
} */

class Garden {
  constructor(spaceAvailable){
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired){
    if(spaceRequired > this.spaceAvailable){
      throw Error("Not enough space in the garden.");
    }
    let currentPlant = {
       plantName,
       spaceRequired,
       ripe: false,
       quantity: 0
    }

    this.plants.push(currentPlant);
    this.spaceAvailable -= spaceRequired;

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity){
    let currentPlant = this.plants.find(plant => plant.plantName === plantName);

    if(!currentPlant){
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if(currentPlant.ripe){
      throw new Error(`The ${plantName} is already ripe.`);
    }
    if(quantity <= 0){
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    currentPlant.ripe = true;
    currentPlant.quantity = quantity;

    let returnMSG = quantity === 1 ? `${quantity} ${plantName} has successfully ripened.` :
    `${quantity} ${plantName}s have successfully ripened.`;

    return returnMSG;
  }

  harvestPlant(plantName){
    let currentPlant = this.plants.find(plant => plant.plantName === plantName);
    if(!currentPlant){
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if(!currentPlant.ripe){
      throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
    }

    this.plants = this.plants.filter(plant => plant.plantName !== plantName);
    this.storage.push({
      plantName: currentPlant.plantName,
      quantity: currentPlant.quantity
    });
    this.spaceAvailable += currentPlant.spaceRequired;
    return `The ${plantName} has been successfully harvested.`
  }

  generateReport(){
    let buff = "";

    buff += `The garden has ${this.spaceAvailable} free space left.\n`;
    buff += "Plants in the garden: "
    this.plants.sort((a,b)=> a.plantName.localeCompare(b.plantName)).forEach(plant => buff += `${plant.plantName}, `);
    buff = buff.substring(0, buff.length - 2);
    buff += `\n`;
    
    if(!this.storage.length){
      buff += "Plants in storage: The storage is empty."
    } else {
      buff += "Plants in storage: "
      this.storage.forEach(plant => buff += `${plant.plantName} (${plant.quantity}), `);
    }

    buff = buff.substring(0, buff.length - 2);

    return buff
  }
}
const myGarden = new Garden(250)

console.log(myGarden.addPlant('apple', 20));

console.log(myGarden.addPlant('orange', 200));

console.log(myGarden.addPlant('raspberry', 10));

console.log(myGarden.ripenPlant('apple', 10));

console.log(myGarden.ripenPlant('orange', 1));

console.log(myGarden.harvestPlant('orange'));

console.log(myGarden.generateReport());