function createComputerHierarchy(){
    class Hardwear{
        constructor(manufacturer){
            this.manufacturer = manufacturer;
            
        }
    }
    class Keyboard extends Hardwear{
        constructor(manufacturer, responseTime){
            super(manufacturer)
            this.responseTime = Number(responseTime);
        }
    }
    class Monitor extends Hardwear{
        constructor(manufacturer, width, height){
            super(manufacturer);
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Battery extends Hardwear{
        constructor(manufacturer,expectedLife){
            super(manufacturer);
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer extends Hardwear{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            super(manufacturer);
            if(this.constructor === Computer){
                throw new Error("Can't instantiate abstract class!");
            }
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }

        
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace,
            weight, color, battery){
                super(manufacturer, processorSpeed, ram, hardDiskSpace);
                this.weight = Number(weight);
                this.color = String(color);
                this._battery = battery;
            }

            get battery(){
                return this._battery;
            }
            set battery(batteryInput){
                if(batteryInput === Battery){
                    this._battery = batteryInput;
                } else {
                    throw new TypeError("Error");
                }
            }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram,hardDiskSpace,
            keyboard, monitor){
                super(manufacturer,processorSpeed, ram,hardDiskSpace);
                this._keyboard = keyboard;
                this._monitor = monitor;
            }

            get keyboard(){
                return this._keyboard;
            }
            set keyboard(input){
                if(input === Keyboard){
                    this._keyboard = input;
                } else {
                    throw new TypeError("Error");
                }
            }

            get monitor(){
                return this._monitor;
            }
            set monitor(input){
                if(input === Monitor){
                    this._monitor = input
                } else {
                    throw new TypeError("Error");
                }
            }

          
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();

let Computer = classes.Computer;
console.log(Computer);
let Laptop = classes.Laptop;

let Desktop = classes.Desktop;

let Monitor = classes.Monitor;

let Battery = classes.Battery;

let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
 console.log(battery);
  let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
 console.log(laptop);