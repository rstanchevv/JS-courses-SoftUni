class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = Number(fuel);
        parts.quality = parts.engine * parts.power;
    }

    drive(fuellLoss) {
        return this.fuel -= fuellLoss;
    }
}