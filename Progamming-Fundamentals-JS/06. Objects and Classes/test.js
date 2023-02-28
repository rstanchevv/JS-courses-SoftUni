function cityParse(obj){
    for (let keys of Object.keys(obj)){
        console.log(`${obj[keys]} ${keys}`)
    }

}
cityParse({
    name: `Sofia`,
    area: 942,
    population: 1238438,
    country: `Bulgaria`,
    postcode: `1000`
})