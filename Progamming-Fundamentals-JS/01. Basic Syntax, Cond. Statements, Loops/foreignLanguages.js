function foreignLanguages(country){
    if (country === "England" || country === "USA"){
        console.log(`English`)
    } else if (country === "Spain" || country === "Mexico" || country === "Argentina"){
        console.log(`Spanish`)
    } else{
        console.log(`unknown`)
    }
}
foreignLanguages(`Mexico`)