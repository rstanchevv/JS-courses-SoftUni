function addressBook(input){
    let obj = {};
    for (const el of input) {
        let tokens = el.split(":");
        let name = tokens[0];
        let address = tokens[1];
        obj[name] = address;
    }
    let sortedObj = Object.keys(obj).sort((a,b) => a.localeCompare(b));

    for (const key of sortedObj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
addressBook(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',
'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])