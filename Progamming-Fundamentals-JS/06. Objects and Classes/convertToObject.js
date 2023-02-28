function convertToObject(personInfo){
    let JsonToObject = JSON.parse(personInfo);
    for (let key of Object.keys(JsonToObject)){
        console.log(`${key}: ${JsonToObject[key]}`)
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')