function companyUsers(input) {
    let obj = {};
    for (const line of input) {
        let tokens = line.split("-> ");
        let companyName = tokens[0];
        let user = tokens[1];
        if (!obj.hasOwnProperty(companyName)) {
            obj[companyName] = [];
        }
        if (!obj[companyName].includes(user)) {
            obj[companyName].push(user)
        }
    }
    let sorting = Object.entries(obj).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    for (const [key,value] of sorting) {
        console.log(key.trim());
        for (const user of value) {
            console.log(`-- ${user}`)
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
)