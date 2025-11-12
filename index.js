// Define the Vehicle class
class Vehicle {
  constructor(type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  drive(distance) {
    this.mileage += distance;
  }

  getDetails() {
  return `${this.year} ${this.make} ${this.model} (${this.type}) - Mileage: ${this.mileage} miles`;
}
}

// Create and use Vehicle objects
const car = new Vehicle("Car", "Honda", "Civic", 2021);
const truck = new Vehicle("Truck", "Ford", "F-150", 2019);
const motorcycle = new Vehicle("Motorcycle", "Yamaha", "R6", 2022);

// Simulate trips
car.drive(120);
truck.drive(300);
motorcycle.drive(75);

// Display updated info
console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());