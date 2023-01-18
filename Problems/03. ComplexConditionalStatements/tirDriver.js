function tirDriver(input){
    let season = input[0];
    let kmMonthly = Number(input[1]);

    if (kmMonthly <= 5000){
        switch (season){
            case "Spring":
                let salary = (kmMonthly * 4 * 0.75);
                let tax = salary * 0.1;
                let salaryAfterTax = salary - tax
                console.log(salaryAfterTax.toFixed(2));
                break;
            case "Autumn":
                let salary1 = (kmMonthly * 4 * 0.75)
                let tax1 = salary1 * 0.1
                let salaryAfterTax1 = salary1 - tax1
                console.log(salaryAfterTax1.toFixed(2));
                break;
            case "Summer":
                let salary2 = (kmMonthly * 4 * 0.90)
                let tax2 = salary2 * 0.1
                let salaryAfterTax2 = salary2 - tax2
                console.log(salaryAfterTax2.toFixed(2));
                break;
            case "Winter":
                let salary3 = (kmMonthly * 4 * 1.05)
                let tax3 = salary3 * 0.1
                let salaryAfterTax3 = salary3 - tax3
                console.log(salaryAfterTax3.toFixed(2));
                break;
        }
    } else if (kmMonthly > 5000 && kmMonthly <= 10000){
        switch (season){
            case "Spring":
                let salary4 = (kmMonthly * 4 * 0.95)
                let tax4 = salary4 * 0.1
                let salaryAfterTax = salary4 - tax4
                console.log(salaryAfterTax.toFixed(2));
                break;
            case "Autumn":
                let salary5 = (kmMonthly * 4 * 0.95)
                let tax5 = salary5 * 0.1
                let salaryAfterTax1 = salary5 - tax5
                console.log(salaryAfterTax1.toFixed(2));
                break;
            case "Summer":
                let salary6 = (kmMonthly * 4 * 1.10)
                let tax6 = salary6 * 0.1
                let salaryAfterTax2 = salary6 - tax6
                console.log(salaryAfterTax2.toFixed(2));
                break;
            case "Winter":
                let salary7 = (kmMonthly * 4 * 1.25)
                let tax7 = salary7 * 0.1
                let salaryAfterTax3 = salary7 - tax7
                console.log(salaryAfterTax3.toFixed(2));
                break;
        }
    } else if (kmMonthly > 10000 && kmMonthly <= 20000){
        switch (season){
            case "Winter":
                
            case "Summer":
            case "Spring":
            case "Autumn":
                let salary8 = (kmMonthly * 4 * 1.45)
                let tax = salary8 * 0.1
                let salaryAfterTax = salary8 - tax
                console.log(salaryAfterTax.toFixed(2));
                break;
        }  
    }
}
tirDriver(["Autumn", "8600"])