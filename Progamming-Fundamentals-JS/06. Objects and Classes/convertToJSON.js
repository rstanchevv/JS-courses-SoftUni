function convertToJSON(a, b, c){
    let myObj = {
        name: a,
        lastName: b,
        hairColor: c
    }
    let myObjToJSON = JSON.stringify(myObj);
    return myObjToJSON;
}
convertToJSON('George', 'Jones',

'Brown')