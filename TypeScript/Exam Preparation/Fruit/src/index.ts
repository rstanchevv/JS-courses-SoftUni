function solve(fruit:string, grams:number, pricePerKilogram:1.80):void{
    const gramsToKilos: number = grams / 1000;
    const requiredMoney = gramsToKilos * pricePerKilogram;

    console.log(`I need ${requiredMoney.toFixed(2)}$ to buy ${gramsToKilos.toFixed(2)} kilograms ${fruit}.`)
    
}

solve('orange', 2500, 1.80)