function city(cityInfo){
    let str = ''
    for (let keys of Object.keys(cityInfo)){
        let keyPlusValue = `${keys} -> ${cityInfo[keys]}`
        str += `${keyPlusValue} \n`
    }
    return str;
}
city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })