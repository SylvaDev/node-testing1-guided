// Build a Car class!
class Car {
    constructor(make, model) 
    {
        this.make = make;
        this.model = model;
        this.running = false;
        this.odometer = 0;
    }
    drive(distance) 
    {
        this.odometer += distance
    }
    async driveAsync(distance) 
    {
        this.odometer += distance
        return this.odometer
    }
}

module.exports = Car