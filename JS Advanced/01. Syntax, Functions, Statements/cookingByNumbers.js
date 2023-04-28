function cookingByNumbers(num, op1, op2, op3, op4, op5){
    let arr = [op1, op2, op3, op4, op5];
    let finalNumber = Number(num);
    for (let i = 0; i < arr.length; i++){
        switch (arr[i]){
            case "chop": finalNumber /= 2; console.log(finalNumber); break;
            case "dice": finalNumber = Math.sqrt(finalNumber); console.log(finalNumber);break;
            case "spice": finalNumber += 1; console.log(finalNumber); break;
            case "bake": finalNumber *= 3; console.log(finalNumber); break;
            case "fillet": finalNumber *= 0.80; console.log(finalNumber.toFixed(1)); break;
        }
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')