function phoneBook(input){
    let obj = {};
    for (const el of input) {
        let tokens = el.split(" ");
        let name = tokens[0];
        let phoneNumber = tokens[1];
        obj[name] = phoneNumber;
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`)
    }
}
phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])