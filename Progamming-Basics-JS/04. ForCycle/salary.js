function salary(input){
    let openedTabs = Number(input[0]);
    let salary = Number(input[1]);
    let openedSite = "";
    let tax = 0;

    for (i = 2; i <= input.length; i++){
        openedSite = input[i];
        if (openedSite === "Facebook"){
            salary = salary - (tax + 150);
        } else if (openedSite === "Instagram"){
            salary = salary - (tax + 100);
        } else if (openedSite === "Reddit"){
            salary = salary - (tax + 50);
        }
    }
    if (salary <= 0){
        console.log(`You have lost your salary.`)
    } else {
        let remaining = salary - tax;
        console.log(Math.round(remaining))
    }
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])







