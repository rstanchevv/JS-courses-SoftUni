"use strict";
function cityTaxes(cityName, population, treasury) {
    const city = {
        cityName: cityName,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += this.population * percentage / 100;
        },
        applyRecesion(percentage) {
            this.treasury -= this.treasury * percentage / 100;
        }
    };
    return city;
}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
//# sourceMappingURL=index.js.map