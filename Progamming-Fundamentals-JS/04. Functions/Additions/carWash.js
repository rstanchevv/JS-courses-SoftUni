function carWash(arr){
    let value = 0;
    for(let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case "soap":
                value += soap()
                break;
            case "water":
                value += water(value)
                break;
            case "vacuum cleaner":
                value += vacuumCleaner(value);
                break;
            case "mud":
                value -= mud(value);
                break;
        }
    }
    return `The car is ${value.toFixed(2)}% clean.`
    function soap(n){
        return 10;
    }
    function water(n){
        return 0.2 * n;
    }
    function vacuumCleaner(n){
        return 0.25 * n;
    }
    function mud(n){
        return 0.1 * n;
    }
}
console.log(carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]))