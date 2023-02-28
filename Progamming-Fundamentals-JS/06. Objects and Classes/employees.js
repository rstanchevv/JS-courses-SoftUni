function employees(arr){
    for (let i =0; i < arr.length; i++){
        let myObj = {
        name: arr[i],
        personalNumber: arr[i].length
        }
        console.log(`Name: ${myObj.name} -- Personal Number: ${myObj.personalNumber}`)
    }
}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])