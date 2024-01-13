interface CityContract {
    cityName: string,
    population: number,
    treasury: number,
    taxRate: number,
    collectTaxes(): void,
    applyGrowth(percentage:number): void,
    applyRecesion(percentage:number): void,
}

function cityTaxes(cityName: string, population: number, treasury: number): CityContract{
    const city: CityContract = {
        cityName: cityName,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes(): void {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage: number): void {
            this.population += this.population * percentage / 100
        },
        applyRecesion(percentage: number): void {
            this.treasury -= this.treasury * percentage / 100
        }
    }
    return city;
}

const city =

cityTaxes('Tortuga',

7000,

15000);
console.log(city)

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);