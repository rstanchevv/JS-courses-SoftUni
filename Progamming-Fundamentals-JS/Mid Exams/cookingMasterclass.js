function cookingMasterclass(arr){
    let budget = arr[0];
    let numberOfStudents = arr[1];
    let priceOfPackageFlour = arr[2];
    let priceOfSingleEgg = arr[3];
    let priceOfSingleApron = arr[4];
    
    let flourCounter = 0;
    let eggCounter = 0;
    let apronsCounter = 0;

    for (let i = 1; i <= numberOfStudents; i++){
        if (i % 5 === 0){
            eggCounter += 10;
            apronsCounter++
            continue;
        }
        flourCounter++
        eggCounter += 10;
        apronsCounter++
    }
    let apronsPlusTwentyProcent = Math.ceil(apronsCounter * 1.20);
    let totalSum = (flourCounter * priceOfPackageFlour) + (eggCounter * priceOfSingleEgg) + (apronsPlusTwentyProcent * priceOfSingleApron);
    console.log(totalSum <= budget ? `Items purchased for ${totalSum.toFixed(2)}$.` : `${(totalSum - budget).toFixed(2)}$ more needed.`)
}
cookingMasterclass([946, 
    20, 
    12.05, 
    0.42, 
    27.89]) 
    
    
    
    
    
    
    