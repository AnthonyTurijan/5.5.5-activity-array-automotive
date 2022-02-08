//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

import { Vehicle } from "./vehicleBaseClass";

class a28Mercury extends Vehicle {
    constructor (make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers = 6;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.fuel = 100;
        this.scheduleService = false;
    }
    start(){
        if (this.fuel > 0){
            this.started == true
        }
    }
    loadPassenger(num){
        if (this.passenger < this.maxPassengers){
            if ((num + this.passenger) <= this.maxPassengers){
                this.passenger = num;
                return this.passenger
            }
        }
 
    }
    scheduleService(mileage) {
        if (this.mileage < 30000){
            this.scheduleService == true
            return this.scheduleService
        }
    }
}

